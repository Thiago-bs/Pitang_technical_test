import React, { useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridPageChangeParams } from '@material-ui/data-grid';
import { useStyles } from './styles'
import { LinearProgress } from '@material-ui/core';
import Patient from '../../models/Patient'

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nome do paciente', width: 450 },
    { field: 'age', headerName: 'Data de nascimento do paciente', width: 400 },
    { field: 'appointment_time', headerName: 'Data da consulta', width: 400 },
];

interface Props{
    handleSelected: any,
    data: Patient[]
}
export default function DataTablePatient({handleSelected, data}: Props){
    const styles = useStyles() 
    const [pageSize, setPageSize] = useState<number>(10);
    const [rows, setRows] = useState<Patient[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);
    const handlePageSizeChange = (params: GridPageChangeParams) => {
        setPageSize(params.pageSize);
    };

    const formatToSorted = (stringDate: string) => {
        let ddmmyyyy: string[] = stringDate.split('/')
        return [ddmmyyyy[2], ddmmyyyy[1], ddmmyyyy[0]].join('/')
    }
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            let patients: Patient[] = data
            let sortPatients: Patient[] = []
            sortPatients[0] = patients[0]
            sortPatients[1] = patients[1]
            if(formatToSorted(patients[0].age) < formatToSorted(patients[1].age)){
                sortPatients[0] = patients[1]
                sortPatients[1] = patients[0]
            }
            setRows(sortPatients)
            setIsLoading(false)
          }, 1000);
    }, [data]);

    return (
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid pagination 
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
            rows={rows} 
            columns={columns} rowsPerPageOptions={[10, 20, 30]} 
            className={styles.dataGrid}
            onRowSelected={(select) => { 
                handleSelected({...select.data} as Patient)}}
            /> 
        {
            isLoading &&
            <LinearProgress  /> 
        }
        </div>
    )
}