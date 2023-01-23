import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect, createContext } from "react";
import auth from "../firebase.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setCurrentUser(user) : setCurrentUser(null);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
