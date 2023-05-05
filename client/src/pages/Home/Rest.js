import React from "react";
import dog from '../../Assets/dog.png'

export const Rest = () => {
    return (
        <div className=" flex justify-center mx-5 my-20 md:my-20">
            <div className=" section flex md:flex-row items-center flex-col 
            justify-center overflow-hidden  gap-10 md:h-80 bg-white  rounded-xl shadow-xl">
                <div className="md:shrink-0">
                    <img src={dog} className="w-96 h-auto" alt="dog" />
                </div>
                <div className=" flex flex-col  w-full  justify-center my-2  gap-5  ">
                    <h1 className="text-3xl  md:text-5xl text-[#0d5b46] font-bold underline underline-offset-8">About us</h1>
                    <p className="text-justify text-base md:text-lg ">
                        Our company is dedicated to providing a platform that connects pets in
                        need with loving and responsible owners. We believe that every pet
                        deserves a happy and healthy home, and we strive to make the adoption
                        process as seamless and enjoyable as possible for both pets and their
                        new families. We are committed to promoting responsible pet ownership
                        and providing ongoing support for pet owners.
                    </p>
                </div>

            </div>


        </div>
    );
};
