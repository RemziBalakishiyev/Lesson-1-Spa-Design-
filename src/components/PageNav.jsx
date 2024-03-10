import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={style.nav}>
      <h1>Car Spotting</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/car'>Car</NavLink>
        </li>
        <li>
          <NavLink to='/car'>Category</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
