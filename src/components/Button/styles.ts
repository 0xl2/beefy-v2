import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  button: {
    // colors set on variants
    color: 'red',
    backgroundColor: 'blue',
    border: 'solid 2px green',
    borderRadius: '8px',
    fontSize: '15px',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    lineHeight: '24px',
    minWidth: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    padding: `${8 - 2}px ${16 - 2}px`,
    cursor: 'pointer',
    userSelect: 'none' as const,
    boxShadow: 'none',
    textAlign: 'center' as const,
    textDecoration: 'none',
    '&:disabled': {
      opacity: '0.4',
      pointerEvents: 'none',
    },
  },
  borderless: {
    borderWidth: 0,
    padding: `8px 16px`,
  },
  fullWidth: {
    width: '100%',
  },
  default: {
    color: '#D0D0DA',
    backgroundColor: '#1B1E31',
    borderColor: '#303550',
    '&:hover, &:focus': {
      color: '#D0D0DA',
      backgroundColor: '#1B1E31',
      borderColor: '#303550',
    },
  },
  filter: {
    color: '#8A8EA8',
    backgroundColor: '#262A40',
    borderColor: '#303550',
    '&:hover, &:focus': {
      color: '#D0D0DA',
      backgroundColor: 'rgba(245, 245, 255, 0.08)',
      borderColor: '#303550',
    },
  },
  success: {
    color: '#FFFFFF',
    backgroundColor: '#59A662',
    borderColor: '#59A662',
    '&:hover, &:focus': {
      color: '#FFFFFF',
      backgroundColor: '#68a871',
      borderColor: '#68a871',
    },
  },
});
