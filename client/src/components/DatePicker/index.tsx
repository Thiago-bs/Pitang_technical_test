import {
    KeyboardTimePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import { useStyles } from './styles'
import pt from "date-fns/locale/pt-BR";
interface Props{
    isDate: boolean,
    label: string,
    id: string,
    format: string,
    message: string,
    value: Date | null,
    selectedDate?: any;
}
export default function DatePicker(
    {
        isDate,
        label,
        id,
        format,
        message,
        value,
        selectedDate
    }: Props){
    const styles = useStyles() 
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
        {
            !isDate ?
            <KeyboardTimePicker
                id={id}
                label={label}
                value={value}
                onChange={(data) => selectedDate(data)}
                KeyboardButtonProps={{
                    'aria-label': message,
                }}
                className={styles.datePicker}
            />

            : 
            <KeyboardDatePicker
                id={id}
                label={label}
                format={format}
                value={value}
                onChange={(data) => selectedDate(data)}
                KeyboardButtonProps={{
                    'aria-label': message,
                }}
                className={styles.datePicker}
            />

        }
        </MuiPickersUtilsProvider>
    )
}