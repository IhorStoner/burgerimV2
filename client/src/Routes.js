import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AdminPage from './pages/AdminPage/AdminPage'
import Homepage from './pages/Homepage/Homepage'


export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/admin/:nav">
          <AdminPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path={["/home/:name", "/home/burgers"]} exact>
          <Homepage />
        </Route>
        <Redirect from="/" to="/home/burgers"/>
      </Switch>
    </Router>
  )
}