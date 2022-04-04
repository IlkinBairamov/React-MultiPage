import './App.css';
import Home from './pages/Home'
import Users from './pages/Users';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

 function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/users" exact component={Users}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
