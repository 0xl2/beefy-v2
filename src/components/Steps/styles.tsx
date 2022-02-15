export const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0,0,0,0.9)',
    },
    '& .MuiTypography-h2': {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '42px',
      textAlign: 'center',
    },
    '& .MuiTypography-body2': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.2px',
      paddingTop: '20px',
      textAlign: 'center',
    },
    '& .MuiAlert-root': {
      marginTop: '20px',
    },
  },
  finishedCard: {
    backgroundColor: '#323857',
    borderRadius: '20px',
    '& .MuiTypography-h2': {
      fontSize: '36px',
      lineHeight: '42px',
      fontWeight: 600,
    },
    '& .MuiTypography-body1': {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.2px',
      textAlign: 'center',
      padding: '20px 0',
    },
  },
  finishedBtn: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#6B7199',
    backgroundColor: '#232841',
    borderRadius: '20px',
    textTransform: 'inherit',
    padding: '4px 15px',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#ffffff',
      transition: 'color 0.2s',
    },
  },
  snackbarContainer: {
    width: '350px',
  },
  topBar: {
    height: '10px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: theme.palette.background.snackbars.bgLine,
  },
  progresBar: {
    width: '50%',
    margin: 0,
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: '4px 0 0 0',
  },
  progresBar1: {
    width: '75%',
    margin: 0,
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: '4px 0 0 0',
  },
  confirmationBar: {
    width: '75%',
    margin: 0,
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: '4px 0 0 0',
  },
  successBar: {
    width: '100%',
    margin: 0,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px 4px 0 0',
  },
  errorBar: {
    width: '100%',
    margin: 0,
    height: '100%',
    backgroundColor: theme.palette.background.snackbars.error,
    borderRadius: '4px 4px 0 0',
  },
  icon: {
    height: '20px',
    marginRight: theme.spacing(1),
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeIcon: {
    padding: 0,
  },
  contentContainer: {
    backgroundColor: theme.palette.background.snackbars.bg,
    borderRadius: '0 0 4px 4px',
    padding: '12px 16px',
  },
  title: {
    color: theme.palette.background.snackbars.text,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
  },
  message: {
    color: theme.palette.background.snackbars.text,
    '& span': {
      fontWeight: 700,
    },
  },
  errorContent: {
    marginTop: theme.spacing(1),
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: 'rgba(219, 50, 50, 0.1)',
  },
  successContent: {
    marginTop: theme.spacing(1),
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: 'rgba(89, 166, 98, 0.15)',
  },
  closeBtn: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.snackbars.bgBtn,
    color: theme.palette.text.primary,
    width: '100%',
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 700,
    borderRadius: '8px',
    textTransform: 'none',
    '&:Hover': {
      backgroundColor: theme.palette.background.snackbars.bgBtn,
    },
  },
  redirectBtnSuccess: {
    color: theme.palette.primary.main,
    background: 'none',
    textTransform: 'none',
    margin: 0,
    padding: 0,
    '& .MuiSvgIcon-root': {
      height: '15px',
    },
  },
});
