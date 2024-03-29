import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";
import { ProfileContext } from "../../Context/ProfileContext";
import { AuthContext } from "../../Context/authContext";
import NavModule from "./NavModule";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { profilePicture } = useContext(ProfileContext);

  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };

  const [expanded, setExpanded] = useState(false);
  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    window.location.href = "/";
  };
  return (
    <>
      <div className="bg-[#0d5b46] h-20 section flex  items-center shadow-[0_5px_10px_0px_rgba(0,0,0,0.5)]">
        <div className="container flex items-center ">
          <div className="flex items-center justify-between w-full">
            <Link to="/">
              <Logo className="w-44 h-auto" />
            </Link>
            <div className="text-white gap-4 text-xl font-medium md:flex items-center hidden">
              <Link to="/">Home</Link>
              {user ? (
                <>
                  <Link to="/dashboard">Feed</Link>
                  <div className="" onClick={toggleDropdown}>
                    <div className="flex flex-col items-center justify-between ">
                      <div className="flex items-center justify-between">
                        {profilePicture ? (
                          <img
                            src={profilePicture}
                            alt="ProfilePicture"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold cursor-pointer justify-center border flex bg-slate-200/40  items-center text-xs rounded-full h-12 w-12 py-2 px-2 border-gray-400 ">
                            {user.username}
                          </span>
                        )}
                      </div>
                      {expanded && <NavModule handleLogout={handleLogout} />}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="md:hidden text-white flex items-center transition-all ease-in-out delay-150">
              {show ? (
                <div className="z-50">
                  <GiCancel onClick={toggleMenu} className="w-8 h-auto" />
                </div>
              ) : (
                <GiHamburgerMenu onClick={toggleMenu} className="w-8 h-auto" />
              )}
            </div>
            <div className="realative">
              {show && (
                <div className="gap-5 md:hidden absolute py-5 px-2 top-20 right-0 flex flex-col p-0 m-0 w-[calc(100vh-500px)] h-[calc(100vh-130px)] whitespace-nowrap bg-white rounded-l-lg shadow-lg z-50">
                  <Link
                    to="/"
                    className="flex items-center gap-3 text-xl border-b-2 border-gray-300 rounded py-1 px-1"
                  >
                    <HiHome className="w-auto h-8" />
                    Home
                  </Link>
                  {user ? (
                    <>
                      <div className="flex items-center justify-between flex-col">
                        <span className="text-black font-bold text-center border flex bg-slate-200/40  items-center text-xs rounded-full h-12 w-12 py-2 px-2 border-gray-400 ">
                          {user.username}
                        </span>{" "}
                        <button
                          className="py-2 px-2 flex  items-center justify-center"
                          onClick={handleLogout}
                        >
                          <FiLogOut />
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {contents.map((item, index) => (
                        <div
                          className="flex items-center gap-3 text-xl border-b-2 border-gray-300 rounded py-1 px-1"
                          key={index}
                        >
                          {item.icon} {item.link}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
            {show && <div className="overlay" onClick={toggleMenu} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const contents = [
  {
    link: <Link to="/login">Login</Link>,
    icon: <FiLogIn className="w-auto h-8" />,
  },
  {
    link: <Link to="/register">Register</Link>,
    icon: <IoMdPersonAdd className="w-auto h-8" />,
  },
];
