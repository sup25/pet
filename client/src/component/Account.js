import React, { useState, useEffect, useContext } from "react";
import { useFetchUser } from "../Api/Api";
import { AiFillCamera } from "react-icons/ai";
import axios from "axios";
import { ProfileContext } from "../Context/ProfileContext";

const Account = () => {
  const { profilePicture, setProfilePicture } = useContext(ProfileContext);
  const user = useFetchUser();
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileChanged, setProfileChanged] = useState(false);

  useEffect(() => {
    // Retrieve profile picture from local storage on component mount
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
  }, []);

  const handleProfilePictureUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", selectedFile);

        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          "http://localhost:5000/ProfilePic",
          formData,
          config
        );

        const imageURL = response.data.profilePicture; // Extract the profile picture URL from the response

        // Update the profile picture in the state
        setProfilePicture(imageURL);

        // Save the profile picture URL to local storage
        localStorage.setItem("profilePicture", imageURL);

        // Set profileChanged to true after successful upload
        setProfileChanged(true);

        setTimeout(() => {
          setProfileChanged(false);
        }, 5000);
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    } else {
      // No selected file, reset the profile picture state and show the option to upload again
      setProfilePicture(null);
      setSelectedFile(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setProfileChanged(false);
    if (file) {
      const objectURL = URL.createObjectURL(new Blob([file]));
      setProfilePicture(objectURL);
    }
  };

  return (
    <div className="section py-20">
      <div className="flex py-5 flex-col px-5 justify-evenly md:flex-row w-full h-auto gap-10 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] h-[250px] flex flex-col items-center justify-center bg-gray-300 rounded-t-xl shadow-xl">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="ProfilePicture"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-3xl">
                {user ? user : "No profile Picuture"}
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
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="password"
              name="reenterpassword"
              required
              placeholder="Reenter your Password"
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            {/* {errorMessage && <div className="text-red-500">{errorMessage}</div>} */}
            <button
              type="submit"
              className="w-1/4 h-auto justify-center text-white font-bold text-xl py-1 rounded-3xl flex px-4 bg-[#0d5b46] hover:bg-[#199e7a]"
              disabled={!selectedFile}
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
