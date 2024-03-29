import { useState, useEffect } from 'react';
import { getBeefyApi } from '../../../data/apis/instances';
import { config } from '../../../../config/config';
import { max, maxBy, minBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import { BeefyChartDataResponse } from '../../../data/apis/beefy';

const STATS = ['tvl', 'price', 'apy'];
const PERIODS = ['hour', 'hour', 'day', 'day'];
const LIMITS = [24, 168, 30, 365];
const DAYS_IN_PERIOD = [1, 7, 30, 365];
const MOVING_AVERAGE_POINTS = [6, 48, 10, 30];
const SNAPSHOT_INTERVAL = parseInt(process.env.SNAPSHOT_INTERVAL) || 15 * 60;

export interface HistoryChartDataState {
  data: ChartData[];
  averageValue: number;
  minValue: number;
  maxValue: number;
  loading: boolean;
}

export const useChartData = (stat, period, oracleId, vaultId, network) => {
  const [chartData, setChartData] = useState<HistoryChartDataState>({
    data: [],
    averageValue: 0,
    minValue: 0,
    maxValue: 0,
    loading: false,
  });

  const [movingAverageDetail, setMovingAverageDetail] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const names = [`${vaultId}-${config[network].chainId}`, oracleId, vaultId];
    const to = Math.floor(Date.now() / (SNAPSHOT_INTERVAL * 1000)) * SNAPSHOT_INTERVAL;

    let extraMovingAverageDays = MOVING_AVERAGE_POINTS[period];

    if (PERIODS[period] === 'hour') extraMovingAverageDays /= 24;

    const from = to - Math.floor((DAYS_IN_PERIOD[period] + extraMovingAverageDays) * 3600 * 24);

    setMovingAverageDetail(
      PERIODS[period] === 'hour'
        ? `(${MOVING_AVERAGE_POINTS[period]} ${t('Hours')})`
        : `(${MOVING_AVERAGE_POINTS[period]} ${t('Days')})`
    );

    const maxRequestedPoints = LIMITS[period] + MOVING_AVERAGE_POINTS[period];

    const fetchData = async () => {
      const api = getBeefyApi();

      const data = await api.getChartData(
        STATS[stat],
        names[stat],
        PERIODS[period],
        from,
        to,
        maxRequestedPoints
      );

      const { chartableData, average } = getChartableData(
        data,
        MOVING_AVERAGE_POINTS[period],
        LIMITS[period] // we need to get at most this amount of data charted
      );

      const minValue = minBy(chartableData, row => row.value).value;
      const maxValue = maxBy(chartableData, row => row.value).value;

      setChartData({
        data: chartableData,
        averageValue: average,
        minValue,
        maxValue,
        loading: false,
      });
    };

    setChartData({ ...chartData, loading: true });
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stat, period]);

  return { chartData, movingAverageDetail };
};

const addItems = (data, start, stop) => {
  let sum = 0;
  for (let j = start; j <= stop; j++) {
    sum += data[j].v;
  }
  return sum;
};

interface ChartData {
  name: string;
  value: number;
  datetime: string;
  moveAverageValue: number;
}

const getChartableData = (
  data: BeefyChartDataResponse,
  movingAveragePoints: number,
  chartDisplayPoints: number
) => {
  const startIndex = data.length > chartDisplayPoints ? data.length - chartDisplayPoints : 0;
  const chartableData: ChartData[] = [];
  let acum = 0;

  for (let i = startIndex; i < data.length; i++) {
    const safeStartingIndex = max([i - movingAveragePoints, 0]);
    const movingAverageForPoint =
      addItems(data, safeStartingIndex, i) / (i - safeStartingIndex + 1);
    acum += data[i].v;
    chartableData.push({
      name: data[i].name,
      value: data[i].v,
      datetime: data[i].ts,
      moveAverageValue: movingAverageForPoint,
    });
  }

  const average = acum / (data.length - startIndex);

  return { chartableData, average };
};
