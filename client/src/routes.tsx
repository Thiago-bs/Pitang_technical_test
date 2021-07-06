import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Schedules from './pages/Schedules'
import AppointmentCreate from './pages/AppointmentCreate'
import NavBar from './components/Navbar'

function Routes() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Schedules} />
                <Route path="/add" exact component={AppointmentCreate} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 