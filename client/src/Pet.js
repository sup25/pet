import React from "react";
import Slider from "./pages/Home/Slider";
import { About } from "./pages/Home/About";
import { Content } from "./pages/Home/Content";
import ContactForm from "./pages/Home/Form";

const Pet = () => {
  return (
    <>
      <Slider />
      <About />
      <Content />
      <ContactForm />
    </>
  );
};

export default Pet;
