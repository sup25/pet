import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/authContext";
import { AiFillCamera } from "react-icons/ai";
import { ProfileContext } from "../Context/ProfileContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ProfilePictureUpload, UpdateUserInfo } from "../hooks/UpdateAccount";

const Account = () => {
  const { profilePicture, setProfilePicture } = useContext(ProfileContext);
  const { user, isLoading } = useContext(AuthContext);
  const [showText, setShowText] = useState(false);
  const [showTextConfirm, setShowTextConfirm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileChanged, setProfileChanged] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
    if (user) {
      setUsername(user?.username || "");
      setEmail(user?.email || "");
    }
    console.log("user", user);
  }, [user]);

  const handleProfilePictureUpload = async () => {
    const imageURL = await ProfilePictureUpload(selectedFile);

    if (imageURL) {
      // Update the profile picture in the state
      setProfilePicture(imageURL);

      // Set profileChanged to true after successful upload
      setProfileChanged(true);

      setTimeout(() => {
        setProfileChanged(false);
      }, 5000);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setProfileChanged(false);
  };
  const handleUpdateUserInfo = async () => {
    const response = await UpdateUserInfo(
      user,
      username,
      email,
      password,
      ConfirmPassword
    );

    if (response) {
      console.log(response);
    }
  };

  return (
    <div className="section py-20">
      <div className="flex py-5 flex-col px-5 justify-evenly md:flex-row w-full h-auto gap-10 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] h-[250px] flex flex-col items-center justify-center bg-gray-300 rounded-t-xl shadow-xl">
            {profilePicture ? (
              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : ""}
                alt="ProfilePicture"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-3xl">
                {user ? user.username : "No profile Picuture"}
              </div>
            )}
          </div>

          <label
            onClick={handleProfilePictureUpload}
            htmlFor="fileInput"
            className="w-[300px] cursor-pointer h-12 gap-2 justify-center text-xl text-white font-bold rounded flex items-center bg-[#0d5b46]"
          >
            {profilePicture ? <AiFillCamera /> : ""}
            <span className="flex justify-center items-center">
              {profilePicture ? "Change profile" : "Upload profile picture"}
            </span>
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            disabled={selectedFile !== null}
            onChange={handleFileInputChange}
          />
          {profileChanged && (
            <div className="text-green-500">
              Profile picture changed successfully!
            </div>
          )}
        </div>

        <form
          className="md:w-1/2 w-full height-fit px-3 flex items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 w-full h-auto">
            <div className="text-2xl md:text-4xl">
              Change your account credentials
            </div>
            <span className="text-base text-gray-400">Pawsitively Perfect</span>
            <input
              type="text"
              name="username"
              required
              placeholder="Name"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={showText ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="w-full h-auto py-2  rounded-2xl flex px-4 border border-[#0d5b46]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowText(!showText)}
                className="absolute inset-y-0 right-0 px-10 flex items-center focus:outline-none"
              >
                {showText ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showTextConfirm ? "text" : "password"}
                name="reenterpassword"
                required
                placeholder="Reenter your Password"
                className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowTextConfirm(!showTextConfirm)}
                className="absolute inset-y-0 right-0 px-10 flex items-center focus:outline-none"
              >
                {showTextConfirm ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            {/*   {errorMessage && <div className="text-red-500">{errorMessage}</div>} */}
            <button
              type="submit"
              className="w-1/4 h-auto justify-center text-white font-bold text-xl py-1 rounded-3xl flex px-4 bg-[#0d5b46] hover:bg-[#199e7a]"
              onClick={handleUpdateUserInfo}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
