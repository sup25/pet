import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./component/Login";
import { Register } from "./component/Register";
import Navbar from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import Pet from "./Pet";
import Account from "./component/Account";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:5000/user/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const NotFound = () => {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to homepage</Link>
      </div>
    );
  };

  return (
    <div>
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
        {user ? (
          <Route path="/account" element={<Account />} />
        ) : (
          <Route path="/account" element={<Navigate to="/404" replace />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
