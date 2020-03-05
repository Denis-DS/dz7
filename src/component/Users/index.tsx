import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import PhotoUser1 from "../img/User1.jpg";
import PhotoUser2 from "../img/User2.jpg";
import PhotoUser3 from "../img/User3.jpg";
import style from "./index.module.scss";

const users = [
  {
    exactPath: "/users/profile1",
    name: "Julian",
    img: PhotoUser1,
    key: "user1"
  },
  {
    exactPath: "/users/profile2",
    name: "Rebecka",
    img: PhotoUser2,
    key: "user2"
  },
  {
    exactPath: "/users/profile3",
    name: "Alfred",
    img: PhotoUser3,
    key: "user3"
  }
];

export default () => (
  <div>
    <nav className={style.NavBlock}>
      <ul>
        {users.map(e => (
          <li>
            <Link key={e.key} to={e.exactPath}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <Switch>
      {users.map(e => (
        <Route
          key={e.key}
          exact
          path={e.exactPath}
          component={() => <Profile name={e.name} img={e.img} />}
        />
      ))}
    </Switch>
  </div>
);
