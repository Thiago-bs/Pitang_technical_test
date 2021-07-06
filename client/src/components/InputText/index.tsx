import React from 'react'
import { TextField, FormLabel } from '@material-ui/core';
import { useStyles } from './styles'

interface Props {
    id:string;
    label: string;
    value: string;
    onChange: any;
    error: any;
    helperText: any;
}

export default function InputText(
    {
        id,
        label,
        value,
        onChange,
        error,
        helperText
    }: Props){
    const styles = useStyles() 
    return(
        <>
           <FormLabel component="legend" className={styles.label}>
                {label}
            </FormLabel>
            <TextField variant="outlined" margin="normal" required
                fullWidth name={id} autoComplete="text" autoFocus
                size="small"
                className={styles.textField}
                id={id}
                value={value}
                placeholder={'Thiago Siqueira'}
                error={error}
                helperText={error ? helperText : ''}
                onChange={onChange}
            /> 
        </>
    )
}