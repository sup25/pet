import React, { useState } from "react";
import Dog from "../Assets/Dog";
import { Link } from "react-router-dom";
import { handleSubmit } from "../Api/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password, setError);
  };

  return (
    <div className="section py-10 items-center flex-wrap">
      <div className="flex py-5 flex-col md:flex-row w-full h-auto gap-5 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-center">
          <Dog className="md:w-full w-4/5 h-auto" />
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="md:max-w-[632px] w-full justify-center height-fit px-3 flex  gap-5 flex-col items-start"
        >
          <div className="text-2xl md:text-4xl">
            Welcome back to Pawsitively Perfect
          </div>
          <span className="text-base text-gray-400">
            where every pet deserves a loving home
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="w-4/5 h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-4/5 h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-2/5 h-auto justify-center text-white font-bold text-xl py-1 rounded-3xl flex px-4 bg-[#0d5b46] hover:bg-[#199e7a]"
          >
            Submit
          </button>
          <div className="text-xl mb-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#0d5b46]">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
