import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const app = () => {
  /**<Route exact path="/user/:login" component={User} /> */
  return (
    <NameContext>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </NameContext>
  )
}
