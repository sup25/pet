import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Set the user data in the context state
    setUser(userData);
  };

  const logout = () => {
    // Clear the user data from the context state
    setUser(null);
    // Remove the token from localStorage
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
