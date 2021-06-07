import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import String from '../components/String'
import Localstorage from '../components/LocalStorage'
import Objects from '../components/Object'
import Array from '../components/Array'
import Sessions from '../components/Sessions'
import Location from '../components/Location'
import NotFound from '../components/NotFound'
import { providedObjects } from '../utils/provided.objects'
console.log(providedObjects)
const Routes = () => {
  return (
    <Router>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/strings" exact component={String} />
          <Route path="/localStorage" exact component={Localstorage} />
          <Route path="/objects" exact component={Objects} />
          <Route path="/arrays" exact component={Array} />
          <Route path="/sessions" exact component={Sessions} />
          <Route path="/location" exact component={Location} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    </Router>
  )
}

export default Routes
