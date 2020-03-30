import React from 'react';
import { BrowserRouter, Route, Switch } from 'reac-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidente from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {Logon} />
                <Route path = "/register" component = {Register} />

                <Route path = "/profile" component = {Profile} />
                <Route path = "/incident/new" component = {NewIncidente} /> 
            </Switch>
        </BrowserRouter>
    )
}