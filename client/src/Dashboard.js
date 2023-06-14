import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <h1 className="text-3xl text-center py-8">Welcome user</h1>
      <div className="container">
        <div className="section justify-end">
          <div className="bg-gray-200 p-4 rounded flex shadow justify-center items-center">
            <BsFillBookmarkHeartFill className="w-8 h-auto" />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
