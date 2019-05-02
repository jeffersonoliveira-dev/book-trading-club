const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  item: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  submit: {
    margin: '10px',
  },
  text: {
    width: '400px',
  },
  delete: {
    float: 'right',
    bottom: '10px',
  },
  book: {
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
  },
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
  body: {
    width: '100%',
    height: '100%',
  },
});

// center horizontally

export default styles;
