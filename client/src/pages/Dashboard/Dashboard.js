import React, { useState, useEffect, useContext } from "react";
import Tooltip from "../../utils/Tooltip";
import { AuthContext } from "../../Context/authContext";
import {
  BsFillBookmarkHeartFill,
  BsFillPatchPlusFill,
  BsImageFill,
} from "react-icons/bs";
import axios from "axios";
import { appConfig } from "../../utils/AppConfig";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [showGallery, setShowGallery] = useState(false);
  const [clickFill, setClickFill] = useState(false);
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

  console.log({
    title: formData.petName,
    content: formData.petDescription,
    type: formData.petType,
    image: formData.petImage,
    author: user._id,
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

    try {
      const response = await axios.post(`${appConfig.apiUrl}updatePost`, {
        title: formData.petName,
        content: formData.petDescription,
        type: formData.petType,
        image: formData.petImage,
        author: user._id,
      });
      const createdPost = response.data;

      setPosts([...posts, createdPost]);
    } catch (error) {
      console.log("error posting", error);
    }
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
      <div
        className={`p-4 mt-4 tooltip="Add new post" gap-4 rounded flex justify-center items-center ${
          clickFill
            ? "shadow  transition duration-250 ease-linear "
            : "opacity-0 pointer-events-none"
        }`}
      >
        {clickFill && (
          <div className=" md:flex-nowrap flex-wrap flex justify-between w-full">
            <div className="flex flex-col w-full justify-center items-center gap-2">
              <h2 className="text-2xl font-semibold">Upload Photo</h2>
              <div className="w-[300px] h-[250px] rounded bg-gray-200"></div>
              <button
                type="submit"
                className="bg-[#0d5b46] hover:bg-[#107359] text-white py-2 px-4 rounded font-medium"
              >
                Upload
              </button>
            </div>
            <div className="mt-8 w-full flex flex-col flex-wrap ">
              <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex justify-between flex-wrap">
                  <div className="w-[40%]">
                    <label
                      htmlFor="petName"
                      className="block mb-2 font-semibold"
                    >
                      Pet Name:
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                  <div className="w-[40%]">
                    <label
                      htmlFor="petType"
                      className="block mb-2 font-semibold"
                    >
                      Pet Type:
                    </label>
                    <input
                      type="text"
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="petDescription"
                    className="block mb-2 font-semibold"
                  >
                    Pet Description:
                  </label>
                  <textarea
                    id="petDescription"
                    name="petDescription"
                    value={formData.petDescription}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                  <div className="w-full flex">
                    Author-
                    <p className="text-base  font-medium">{user.username}</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#0d5b46] hover:bg-[#107359] text-white font-medium py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mb-2">Type: {post.image}</p>
              <p>Description: {post.content}</p>
            </li>
          ))}
        </ul>
      </div>
      {showGallery && (
        <div className="flex  justify-between flex-wrap gap-1  mt-4 w-full ">
          {dogImages.map((imageUrl, index) => (
            <div key={index} className="w-1/5 h-[300px] flex ">
              <img
                src={imageUrl}
                alt={`Dog ${index}`}
                className="w-full rounded "
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
