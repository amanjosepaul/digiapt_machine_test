import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import AddPost from "./component/Pages/AddPost/AddPost";
import LoginAndSignUp from "./component/Pages/LoginAndSignUp/LoginAndSignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import NavBar from "./component/NavBar/NavBar";
import MyPosts from "./component/Pages/MyPosts/MyPosts";
import AuthProvider from "./auth/AuthProvider";
import { signOutUser } from "./services/apiServices";

const AppRoutes = () => {
  useEffect(() => {
    signOutUser();
  }, []);
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/my-posts" element={<MyPosts />} />
              <Route path="/add-post" element={<AddPost />} />
            </Route>
            <Route path="/login-signup" element={<LoginAndSignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default AppRoutes;
