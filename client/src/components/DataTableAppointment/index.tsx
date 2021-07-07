import React, {useState, useEffect} from 'react'
import { DataGrid, GridColDef, GridPageChangeParams } from '@material-ui/data-grid';
import { LinearProgress } from '@material-ui/core';

import { useStyles } from './styles'
import SchedulesModel from '../../models/Schedules'
import api from '../../services/api'

const columns: GridColDef[] = [
    { field: 'rangeDatetime', headerName: 'Data e hora entre', width: 450 },
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
    const [rows, setRows] = useState([]);
    const handlePageSizeChange = (params: GridPageChangeParams) => {
        setPageSize(params.pageSize);
    };
    async function populateDataTable(){
        await api.get('schedules').then(function (response) {
            setRows(response.data)
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
