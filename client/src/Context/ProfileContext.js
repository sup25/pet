import React, { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState(() => {
    // Try to retrieve the profile picture from local storage on component initialization
    const storedProfilePicture = localStorage.getItem("profilePicture");
    return storedProfilePicture ? storedProfilePicture : null;
  });

  const updateProfilePicture = (imageURL) => {
    setProfilePicture(imageURL);

    // Store the updated profile picture in local storage
    localStorage.setItem("profilePicture", imageURL);
  };

  // Optionally, you can use a cleanup effect to remove the profile picture from local storage when the user logs out
  useEffect(() => {
    return () => {
      // Clear the profile picture from local storage when the user logs out
      localStorage.removeItem("profilePicture");
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profilePicture, updateProfilePicture }}>
      {children}
    </ProfileContext.Provider>
  );
};
