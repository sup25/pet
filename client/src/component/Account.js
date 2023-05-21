import { useFetchUser } from "../Api/Api";
import { AiFillCamera } from "react-icons/ai";

const Account = () => {
  const user = useFetchUser();

  return (
    <div className="section py-20   ">
      <div className="flex py-5 flex-col px-5 justify-evenly md:flex-row w-full h-auto gap-10 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] h-[250px] flex flex-col items-center justify-center bg-gray-300 rounded-t-xl shadow-xl">
            <div className=" text-3xl">{user}</div>
          </div>
          <div className="w-full h-12 gap-2 justify-center text-xl text-white font-bold  rounded flex  items-center bg-[#0d5b46]">
            <AiFillCamera />
            <span className="flex justify-center items-center">
              Change your picture
            </span>
          </div>
        </div>

        <form
          className=" md:w-1/2 w-full height-fit px-3 flex items-center"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 w-full h-auto">
            <div className="text-2xl md:text-4xl">
              Change your account credential
            </div>
            <span className="text-base text-gray-400">Pawsitively Perfect</span>
            <input
              type="text"
              name="username"
              required
              placeholder="Name"
              // value={formData.username}
              // onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              // value={formData.email}
              // onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              // value={formData.password}
              // onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            <input
              type="password"
              name="reenterpassword"
              required
              placeholder="Reenter your Password"
              // value={formData.password}
              // onChange={handleChange}
              className="w-full h-auto py-2 rounded-2xl flex px-4 border border-[#0d5b46]"
            />
            {/* {errorMessage && <div className="text-red-500">{errorMessage}</div>} */}
            <button
              type="submit"
              className="w-1/4 h-auto justify-center text-white font-bold text-xl py-1 rounded-3xl flex px-4 bg-[#0d5b46] hover:bg-[#199e7a]"
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
