import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./config";

const Login = () => (
  <div>
    <h1>Login</h1>
    <h2>App 1</h2>

    <nav>
      <ul>
        <li>
          <Link to={routes.root}>Link to `/`</Link>
        </li>
        <li>
          <Link to={routes.homepage}>Link to `/homepage`</Link>
        </li>
        <li>
          <Link to={routes.localPage}>Link to `/local-page`</Link>
        </li>
      </ul>
    </nav>

  </div>
);

export default Login;
