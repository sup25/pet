import { useState } from "react";
import { Link } from "react-router-dom";
import DogLog from "../Assets/DogOut";
import { registerUser } from "../Api/Api";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);
      console.log(response); // Handle the response from the server

      // Reset the form and clear any error messages
      setFormData({ username: "", email: "", password: "" });
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="section py-10 items-center">
      <div className="flex flex-wrap py-5 flex-col md:flex-row w-full h-auto gap-5 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-center">
          <DogLog className="md:w-full w-4/5 h-auto" />
        </div>
        <form
          className="md:w-2/5 w-full height-fit px-3 flex items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 w-full h-auto">
            <div className="text-2xl md:text-4xl">
              Find your perfect furry match with Pawsitively Perfect
            </div>
            <span className="text-base text-gray-400">
              where pets and people connect!
            </span>
            <input
              type="text"
              name="username"
              required
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <button
              type="submit"
              className="w-1/2 h-auto justify-center text-white font-bold text-xl py-1 rounded-3xl flex px-4 bg-[#0d5b46] hover:bg-[#199e7a]"
            >
              Submit
            </button>
            <div className="text-xl mb-2">
              Already have an account{" "}
              <Link to="/Login" className="text-[#0d5b46]">
                LogIn
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
