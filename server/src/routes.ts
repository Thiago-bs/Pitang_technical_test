import { Router } from 'express';

const routes = Router();
var initData = [
    {
        "datetime": "206/07/2021 10:00",
        "amountSchedulling": 2,
        "patient":[
            {
                "name": "Thiago Borges Siqueira",
                "age": "1997/03/27",
                "appointment_time": "06/07/2021 10:10"
            },
            {
                "name": "Monique Milane",
                "age": "1997/03/22",
                "appointment_time": "6/07/2021 10:30"
            }
        ],
        "status": 0
    },
]
routes.get('/schedules', function (req, res) {
    res.status(200).json(initData)
})

routes.post('/add_appointment', function (req, res) {
    let data
    if(typeof req.body === 'object'){
      data=req.body
    }else{
      data = JSON.parse(req.body)
    }
    console.log(data)
    
    res.status(200).json(initData)
})

export default routes;