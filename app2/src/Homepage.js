import LocalButton from "./Button";
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div>
    <h1>Homepage</h1>
    <h2>App 2</h2>

    <nav>
      <ul>
        <li>
          <Link to="/">Link to `/`</Link>
        </li>
        <li>
          <Link to="/homepage">Link to `/homepage`</Link>
        </li>
        <li>
          <Link to="/local-page">Link to `/local-page`</Link>
        </li>
      </ul>
    </nav>

    <LocalButton />
  </div>
);

export default Homepage;
