import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store';
import { selectUserVaultBalance } from '../../../data/selectors/balance';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { useInView } from 'react-intersection-observer';
import { ChainTable } from '../ChainTable';
import { Section } from '../Section';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export const UserVaults = memo(function () {
  const { t } = useTranslation();

  return (
    <Section title={t('Your Vaults')}>
      <VirtualList />
    </Section>
  );
});

export const VirtualList = function () {
  const classes = useStyles();
  const vaults = useAppSelector(selectUserVaultBalance);
  const vaultIds = Object.keys(vaults);
  const totalVaults = vaultIds.length;
  const minBatchSize = 3;
  const [renderCount, setRenderCount] = useState(minBatchSize);
  const containerRef = useRef<HTMLDivElement>();
  const bottomRef = useRef<HTMLDivElement>();
  const renderVaultIds = useMemo(() => vaultIds.slice(0, renderCount), [vaultIds, renderCount]);
  const remainingVaults = useMemo(() => {
    return Math.max(0, totalVaults - renderCount);
  }, [totalVaults, renderCount]);

  // Render more vaults on intersection (won't trigger again until placeholder is {75 * 2}px off screen)
  const onIntersection = useCallback(
    inView => {
      if (inView && remainingVaults > 0) {
        const batchSize =
          minBatchSize +
          Math.ceil((window.scrollY - bottomRef.current.offsetTop + window.innerHeight) / 75);
        setRenderCount(count => count + Math.max(0, Math.min(batchSize, totalVaults - count)));
      }
    },
    [totalVaults, setRenderCount, minBatchSize, remainingVaults]
  );

  // Render more vaults on scroll
  const onScroll = useMemo(
    () =>
      debounce(() => {
        if (!bottomRef.current) return;

        if (
          remainingVaults > 0 &&
          window.scrollY + window.innerHeight > bottomRef.current.offsetTop
        ) {
          const batchSize =
            minBatchSize +
            Math.ceil((window.scrollY - bottomRef.current.offsetTop + window.innerHeight) / 75);
          setRenderCount(count => count + Math.max(0, Math.min(batchSize, totalVaults - count)));
        }
      }, 100),
    [totalVaults, setRenderCount, minBatchSize, remainingVaults]
  );

  // Get notified when the placeholder is {75 * 2}px from entering the screen
  const [placeholderRef] = useInView({
    onChange: onIntersection,
    rootMargin: `0px 0px ${75 * 2}px 0px`,
  });

  // Increase/shrink render count based on total number of vaults when filters change
  useEffect(() => {
    if (renderCount > totalVaults) {
      setRenderCount(totalVaults);
    } else if (renderCount < minBatchSize) {
      setRenderCount(Math.min(minBatchSize, totalVaults));
    }
  }, [renderCount, totalVaults]);

  // Scroll is backup, normal speed scrolling should be handled by intersection observer
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <div className={classes.tablesContainer} ref={containerRef}>
        {renderVaultIds.map(chainId => {
          return <ChainTable chainId={chainId} data={vaults[chainId]} />;
        })}
      </div>
      <div ref={bottomRef} />
      <div ref={placeholderRef} />
    </>
  );
};
