import Star from "@/app/icons/Star";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/specializedServices/1.png";
import img2 from "../../../public/images/specializedServices/2.png";
import img3 from "../../../public/images/specializedServices/3.png";
import img4 from "../../../public/images/specializedServices/4.png";

export default function SpecializedServices() {
  const services = [
    {
      title: "Deep Cleaning",
      image: img1,
      options: [
        {
          subtitle: "Carpet & Upholstery Cleaning",
          description:
            "Advanced washing techniques to remove dirt, stains, and bacteria.",
        },
        {
          subtitle: "Floor Polishing & Waxing",
          description:
            "Enhancing floor durability and appearance with protective coatings.",
        },
        {
          subtitle: "Glass & Window Cleaning",
          description:
            "Eliminating smudges and streaks for a clear, professional look.",
        },
      ],
    },
    {
      title: "Post-Event Cleaning",
      image: img2,
      options: [
        {
          subtitle: "Waste Removal",
          description:
            "Efficient collection and disposal of event-related trash.",
        },
        {
          subtitle: "Furniture & Floor Cleaning",
          description:
            "Dusting, wiping, and sanitizing all surfaces for a fresh environment.",
        },
      ],
    },
    {
      title: "Advanced Sanitization & Disinfection",
      image: img3,
      options: [
        {
          subtitle: "Certified Disinfectants",
          description:
            "Safe and effective products to eliminate germs and bacteria.",
        },
        {
          subtitle: "Fogging & Spraying",
          description:
            "Specialized methods for high-risk areas to prevent virus and bacteria spread.",
        },
      ],
    },
    {
      title: "Office Plant Care",
      image: img4,
      options: [
        {
          subtitle: "Watering & Maintenance",
          description: "Ensuring fresh and vibrant indoor greenery.",
        },
      ],
    },
  ];

  return (
    <div
      className="relative mb-10 mt-20 bg-[#2f62ad1f] pb-16 pt-20"
      style={{
        clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 100%, 0 7%)",
      }}
    >
      <p className="mb-12 text-center text-3xl font-semibold text-[#1A3666]">
        Specialized Cleaning Services
      </p>
      <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 mx-28 flex gap-4 overflow-x-auto">
        {services.map((service, index) => (
          <div key={index} className="group min-w-[380px] cursor-pointer">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 z-[-5]">
                <Image
                  src={service.image}
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <div className="h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 z-[-1] bg-primary opacity-[0.8]" />
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  {service.options.map((opt, index) => (
                    <div key={index} className="flex items-start gap-3 px-10">
                      <div className="mt-[9px]">
                        <div className="h-[4px] w-[4px] rounded-full bg-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-light text-white">
                          <span className="font-medium">{opt.subtitle}: </span>
                          {opt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#1A3666] py-5">
              <p className="px-4 text-center font-medium text-white">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 flex h-[360px] w-[120px] flex-col justify-end bg-[#2f62ad1f]"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      >
        <div className="h-[80px] w-[80px]">
          <Star height={80} width={80} />
        </div>
      </div>
      <div
        className="absolute right-0 top-0 flex h-[360px] w-[120px] flex-col justify-end bg-[#2f62ad1f]"
        style={{
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        }}
      />
    </div>
  );
}
