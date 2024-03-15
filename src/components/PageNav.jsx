import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./PageNav.module.css";
import Button from "./Reusable/Button";
import { useAuth } from "../contexts/AuthContext";
function PageNav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
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
      <div className={style.user}>
        <span>Welcome {user.name}!</span>
        <img src={user.img} />
        <Button type='button' onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default PageNav;
