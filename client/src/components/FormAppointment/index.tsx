import React, {useState} from 'react'


import { useFormik } from 'formik';

import { Container , Button, FormLabel} from '@material-ui/core'
import DatePicker from '../DatePicker'
import InputText  from '../InputText'

import { useStyles } from './styles'
import * as yup from 'yup'
import api from '../../services/api'
import Patient from '../../models/Patient'
import {isValidDate, formatDate, formatHour} from '../../Util'
import LinearProgress from '@material-ui/core/LinearProgress';

interface Props{
    formName: string,
    isAdd: boolean
}

const validationSchema = yup.object({
    patientName: yup
        .string()
        .required('É Necessário adicionar o nome do paciente'),
});
export default function FormAppointment({formName, isAdd}:Props) {
    const [patientName] = useState('');
    const [ageDate] = useState<Date | null>(new Date());
    const [appointmentDate] = useState<Date | null>(new Date());
    const [appointmentHour] = useState<Date | null>(new Date());
    const [isLoading, setIsLoading] = useState(false);

    const handleSendAppointment = (patient: Patient) =>{
        setIsLoading(true)
        api.post('add_appointment', patient).then(function (response) {
            setIsLoading(false)
            console.log(response);
        })
        .catch(function (error) {
            setIsLoading(false)
            console.log(error);
        });
    }
    
    const formik = useFormik({
        initialValues: {
          patientName: patientName,
          ageDate:ageDate,
          appointmentDate: appointmentDate,
          appointmentHour: appointmentHour
        },
        validationSchema: validationSchema,
        onSubmit: (data) => {
            if(isValidDate(data.ageDate) && isValidDate(data.appointmentDate) && isValidDate(data.appointmentHour)){
                if(data.ageDate != null && data.appointmentHour !== null){
                    handleSendAppointment({
                        name:data.patientName,
                        age: formatDate(data.ageDate), 
                        appointment_time: [formatDate(data.appointmentHour), formatHour(data.appointmentHour)].join(' ')
                    } as Patient)
                }
            }else{
                alert('Dados incorretos')
            }
        },
      });
    const styles = useStyles() 
    return (
        <Container maxWidth="sm" className={styles.container}>
            <form onSubmit={formik.handleSubmit}>
            <FormLabel component="legend" className={styles.formLabel}>
                {formName}
            </FormLabel>
            <InputText label={'Nome: '} 
                id={'patientName'}
                value={formik.values.patientName}
                error={formik.touched.patientName && Boolean(formik.errors.patientName)}
                helperText={formik.touched.patientName && formik.errors.patientName}
                onChange={formik.handleChange}
            />
            <DatePicker 
                isDate={true} label='Data de nascimento'
                id='ageDate' format='dd/MM/yyyy' message='Alterando a data'
                value={formik.values.ageDate}
                selectedDate={(data: Date) => {
                    formik.setFieldValue("ageDate", data);
               }}/>
            <div className={styles.rowDatePicker}>
                <DatePicker 
                        isDate={true} label='Data da consulta'
                        id='ageDate' format='dd/MM/yyyy' message='Alterando a data'
                        value={formik.values.appointmentDate}
                        selectedDate={(data: Date) => {
                            formik.setFieldValue("appointmentDate", data);
                       }}/>
                <DatePicker 
                        isDate={false} label='Hora da consulta'
                        id='ageDate' format='' message='Alterando a data'
                        value={formik.values.appointmentHour}
                        selectedDate={(data: Date) => {
                            formik.setFieldValue("appointmentHour", data);
                       }}/>
            </div>
            {
                isAdd &&
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Salvar
                </Button>
            }
            </form>
            {
                isLoading &&
                <LinearProgress className={styles.progress} /> 
            }
      </Container>
    )
}