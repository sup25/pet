import axios from "axios";
import { appConfig } from "../utils/AppConfig";

export const UpdateUserInfo = async (
  user,
  username,
  email,
  password,
  ConfirmPassword
) => {
  if (password !== ConfirmPassword) {
    console.log("password did not match");
    return null;
  }

  try {
    const updateData = {
      userId: user._id,
      username,
      email,
      password,
      ConfirmPassword,
    };
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(
      `${appConfig.apiUrl}updateUserData`,
      updateData,
      config
    );

    console.log("User updated:", response.data);
    window.location.replace("/");
  } catch (error) {
    console.log("error updating the data", error);
    return null;
  }
};

export const ProfilePictureUpload = async (selectedFile) => {
  if (!selectedFile) {
    return null; // Return null or an error message to handle in the Account component
  }

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
      `${appConfig.apiUrl}ProfilePic`,
      formData,
      config
    );
    // Extract the profile picture URL from the response
    const imageURL = response.data.profilePicture;

    // Save the profile picture URL to local storage
    localStorage.setItem("profilePicture", imageURL);

    return imageURL;
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    return null;
  }
};
