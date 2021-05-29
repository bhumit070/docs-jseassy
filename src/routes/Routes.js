import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import String from '../components/String'
import Localstorage from '../components/LocalStorage'
import Objects from '../components/Object'
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/strings" exact>
          <String />
        </Route>
      </Switch>
      <Switch>
        <Route path="/localStorage" exact>
          <Localstorage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/objects" exact>
          <Objects />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
