import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import { useFetchUser } from "./Api/Api";
import Login from "./component/Login";
import { Register } from "./component/Register";
import Navbar from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import Pet from "./Pet";
import Account from "./component/Account";

const App = () => {
  const user = useFetchUser();

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
