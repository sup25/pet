import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Slider from "./pages/Home/Slider";
import Navbar from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
const App = () => {
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
          <Route path="/" element={<Slider />} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;
