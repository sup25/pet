import React from "react";
import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import Login from "./component/Login";
import { Register } from "./component/Register";
import Navbar from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import Pet from "./Pet";
import Account from "./component/Account";
import { ProfileProvider } from "./Context/ProfileContext";
import { AuthProvider } from "./Context/authContext";
import { useFetchUserData } from "./Api/Api";
import Dashboard from "./Dashboard";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <PageNotFound />
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

const App = () => {
  const { user, isLoading } = useFetchUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AuthProvider>
        <ProfileProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {user ? (
              <Route path="/account" element={<Account />} />
            ) : (
              <Route path="/account" element={<Navigate to="/404" replace />} />
            )}
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </>
  );
};

export default App;
