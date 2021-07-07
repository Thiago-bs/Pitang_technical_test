import React, {useState} from 'react';
import { Container, Modal, FormLabel} from '@material-ui/core'
import { useStyles } from './styles'
import SchedulesModel from '../../models/Schedules' 
import  DataTableAppointment  from '../../components/DataTableAppointment'
import  DataTablePatient  from '../../components/DataTablePatient'
import Patient from '../../models/Patient'

export default function Schedules() {
  const styles = useStyles() 
  const [openModal, setOpenModal] = useState(false);
  const [patients, setPatients] = useState<Patient[] | []>([]);

  const handleSelected = (selected: SchedulesModel) => {
    setPatients(selected.patient)
    setOpenModal(true)
  }

  const handleSelectedPatient = (patient: Patient) => {
    alert('Edição e finalizar da consulta, vai ser adicionado somente no futuro! \nPaciente: ' + patient.name)
  }

  const handleClose = () =>{
    setOpenModal(false);
  }
  const body = (
    <Container className={styles.container}>
    <div  className={styles.paper}> 
    <FormLabel component="legend" className={styles.title}>
      {'Pacientes para este horario'}
      </FormLabel>
      <DataTablePatient handleSelected={handleSelectedPatient} data={patients}/>
    </div>
    </Container>
  );
  return (
    <Container className={styles.container}>
      <DataTableAppointment handleSelected={handleSelected}/>
      <Modal
        open={openModal}
        onClose={handleClose}
      >
          {body}
      </Modal>
    </Container>
  );
}