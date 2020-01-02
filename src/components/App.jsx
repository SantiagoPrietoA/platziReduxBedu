import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import User from "./users/User.jsx";
import Tasks from "./tasks/Tasks.jsx";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={User}/>
        <Route exact path="/tasks" component={Tasks}/>
        <Redirect  from="*" to="/" />    
      </Switch>
    </BrowserRouter>
  )
}

export default App;