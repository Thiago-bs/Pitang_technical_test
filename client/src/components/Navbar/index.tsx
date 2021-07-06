import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { AppBar, Tab , Tabs} from '@material-ui/core';
import { useStyles } from './styles'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
    const styles = useStyles() 
    const [tab, setTab] = useState(0)
    const handleChange = (tab: number) => {
        setTab(tab)
    }
    const location = useLocation();
    const tabs = [
        {
            id: 0,
            label: 'Agendamentos',
            path: '/',
        },
        {
            id: 1,
            label: 'Novo agendamento',
            path: '/add',
        }
    ]
    return (
        <AppBar position="static">
            <Tabs value={location.pathname === '/add' ? 1 : tab} className={styles.container} >
                {
                    tabs.map(
                    ({id,label, path})=><Tab key={id} 
                    label={label} 
                    component={Link}
                    onClick={ () => handleChange(id)} 
                    to={path}/>
                    )
                }
            </Tabs>
        </AppBar>
    );
}