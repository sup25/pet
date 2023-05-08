import React from "react";
import Dog from "../Assets/Dog";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="section py-10  items-center ">
      <div className=" flex py-5 flex-col md:flex-row w-full h-auto gap-10  bg-white  rounded-2xl shadow-xl    ">
        <div className="flex justify-center">
          <Dog className="md:w-full w-4/5 h-auto" />
        </div>
        <form className="md:w-2/5 w-full height-fit px-3 flex items-center">
          <div className="flex flex-col gap-5 w-full h-auto">
            <div className="text-2xl md:text-4xl ">
              Welcome back to Pawsitively Perfect
            </div>
            <span className="text-base text-gray-400 ">
              where every pet deserves a loving home
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46] "
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46] "
            />
            <button
              type="submit"
              className=" w-1/2  h-auto justify-center text-white font-bold text-xl py-1 rounded-3xl  flex px-4 bg-[#0d5b46] hover:bg-[#199e7a] "
            >
              Submit
            </button>
            <div className="text-xl mb-2">
              Doesnot have an account{" "}
              <Link to="/register" className="text-[#0d5b46]">
                SignUp
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
