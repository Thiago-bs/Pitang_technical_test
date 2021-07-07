import React , {useState, useEffect} from 'react'
import { Snackbar} from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface Props{
    open: boolean,
    error: boolean,
    message: string,
    close: any
}
export default function SnackBarAlert({open, error, message, close}: Props){
    const [openSnackBar, setOpenSnackBar] = useState(open);
    const [errorSnackBar, setErrorSnackBar] = useState(error);
    const [messagePoupup, setMessagePoupup] = useState(message);

    useEffect(() => {
        setOpenSnackBar(open)
        setErrorSnackBar(error)
        setMessagePoupup(message)
    }, [open, error, message])

    return(
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={close}>
            <Alert onClose={close} severity={errorSnackBar ? 'warning' : 'success'}>
                {messagePoupup}
            </Alert>
        </Snackbar>
    )
}