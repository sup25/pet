import React, { createContext, useState, useContext, useEffect } from "react";
import { ProfileContext } from "./ProfileContext";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { profilePicture, setProfilePicture } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the user data when the component mounts
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/user/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const login = async (email, password, setError) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        window.location.href = "/";
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        profilePicture,
        setProfilePicture,
        isLoading,
      }}
    >
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
