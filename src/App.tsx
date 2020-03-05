import React from "react";
import {
  Router,
  Route,
  Link,
  Redirect,
  RouteProps,
  Switch
} from "react-router-dom";
import "./App.scss";
import history from "./history";
import Users from "./component/Users";
import Login from "./component/Login";

const getRoute = (
  component: RouteProps["component"],
  path: string,
  isLoginRequred: boolean
): JSX.Element => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn || !isLoginRequred) {
    return <Route path={path} component={component} />;
  } else {
    return <Redirect from={path} to="/login" />;
  }
};

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Redirect exact from="/" to="/login" />
          {getRoute(Login, "/login", false)}
          {getRoute(Users, "/users", true)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
