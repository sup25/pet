import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import Tooltip from "./Tooltip";
import { useFetchUser } from "./Api/Api";
import {
  BsFillBookmarkHeartFill,
  BsFillPatchPlusFill,
  BsImageFill,
} from "react-icons/bs";
const Dashboard = () => {
  const [isuser, setIsUser] = useState(false);
  const user = useFetchUser();
  const [posts, setPosts] = useState([]);

  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    petDescription: "",
  });
  const [clickFill, setClickFill] = useState(false);

  const toggleForm = () => {
    setClickFill(!clickFill);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, formData]);
    setFormData({
      petName: "",
      petType: "",
      petDescription: "",
    });
  };
  useEffect(() => {
    if (isuser) {
      const timer = setTimeout(() => {
        setIsUser(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isuser]);

  return (
    <div className="bg-white h-screen">
      <Navbar />
      {isuser && (
        <h1 className="text-3xl text-[#0d5b46] text-center py-8">
          Welcome {user}
        </h1>
      )}

      <div className="container mx-auto pb-20 px-4">
        <div className="flex justify-end gap-2">
          <Tooltip text="Create Post">
            <div
              className="bg-gray-20 bg-[#0d5b46] hover:bg-[#107359]  p-4 rounded flex shadow justify-center items-center cursor-pointer"
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
            <div className=" bg-[#0d5b46] hover:bg-[#107359] p-4 rounded flex shadow justify-center items-center">
              <BsImageFill className="w-8 h-auto text-white  " />
            </div>
          </Tooltip>
        </div>
        <div
          className={`p-4 mt-4 tooltip="Add new post" gap-4 rounded flex justify-center items-center ${
            clickFill ? "shadow" : ""
          }`}
        >
          {clickFill && (
            <div className="md:flex-nowrap flex-wrap flex justify-between w-full">
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
                  <div>
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
                  <div>
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
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul className="list-disc pl-8">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin auctor purus ut semper pharetra.</li>
            <li>Sed posuere justo sed elit pulvinar, sed tempor mi lacinia.</li>
            <li>
              Nullam finibus mauris vitae lectus viverra, vitae ultrices nisl
              accumsan.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <ul className="space-y-4">
            {posts.map((post, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded shadow">
                <h3 className="text-lg font-semibold">{post.petName}</h3>
                <p className="mb-2">Type: {post.petType}</p>
                <p>Description: {post.petDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
