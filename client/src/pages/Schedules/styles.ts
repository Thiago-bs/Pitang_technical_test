import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: 50,
        width: '100%',
    },
    dataGrid:{
        height: 600
    },
    dataGridModal:{
        height: 400
    },
    paper: {
        width: '100%',
        height: 650,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius:8,
        border: 1,
        padding: theme.spacing(2, 4, 3),
    },
    title:{
        textAlign: 'center',
        margin: 20,
        fontSize: 30
    }
}));