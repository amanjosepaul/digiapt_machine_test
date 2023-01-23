import React, { useContext } from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const NavBar = () => {
  const context = useContext(AuthContext);
  return (
    <>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">Digiapt</div>
        </div>

        <div className="nav-links">
          <NavLink to={"/home"}>Posts</NavLink>
          <NavLink to={"/my-posts"}>My Posts</NavLink>
          {!context.currentUser && (
            <NavLink to={"/login-signup"}>Login / SignUp</NavLink>
          )}
          {/* <NavLink to={"/sign-up"}>Sign Up</NavLink> */}
        </div>
      </div>
      <div className="add-post">
        <button>Add Post</button>
      </div>
    </>
  );
};

export default NavBar;
