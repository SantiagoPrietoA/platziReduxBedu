import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import User from "./users/User.jsx";
import Tasks from "./tasks/Tasks.jsx";
import Posts from "./Posts/Posts.jsx";
import SaveTasks from "./tasks/SaveTasks.jsx";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={User}/>
        <Route exact path="/tasks" component={Tasks}/>
        <Route exact path="/posts/:index" component={Posts}/>
        <Route exact path="/tasks/save" component={SaveTasks}/>
        <Route exact path="/tasks/save/:userKey/:taskKey" component={SaveTasks}/>
        <Redirect  from="*" to="/" />    
      </Switch>
    </BrowserRouter>
  )
}

export default App;