import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
