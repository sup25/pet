import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#0d5b46] h-20 section flex justify-between  items-center shadow-[0_5px_10px_0px_rgba(0,0,0,0.5)]">
        <Link to="/">
          <Logo className="w-44 h-auto" />
        </Link>
        <div className="flex text-white gap-4 text-xl font-medium  ">
          Home About Services Contact
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
