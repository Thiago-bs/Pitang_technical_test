import  Patient  from './Patient'
export default interface Schedules {
    datetime: string,
    amountSchedulling: number,
    patient: Patient[],
    status: number
}
