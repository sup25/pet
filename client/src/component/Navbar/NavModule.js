import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavModule = ({ handleLogout }) => {
  return (
    <>
      <div className="py-4 px-2 bg-[#0d5b46] rounded-3xl text-base flex-col items-center justify-center absolute top-16 z-50">
        <div>
          <Link
            to="/account"
            className="flex gap-3 hover:text-orange-300 flex-col border-b-2 border-gray-300 rounded"
          >
            Account
          </Link>
        </div>
        <button onClick={handleLogout}>
          <div className="flex hover:text-orange-300 mt-3 items-center border-b-2 border-gray-300 rounded">
            <FiLogOut />
            Logout
          </div>
        </button>
      </div>
    </>
  );
};

export default NavModule;
