import React, {useState, useEffect} from 'react'
import { DataGrid, GridColDef, GridPageChangeParams } from '@material-ui/data-grid';
import { LinearProgress } from '@material-ui/core';

import { useStyles } from './styles'
import SchedulesModel from '../../models/Schedules'
import api from '../../services/api'

const columns: GridColDef[] = [
    { field: 'rangeDatetime', headerName: 'Data e hora de atendimento', width: 450 },
    { field: 'amountSchedulling', headerName: 'Quantidade de consultas marcadas', width: 400 },
    { field: 'stringState', headerName: 'Status', width: 400 },
];

interface Props{
    handleSelected: any,
}
export default function DataTableAppointment({ handleSelected }: Props){
    const styles = useStyles() 
    const [isLoading, setIsLoading] = useState(false);
    const [pageSize, setPageSize] = useState<number>(10);
    const [rows, setRows] = useState<SchedulesModel[] | []>([]);
    const handlePageSizeChange = (params: GridPageChangeParams) => {
        setPageSize(params.pageSize);
    };

    const formatToSorted = (scheduleDate: string) => {
        let ddmmyyyy = scheduleDate.split('-')[0].split('/');
        return [ddmmyyyy[2], ddmmyyyy[1], ddmmyyyy[0], scheduleDate.split('-')[1]].join('/');
    }

    async function populateDataTable(){
        await api.get('schedules').then(function (response) {
            let schedules: SchedulesModel[] = response.data
            if(schedules.length > 0){
                let sortedSchedules: SchedulesModel[]  = schedules.slice().sort((n1,n2) => {
                    console.log(formatToSorted(n1.datetime) , '1')
                    console.log(formatToSorted(n2.datetime) , '2')
                    if (formatToSorted(n1.datetime) < formatToSorted(n2.datetime)) {
                        return 1;
                    }
                    if (formatToSorted(n1.datetime) > formatToSorted(n2.datetime)) {
                        return -1;
                    }
                    return 0;
                });
                setRows(sortedSchedules)
            }
            else{
                setRows(schedules)
            }
          }).catch(function (error) {
        });
    }
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            populateDataTable()
            setIsLoading(false)
          }, 1000);
    }, []);

    return (
    <div style={{ height: 600, width: '100%' }}>
        <DataGrid pagination 
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rows={rows} 
        columns={columns} rowsPerPageOptions={[10, 20, 30]} 
        className={styles.dataGrid}
        onRowSelected={(select) => { 
        handleSelected({...select.data} as SchedulesModel)}}
        />
        {
            isLoading &&
            <LinearProgress  /> 
        }
    </div>
    )
}
