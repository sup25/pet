import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Animate } from "../../animation/animate";
const FadeDown = Animate.FadeDown;

const ContactForm = () => {
  return (
    <div className=" flex justify-center mx-5 my-20 md:my-20">
      <FadeDown>
        <div
          className=" section flex flex-col md:flex-row  md:h-auto justify-around  
        overflow-hidden  gap-10  bg-white  rounded-xl shadow-xl"
        >
          <div className="flex flex-col">
            <div className="text-3xl  md:text-5xl font-bold">Contact us</div>

            <p className="text-left my-4 w-full h-auto text-base md:text-lg  font-semibold xl:text-lg  ">
              We value feedback and are always happy to hear from our users. If
              you have any questions, comments, or concerns, please don't
              hesitate to reach out to us.
            </p>
            <div className="flex gap-3">
              <BsFacebook className="text-[#0d5b46]  w-10 h-auto" />
              <BsLinkedin className="text-[#0d5b46] w-10 h-auto" />
            </div>
          </div>

          <div className=" flex flex-col  w-4/5 h-fit max-w-3xl   my-2   ">
            <form>
              <div className="flex flex-col gap-5 w-full h-auto">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full h-auto py-5 rounded-2xl flex px-4 border border-[#0d5b46] "
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full h-auto py-5 rounded-2xl flex px-4 border border-[#0d5b46] "
                />
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full h-auto py-5 rounded-2xl flex px-4 border border-[#0d5b46] "
                />
                <textarea
                  rows={6}
                  type="text"
                  name="message"
                  required
                  placeholder="Message"
                  className="w-full h-auto   py-5 rounded-2xl flex px-4 border border-[#0d5b46] "
                />
                <button
                  type="submit"
                  className=" mb-2 h-auto justify-center text-white font-bold text-xl py-5 rounded-3xl  flex px-4 bg-[#0d5b46] hover:bg-[#199e7a] "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </FadeDown>
    </div>
  );
};

export default ContactForm;
