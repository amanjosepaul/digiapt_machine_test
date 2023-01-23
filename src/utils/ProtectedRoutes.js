import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("currentUser in protectted route: ", currentUser);
  const location = useLocation();
  console.log("location in protectedRoutes: ", location.pathname);
  return currentUser ? <Outlet /> : <Navigate to="/login-signup" />;
};

export default ProtectedRoutes;
