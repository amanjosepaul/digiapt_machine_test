import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("currentUser: ", currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login-signup" />;
};

export default ProtectedRoutes;
