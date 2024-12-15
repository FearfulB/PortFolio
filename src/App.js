import React from 'react';
import {
  HashRouter as Router,  // Change BrowserRouter en HashRouter
  Switch,
  Route
} from "react-router-dom";
import Main from './pages/main';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
