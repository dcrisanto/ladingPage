import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/impactOurServices/1.png";
import img2 from "../../../public/images/impactOurServices/2.png";
import img3 from "../../../public/images/impactOurServices/3.png";
import img4 from "../../../public/images/impactOurServices/4.png";
import coverImage from "../../../public/images/impactOurServices/background.jpeg";

export default function ImpactOurServices() {
  const options = [
    {
      title: "Boost Employee Productivity",
      img: img1,
    },
    {
      title: "Reduce Sick Days & Improve Well-being",
      img: img2,
    },
    {
      title: "Enhance Brand Image",
      img: img3,
    },
    {
      title: "Eco-Friendly Solutions",
      img: img4,
    },
  ];

  return (
    <div className="relative mt-20 pb-16 pt-16">
      <div className="absolute inset-0 z-[-5]">
        <Image
          src={coverImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 z-[-1] bg-primary opacity-[.85]"></div>
      <div className="bg-red z-[10]">
        <p className="mb-12 text-center text-3xl font-semibold text-white">
          The Impact Of Our Services
        </p>
        <div className="grid grid-cols-4 gap-16 px-28">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border border-solid border-[white] px-6 py-8"
            >
              <div className="flex items-center justify-center">
                <div className="flex h-[60px] w-[60px] items-center justify-center">
                  <Image
                    src={option.img}
                    alt=""
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <p className="text-center text-lg font-bold text-white">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
