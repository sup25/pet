import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Animate } from "../../animation/animate";
const FadeIn = Animate.FadeIn;
export const About = () => {
  return (
    <div className=" flex justify-center mx-5 my-20 md:my-20">
      <FadeIn
        className=" section flex flex-col md:flex-row md:h-fit items-center  
            overflow-hidden  gap-10  bg-white  rounded-xl shadow-xl"
      >
        <div className="md:shrink-0">
          <BsFillInfoCircleFill className="text-[#0d5b46] w-[200px] h-auto" />
        </div>
        <div className=" flex flex-col  w-full h-fit max-w-3xl  justify-center my-2  gap-5  ">
          <h1 className="text-3xl md:text-5xl w-full h-auto  font-bold ">
            About us
          </h1>
          <p className="text-justify  w-full h-auto text-base md:text-lg  font-semibold xl:text-lg  ">
            Our company is dedicated to providing a platform that connects pets
            in need with loving and responsible owners. We believe that every
            pet deserves a happy and healthy home, and we strive to make the
            adoption process as seamless and enjoyable as possible for both pets
            and their new families. We are committed to promoting responsible
            pet ownership and providing ongoing support for pet owners.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};
