import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import axios from "axios";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // If token exists, send request to fetch user data
          const response = await axios.get("http://localhost:5000/user", {
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

    fetchUserData();
  }, []);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="bg-[#0d5b46] h-20 section flex justify-between  items-center shadow-[0_5px_10px_0px_rgba(0,0,0,0.5)] ">
        <div className="container flex  items-center">
          <div className="container flex justify-between items-center">
            <Link to="/">
              <Logo className="w-44 h-auto" />
            </Link>
            <div className="text-white gap-4 text-xl font-medium md:flex hidden">
              <Link to="/">Home</Link>
              {user ? (
                <span>{user.name}</span>
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
                    className="flex items-center gap-3 text-2xl border-b-2 border-gray-300 rounded py-1 px-1"
                  >
                    <HiHome />
                    Home
                  </Link>
                  {user ? (
                    <span>{user.username}</span>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center gap-3 text-2xl border-b-2 border-gray-300 rounded py-1 px-1"
                      >
                        <FiLogIn />
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center gap-3 text-2xl border-b-2 border-gray-300 rounded py-1 px-1"
                      >
                        <BsFillPersonPlusFill />
                        Register
                      </Link>
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
