import React from "react";
import dog from '../../Assets/dog.png'

export const About = () => {
    return (
        <div className=" flex justify-center mx-5 my-20 md:my-20">
            <div className=" section flex flex-col md:flex-row md:h-fit items-center  
            overflow-hidden  gap-10  bg-white  rounded-xl shadow-xl">
                <div className="md:shrink-0">
                    <img src={dog} className="w-96 h-auto" alt="dog" />
                </div>
                <div className=" flex flex-col  w-full h-fit max-w-3xl  justify-center my-2  gap-5  ">
                    <h1 className="text-3xl md:text-5xl w-full h-auto text-[#0d5b46] font-bold underline underline-offset-8">About us</h1>
                    <p className="text-justify  w-full h-auto text-base md:text-lg  font-semibold xl:text-lg  ">
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
