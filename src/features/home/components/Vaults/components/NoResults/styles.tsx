import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  message: {
    padding: '24px',
    background: '#2D3153',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  title: {
    fontWeight: 600,
    fontSize: '21px',
    lineHeight: '24px',
    color: '#D0D0DA',
    margin: '0 0 4px 0',
  },
  text: {
    fontSize: '15px',
    lineHeight: '24px',
    color: '#D0D0DA',
  },
  extra: {
    marginTop: '24px',
  },
});
