import React, { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Workspace from './pages/Workspace'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Incidencias from './pages/Incidencias'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/usuarios'>
          <Workspace></Workspace>
        </Route>
        <Route path='/incidencias'>
          <Incidencias/>
        </Route>
        <Route path='*'><h1>nel</h1></Route>
      </Switch>
    </Router>
  )
}

export default App
