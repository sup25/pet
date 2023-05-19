import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./component/Login";
import { Register } from "./component/Register";
import Navbar from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import Pet from "./Pet";
import { AuthProvider } from "./Context/authContext";
import Account from "./component/Account";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Pet />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
