import React from "react";
import { Animate } from "../../animation/animate";
const FadeUp = Animate.FadeUp;
const content = [
  {
    question: "Q: What is Pawsitively Perfect?",
    answer:
      " A: Pawsitively Perfect is a company that provides a platform to connect pets in need with loving and responsible owners.",
  },
  {
    question: " Q: How does Pawsitively Perfect work?",
    answer:
      "A: Pawsitively Perfect works by partnering with animal shelters and rescue organizations to showcase adoptable pets on their website. Potential pet owners can search for pets based on various criteria such as breed, age, gender, and location.",
  },
  {
    question: "Q: How do I adopt a pet through Pawsitively Perfect?",
    answer:
      "  A: To adopt a pet through Pawsitively Perfect, you can start by browsing our website and searching for pets that match your criteria. Once you find a pet that you're interested in adopting, you can contact us to schedule a meet-and-greet. After a successful meeting, we will conduct a thorough background check and ensure that the pet is placed in a loving and responsible home.",
  },
  {
    question: "Q: What kind of pets can I adopt through Pawsitively Perfect?",
    answer:
      "  A: Pawsitively Perfect showcases adoptable dogs, cats, and other small animals such as rabbits and guinea pigs.",
  },
  {
    question:
      "Q: What are the requirements for adopting a pet through Pawsitively Perfect?",
    answer:
      "  A: To adopt a pet through Pawsitively Perfect, you must be at least 21 years old and have a stable home environment that is safe for the pet. You must also pass a background check and provide references. In addition, we require a commitment to responsible pet ownership, including providing proper care, nutrition, and medical attention for the pet.",
  },
  {
    question:
      "Q: What if I have more questions about pet adoption or pet care?",
    answer:
      " A: At Pawsitively Perfect, we are committed to providing resources and support to potential pet owners. If you have more questions about pet adoption or pet care, please don't hesitate to contact us. We have a team of experts who are ready to help you every step of the way.",
  },
];
export const Faq = () => {
  return (
    <div className="section flex flex-col gap-5 py-10  bg-[#0d5b46]">
      {content.map((item, index) => (
        <FadeUp key={index} className="text-white  flex flex-col gap-2 ">
          <p className="text-3xl font-medium ">{item.question}</p>
          <span className="text-xl font-thin  ">{item.answer}</span>
        </FadeUp>
      ))}
    </div>
  );
};
