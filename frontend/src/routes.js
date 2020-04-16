import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes(){
     return(
         <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastro" component={Cadastro}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/incidents/NewIncident" component={NewIncident}></Route>
            </Switch>
         </BrowserRouter>
     )
 } 