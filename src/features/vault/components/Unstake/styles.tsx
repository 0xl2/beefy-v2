export const styles = theme => ({
  container: {
    display: 'flex',
    background: '#272B4A',
    borderRadius: '16px',
  },
  inputContainer: {
    marginTop: theme.spacing(4),
    borderRadius: '4px',
    background: '#313759',
    padding: '16px',
  },
  maxButton: {
    background: '#313759',
    borderRadius: '30px',
    margin: 0,
    padding: '5px 12px',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: '#FFF',
    fontWeight: 600,
  },
  positionButton: {
    '& .MuiIconButton-edgeEnd': {
      marginRight: '-8px',
    },
  },
  input: {
    background: '#14182B',
    border: '2px solid #3F466D',
    borderRadius: '30px',
    maxHeight: '48px',
    width: '100%',
    padding: '12px 16px',
    fontSize: '21px',
    fontWeight: 600,
  },
  width: {
    width: '100%',
  },
  balances: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  available: {
    textAlign: 'left',
  },
  staked: {
    textAlign: 'right',
  },
  content: {
    padding: '0px 24px',
    background: '#272B4A',
    borderRadius: '16px',
  },
  btnSection: {
    padding: '24px 0px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 24px',
    background: '#1B203A',
    borderRadius: '16px 16px 0px 0px ',
    borderBottom: '2px solid #373c68',
  },
  title: {
    fonntWeight: 600,
    fontSize: '24px',
    lineHeight: '36px',
    letterSpacing: '0.5px',
    color: '#FFF',
  },
  label: {
    fonntWeight: 600,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: '#9497b8',
  },
  value: {
    fonntWeight: 600,
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
    color: '#FFFF',
  },
  btnSubmit: {
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: '0.2px',
    textTransform: 'none',
    color: '#ffffff',
    backgroundColor: '#54995C',
    borderRadius: '8px',
    padding: '6px 33px',
    '&:hover': {
      backgroundColor: '#389D44',
    },
  },
});
