import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import String from '../components/String'
import Localstorage from '../components/LocalStorage'
import Objects from '../components/Object'
import Array from '../components/Array'
import Sessions from '../components/Sessions'
import Location from '../components/Location'
import { providedObjects } from '../utils/provided.objects'
console.log(providedObjects)
const Routes = () => {
  return (
    <Router>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>

        <Switch>
          <Route path="/strings" exact component={String} />
        </Switch>

        <Switch>
          <Route path="/localStorage" exact component={Localstorage} />
        </Switch>

        <Switch>
          <Route path="/objects" exact component={Objects} />
        </Switch>

        <Switch>
          <Route path="/arrays" exact component={Array} />
        </Switch>

        <Switch>
          <Route path="/sessions" exact component={Sessions} />
        </Switch>

        <Switch>
          <Route path="/location" exact component={Location} />
        </Switch>
      </Router>
    </Router>
  )
}

export default Routes
