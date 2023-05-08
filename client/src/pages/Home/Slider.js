import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import car1 from "../../Assets/car1.jpg";
import car2 from "../../Assets/car2.jpg";
import car3 from "../../Assets/car3.jpg";

const carImages = [
  { id: 1, src: car1 },
  { id: 2, src: car2 },
  { id: 3, src: car3 },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const showNextImage = () => {
    if (current === carImages.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const showPreviousImage = () => {
    if (current === 0) {
      setCurrent(carImages.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="my-5">
      <div>
        <div className="md:h-[calc(100vh-90px)] h-[calc(90vh-90px)] flex w-full items-center overflow-hidden  relative">
          {carImages.map((img, index) => (
            <div
              key={index}
              className={`flex flex-col w-full h-full ${
                index === current
                  ? "opacity-100 transition-opacity duration-1000 ease-in-out"
                  : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={`Car ${img.id}`}
                className={`carousel-img ${
                  index === current ? "block" : "hidden"
                }`}
              />
            </div>
          ))}
          <div className="w-fit flex absolute left-0 right-0 m-auto gap-10 md:bottom-18 bottom-10">
            <div
              className="  flex items-center cursor-pointer"
              onClick={showPreviousImage}
            >
              <BsFillArrowLeftCircleFill className=" w-10 md:w-16 h-auto opacity-70 hover:opacity-100" />
            </div>
            <div
              className="  flex items-center cursor-pointer "
              onClick={showNextImage}
            >
              <BsFillArrowRightCircleFill className="  w-10 md:w-16 h-auto opacity-70 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
