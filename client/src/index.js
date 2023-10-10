import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProfileProvider } from "./Context/ProfileContext";
import { AuthProvider } from "./Context/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
