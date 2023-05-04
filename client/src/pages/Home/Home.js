import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import car1 from "../../Assets/car1.jpg"
import car2 from "../../Assets/car2.jpg"
import car3 from "../../Assets/car3.jpg"

const carImages = [
    { id: 1, src: car1 },
    { id: 2, src: car2 },
    { id: 3, src: car3 }
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showNextImage = () => {
        if (currentImageIndex === carImages.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const showPreviousImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(carImages.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className="my-10">
            <div>
                <div className="h-96 container bg-slate-500 flex flex-row w-full items-center overflow-hidden relative">
                    {carImages.map((img, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-full h-full transition ease-in-out duration-1000 ${index === currentImageIndex ? "block" : "hidden"
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={`Car ${img.id}`}
                                className="w-full h-full object-cover  "
                            />
                        </div>
                    ))}

                    <div className="absolute top-2/4  left-5  ">
                        <button onClick={showPreviousImage}>
                            <BsFillArrowLeftCircleFill className='w-10 md:w-16 h-auto opacity-30 hover:opacity-100' />
                        </button>
                    </div>
                    <div className="absolute top-2/4 right-5 ">
                        <button onClick={showNextImage}>
                            <BsFillArrowRightCircleFill className=' w-10 md:w-16 h-auto opacity-30 hover:opacity-100' />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
