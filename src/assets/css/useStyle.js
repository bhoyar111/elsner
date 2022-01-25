import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
        display: 'none',
    },
}));

export const useStylesDualChkBox = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    justifyContent: 'space-between',
    width: '100%',
    color: '#646464 !important',
    fontSize: '14px !important',
    fontFamily: "'Ubuntu', sans-serif !important",
    fontWeight: '400',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 230,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  listCard: {
    border: '1px solid  #818181',
    boxShadow: 'unset',
  },
  listDivider: {
    backgroundColor: '#818181',
  },
  transgridItem: {
    padding: '0 !important',
    [theme.breakpoints.down("md")] : {
      padding: '4px !important',
    }    
  },
  button: {
    margin: theme.spacing(0.5, 0),
    border: '1px solid  #818181',
  },
}));

// export default useStyles;