import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage";



const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Homepage}/>
    </Switch>
  </Router>
);

export default App;
