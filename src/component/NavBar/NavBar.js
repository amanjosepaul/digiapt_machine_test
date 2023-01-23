import React from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Digiapt</div>
      </div>

      <div className="nav-links">
        <NavLink to={"/my-posts"}>My Posts</NavLink>
        <NavLink to={"/add-posts"}>Posts</NavLink>
        <NavLink to={"/login-signup"}>Login / SignUp</NavLink>
        {/* <NavLink to={"/sign-up"}>Sign Up</NavLink> */}
      </div>
    </div>
  );
};

export default NavBar;
