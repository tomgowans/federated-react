import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Localpage from "./Localpage";

import Login from "./Login";
import {routes} from './config';

const Homepage = React.lazy(() => import("app2/Homepage"));

const App = () => (
  <Router>
    <Switch>
      <React.Suspense fallback="Loading pages">
        <Route exact path={routes.root} component={Login}/>
        <Route exact path={routes.homepage} component={Homepage}/>
        <Route exact path={routes.localPage}   component={Localpage} />
      </React.Suspense>
    </Switch>
  </Router>
);

export default App;
