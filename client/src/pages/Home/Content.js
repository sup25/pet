import { GiDogHouse } from "react-icons/gi";
import { BsHouseGearFill, BsStack } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { Animate } from "../../animation/animate";
const ZoomIn = Animate.ZoomIn;
const contents = [
  {
    icon: <MdPets className="w-2/5  h-auto  text-[#0d5b46]" />,
    title: "Adoptable Pets",
    desc: "Adopting a pet is an exciting and rewarding experience, but it also requires careful consideration and preparation. Our adoption process is designed to ensure that every pet is matched with a suitable and loving home. We require potential adopters to fill out an application and go through a screening process to ensure that they are ready for the responsibility of pet ownership. We also offer guidance and support throughout the adoption process and beyond.",
  },
  {
    icon: <BsHouseGearFill className="w-2/5 h-auto text-[#0d5b46]" />,
    title: "Adoption Process",
    desc: "Adopting a pet is an exciting and rewarding experience, but it also requires careful consideration and preparation. Our adoption process is designed to ensure that every pet is matched with a suitable and loving home. We require potential adopters to fill out an application and go through a screening process to ensure that they are ready for the responsibility of pet ownership. We also offer guidance and support throughout the adoption process and beyond.",
  },
  {
    icon: <BsStack className="w-2/5 h-auto   fill-[#0d5b46]" />,
    title: "Resources",
    desc: "We understand that taking care of a pet can be a big responsibility, and we want to ensure that all pet owners have the knowledge and resources they need to provide the best possible care for their furry friends. Our Resources page provides a wealth of information on pet care, including vet advice, training tips, and a library of articles and videos. We also offer access to expert advice from experienced veterinarians and pet trainers.",
  },
  {
    icon: <GiDogHouse className="w-2/5  h-auto  text-[#0d5b46]" />,
    title: "Partner Shelters",
    desc: "We partner with reputable animal shelters and rescue organizations to help promote adoption and provide support to those in need. Our Partner Shelters page provides information on our partner organizations, including their location and contact information. We are proud to work with these organizations to help pets in need find loving and responsible homes.",
  },
];
export const Content = () => {
  return (
    <div className="section mb-20">
      <div className="container">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-7">
          {contents.map((item, index) => (
            <ZoomIn key={index} className=" flex justify-center">
              <div className="md:w-[450px] h-auto  p-6 bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col gap-7">
                <div className="flex justify-center ">{item.icon}</div>
                <div className="text-2xl font-bold xl:mt-2 xl:text-3xl flex justify-center w-full">
                  {item.title}
                </div>
                <p className="text-sm font-semibold xl:text-lg text-left">
                  {item.desc}
                </p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </div>
  );
};
