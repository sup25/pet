import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import Pet from "./Pet";

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
          <Route path="/" element={<Pet />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
