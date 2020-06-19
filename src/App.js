import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './_components/views/LandingPage/LandingPage'
import LoginPage from './_components/views/LoginPage/LoginPage'
import RegisterPage from './_components/views/RegisterPage/RegisterPage'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;

