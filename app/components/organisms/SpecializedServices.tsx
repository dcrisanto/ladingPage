import Star from "@/app/icons/Star";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/specializedServices/1.png";
import img2 from "../../../public/images/specializedServices/2.png";
import img3 from "../../../public/images/specializedServices/3.png";
import img4 from "../../../public/images/specializedServices/4.png";
import ServiceItem from "../molecules/specializedServices/ServiceItem";

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
      className="relative mt-20 bg-[#2f62ad1f] pb-16 pt-20 max-[1000px]:pt-12"
      style={{
        clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 100%, 0 4%)",
      }}
    >
      <p className="mb-12 text-center text-3xl font-semibold text-[#1A3666] max-[900px]:mb-8 max-[900px]:text-2xl">
        Specialized Cleaning Services
      </p>
      <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 mx-28 flex gap-4 overflow-x-auto max-xl:mx-12 max-[1100px]:mx-10 max-[1100px]:mx-6 max-[900px]:flex-col">
        {services.map((service, index) => (
          <ServiceItem service={service} key={index} />
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 flex h-[360px] w-[120px] flex-col justify-end bg-[#2f62ad1f] max-[900px]:hidden"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      >
        <div className="h-[80px] w-[80px]">
          <Star height={80} width={80} />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 flex hidden h-[360px] w-[120px] flex-col justify-end bg-[#2f62ad1f] max-[900px]:flex"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      >
        <div className="h-[60px] w-[60px]">
          <Star height={60} width={60} />
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
