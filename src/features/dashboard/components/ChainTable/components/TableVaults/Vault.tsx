import { makeStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { AssetsImage } from '../../../../../../components/AssetsImage';
import { VaultDailyStat } from '../../../../../../components/VaultStats/VaultDailyStat';
import { VaultDepositStat } from '../../../../../../components/VaultStats/VaultDepositStat';
import { VaultPlatformStat } from '../../../../../../components/VaultStats/VaultPlatformStat';
import { VaultYearlyStat } from '../../../../../../components/VaultStats/VaultYearlyStat';
import { useAppSelector } from '../../../../../../store';
import { VaultEntity } from '../../../../../data/entities/vault';
import { selectVaultById } from '../../../../../data/selectors/vaults';
import { styles } from './styles';

const useStyles = makeStyles(styles);

interface VaultProps {
  vaultId: VaultEntity['id'];
}

export const Vault = memo<VaultProps>(function ({ vaultId }) {
  const classes = useStyles();

  return (
    <div className={classes.vault}>
      <VaultName vaultId={vaultId} />
      <VaultPlatformStat className={classes.itemSmall} showLabel={false} vaultId={vaultId} />
      <VaultDepositStat className={classes.itemBig} showLabel={false} vaultId={vaultId} />
      <VaultYearlyStat className={classes.itemSmall} showLabel={false} vaultId={vaultId} />
      <VaultDailyStat className={classes.itemBig} showLabel={false} vaultId={vaultId} />
    </div>
  );
});

const VaultName = memo(function ({ vaultId }: { vaultId: VaultEntity['id'] }) {
  const classes = useStyles();
  const vault = useAppSelector(state => selectVaultById(state, vaultId));
  return (
    <div className={classes.vaultName}>
      <AssetsImage size={24} chainId={vault.chainId} assetIds={vault.assetIds} />
      <div>{vault.name}</div>
    </div>
  );
});
