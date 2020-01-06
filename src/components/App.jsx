import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import User from "./users/User.jsx";
import Tasks from "./tasks/Tasks.jsx";
import Posts from "./Posts/Posts.jsx";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={User}/>
        <Route exact path="/tasks" component={Tasks}/>
        <Route exact path="/posts/:index" component={Posts}/>
        <Redirect  from="*" to="/" />    
      </Switch>
    </BrowserRouter>
  )
}

export default App;