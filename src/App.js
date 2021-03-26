import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
// import Dashboard from "./components/dashboard/Dashboard"
// import ProjectDetails from "./components/projects/ProjectDetails"
// import Signin from "./components/auth/Signin"
// import Signup from "./components/auth/Signup"
import CreatePRoject from"./components/projects/Projects.container"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={CreatePRoject} />
          {/* <Route path = "/project/:id" component={ProjectDetails} />
          <Route path ='/Signin' component={Signin}></Route>
          <Route path ='/Signup' component={Signup}></Route>
          <Route path ='/Create' component={CreatePRoject}></Route> */}
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
