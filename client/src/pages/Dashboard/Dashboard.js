import React, { useState, useEffect, useContext } from "react";
import Tooltip from "../../utils/Tooltip";
import { AuthContext } from "../../Context/authContext";
import Bookmarks from "./Bookmarks";
import {
  BsFillBookmarkHeartFill,
  BsFillPatchPlusFill,
  BsImageFill,
} from "react-icons/bs";
import { GetPost } from "../../Modules/GetPost";
import { makePost } from "../../hooks/MakePost";
import CreatePost from "../../Modules/CreatePost";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [showGallery, setShowGallery] = useState(false);
  const [clickFill, setClickFill] = useState(false);
  const [bookmarkedImages, setBookmarkedImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/20"
        );
        const data = await response.json();
        setDogImages(data.message);
      } catch (error) {
        console.error("Error fetching dog images:", error);
      }
    };

    fetchDogImages();
  }, []);

  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    petImage: "",
    author: "",
  });

  const toggleForm = () => {
    setClickFill(!clickFill);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (user && user._id) {
      makePost(formData, user._id, setPosts, posts)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error making a post:", error);
        });
    } else {
      console.error("User is undefined or missing _id property.");
    }
  };
  const handleBookmarkClick = (imageUrl) => {
    // Update the state with the bookmarked image
    setBookmarkedImages((prevImages) => [...prevImages, imageUrl]);
  };

  return (
    <div className="container mx-auto mt-5 pb-20 px-4">
      <div className="flex justify-end gap-2">
        <Tooltip text="Create Post">
          <div
            className="  bg-gray-20 bg-[#0d5b46] hover:bg-[#107359]  p-4 rounded flex shadow justify-center items-center cursor-pointer"
            onClick={toggleForm}
          >
            <BsFillPatchPlusFill className="w-8 h-auto text-white " />
          </div>
        </Tooltip>
        <Tooltip text="Favourite">
          <div className=" bg-[#0d5b46] hover:bg-[#107359] p-4 rounded flex shadow justify-center items-center">
            <BsFillBookmarkHeartFill className="w-8 h-auto text-white " />
          </div>
        </Tooltip>
        <Tooltip text="Gallary">
          <div
            className=" bg-[#0d5b46] hover:bg-[#107359] p-4 rounded flex shadow justify-center items-center"
            onClick={() => setShowGallery(!showGallery)}
          >
            <BsImageFill className="w-8 h-auto text-white  " />
          </div>
        </Tooltip>
      </div>
      <CreatePost
        clickFill={clickFill}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        user={user}
      />

      {showGallery && (
        <div className="flex  justify-between flex-wrap gap-1  mt-4 w-full ">
          {dogImages.map((imageUrl, index) => (
            <div
              key={index}
              className="max-w-[200px] w-full flex items-center flex-col gap-2 mb-4 "
            >
              <img
                src={imageUrl}
                alt={`Dog ${index}`}
                className="w-full rounded "
              />

              <div className="w-full">
                <BsFillBookmarkHeartFill
                  className="w-8 h-auto text-black cursor-pointer "
                  onClick={() => handleBookmarkClick(imageUrl)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <Bookmarks images={bookmarkedImages} />
      </div>
      <GetPost />
    </div>
  );
};

export default Dashboard;
