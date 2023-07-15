import React from "react";
import Logo from "../../Assets/logo";
export const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-3/4 bg-[#0d5b46] h-auto  flex flex-col overflow-hidden items-center gap-5 justify-center rounded-t-3xl ">
        <div className="mt-5">
          <Logo className="w-44 h-auto" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-bold ">
            ©Copyright Pawsitively Perfect. All right reserved
          </h2>
          <span className="text-center font-medium text-white">
            Designed by SUPGG
          </span>
        </div>
      </div>
    </div>
  );
};
