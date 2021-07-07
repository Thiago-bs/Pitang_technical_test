import  Patient  from './Patient'

export default interface SchedulesModel{
    id: number,
    datetime: string,
    status: string,
    amountSchedulling: number
    patient: Patient[],
  }