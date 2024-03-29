import { useState } from "react";
import { Link } from "react-router-dom";
import DogLog from "../Assets/DogOut";
import { registerUser } from "../Api/RegisterApi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState();

  const [showPassword, setShowPassword] = useState(false);

  const shouldShowToggle = "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);
      console.log(response);
      setFormData({ username: "", email: "", password: "" });
      setErrorMessage("");
      setSuccessMsg("User created successfully");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="section py-10 items-center">
      <div className="container">
        <div className="flex flex-wrap p-5 flex-col md:flex-row w-full h-auto gap-5 bg-white rounded-2xl shadow-xl">
          <DogLog className="md:w-[50%] w-4/5 h-auto" />

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
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
                />

                {shouldShowToggle && (
                  <div
                    className="absolute cursor-pointer top-3 left-3/4 md:left-[90%] "
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                )}
              </div>
              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              {successMsg && (
                <div className="text-green-500">{errorMessage}</div>
              )}
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
    </div>
  );
};

export default Register;
