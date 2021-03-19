import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AdminPage from './pages/AdminPage/AdminPage'
import Homepage from './pages/Homepage/Homepage'


export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}