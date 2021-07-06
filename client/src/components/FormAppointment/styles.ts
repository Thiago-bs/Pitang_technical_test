import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container:{
        flex: 1,
        marginTop: 50,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius:8,
        border: 1,
        padding: 20
    },
    submit:{
        marginTop: 14
    },
    formLabel:{
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'bold',
        color: 'black',
        marginBottom: 20
    },
    rowDatePicker:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15
    },
    progress:{
        marginTop: 10
    }
  }));