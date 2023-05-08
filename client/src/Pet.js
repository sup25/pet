import React from "react";
import Slider from "./pages/Home/Slider";
import { About } from "./pages/Home/About";
import { Content } from "./pages/Home/Content";
import ContactForm from "./pages/Home/Form";
import { Faq } from "./pages/Home/Faq";

const Pet = () => {
  return (
    <>
      <Slider />
      <About />
      <Content />
      <Faq />
      <ContactForm />
    </>
  );
};

export default Pet;
