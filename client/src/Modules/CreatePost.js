import React from "react";

const CreatePost = ({
  clickFill,
  handleFormSubmit,
  formData,
  handleInputChange,
  user,
}) => {
  return (
    <div
      className={`p-4 mt-4 gap-4 rounded flex justify-center items-center ${
        clickFill
          ? "shadow transition duration-250 ease-linear"
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
                  <label htmlFor="petName" className="block mb-2 font-semibold">
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
                  <label htmlFor="petType" className="block mb-2 font-semibold">
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
  );
};

export default CreatePost;
