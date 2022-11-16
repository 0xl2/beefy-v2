import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  container: {
    padding: '24px',
  },
  labels: {
    display: 'flex',
    flexWrap: 'nowrap' as const,
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  selectLabel: {
    ...theme.typography['body-lg'],
    color: theme.palette.text.dark,
  },
  availableLabel: {
    ...theme.typography['body-sm'],
    color: theme.palette.text.dark,
    marginLeft: 'auto',
  },
  availableLabelAmount: {
    ...theme.typography['body-sm-med'],
    color: theme.palette.text.middle,
  },
  inputs: {
    display: 'flex',
    flexWrap: 'nowrap' as const,
    gap: '12px',
  },
  links: {
    marginTop: '12px',
  },
  quote: {
    marginTop: '12px',
  },
  actions: {
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
    width: '100%',
  },
});
