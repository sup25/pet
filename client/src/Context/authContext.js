import React, { createContext, useState, useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { profilePicture, setProfilePicture } = useContext(ProfileContext);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        profilePicture,
        setProfilePicture,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
