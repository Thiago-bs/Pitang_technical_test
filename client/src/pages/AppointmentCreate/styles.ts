import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    form: {
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    label:{
      marginTop: 16,
      marginLeft: 2
    },
    datePicker:{
      width: '100%',
      marginTop: '5px',
      height: 60,
      borderStyle: 'solid',
    },
    textField:{
      marginTop: '5px',
    }
  }));