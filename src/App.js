import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Main from './pages/main';


function App(props) {

  return <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
}

export default App;