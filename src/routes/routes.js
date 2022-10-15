import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../Container/Login'
import Register from '../Container/Register'
import Home from '../Container/Home'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
      </Switch>
    </Router>
  )
}

export default Routes
