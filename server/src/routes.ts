import { Router } from 'express';
import {formatDate, formatHour} from './Util' 
const routes = Router();

var appointmentId = 1
var patientId = 1
var initData = [
    {
        "id": appointmentId,
        "datetime": "06/07/2021-10:00",
        "amountSchedulling": 1,
        "patient":[
            {
                "id": patientId,
                "name": "Thiago Borges",
                "age": "1999/03/27",
                "appointment_time": "06/07/2021-10:30"
            }
        ],
        "status": 0,
        "rangeDatetime":'06/07/2021-10:00 até 06/07/2021-11:00',
        "stringState": 'pedding'
    },
]
routes.get('/schedules', function (req, res) {
    res.status(200).json(initData)
})

routes.post('/add_appointment', function (req, res) {
    let data;
    if(typeof req.body === 'object'){
      data=req.body 
    }else{
      data = JSON.parse(req.body)
    }
    let patient = data;
    patient.id = patientId
    let datetime = data.appointment_time.split(":")[0]+":00"

    let dateHourMoreOne = new Date(datetime)
    dateHourMoreOne = new Date(dateHourMoreOne.getTime() + (1*60*60*1000))
    let dateHourMoreOneString = [formatDate(dateHourMoreOne), formatHour(dateHourMoreOne)].join('-')

    let validData = true;
    let hasAddData: boolean;
    hasAddData = false
    
    initData.forEach((element) => {
        if(element.datetime === datetime){
            if(element.amountSchedulling == 2){
                validData = false
            }
            if(element.amountSchedulling < 2){
                patient.id = patientId + 1
                element.patient.push(patient)
                element.amountSchedulling += 1
                hasAddData = true
                validData = true
            }
        }
    });
    if(!hasAddData && validData){
        appointmentId+= 1
        let appointment = {
            id: appointmentId,
            datetime: datetime,
            amountSchedulling: 1,
            patient: [patient],
            status: 0,
            rangeDatetime: [datetime, dateHourMoreOneString].join(' até '), 
            stringState: 'pedding'
        }
        initData.push(appointment)
        res.status(200).json({"status": true, "reason": "Consulta adicionada"})
    }
    if(hasAddData && validData)
        res.status(200).json({"status": true, "reason": "Consulta adicionada"})
    if(!validData){
        res.status(403).json({"status": false, "reason": "Já foi marcado duas consultas para esse horario"})
    }
})

export default routes;