import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

import './App.css';
import Index from './Pages/Index';
import Profile from './Pages/Profile';
import Login from './Pages/Login';


function App() {
  return (
    <Router>
    <div className="App">
        
        <Route path="/" exact component={Index} />
        <Route path="/Login/" component={Login} />
        <Route path="/Profile/" component={Profile} />
    </div>
    </Router>
  );
}

export default App;
