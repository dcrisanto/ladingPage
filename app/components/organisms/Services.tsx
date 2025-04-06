import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/services/1.png";
import img2 from "../../../public/images/services/2.png";
import img3 from "../../../public/images/services/3.png";
import ServiceItem from "../molecules/services/ServiceItem";

export default function Services() {
  const services = [
    {
      title: "Office Cleaning (Daily or Weekly)",
      image: img1,
      options: [
        {
          subtitle: "Floor Cleaning",
          description:
            "Sweeping, mopping, and vacuuming to maintain spotless and hygienic spaces.",
        },
        {
          subtitle: "Surface Cleaning:",
          description:
            "Sanitizing desks, tables, and work surfaces to remove dust, germs, and stains",
        },
        {
          subtitle: "Trash Removal:",
          description:
            "Emptying wastebaskets and replacing liners to keep your workspace clean and odor-free.",
        },
      ],
    },
    {
      title: "Restroom Cleaning",
      image: img2,
      options: [
        {
          subtitle: "Sanitization",
          description:
            "Thorough disinfection of toilets, sinks, and fixtures to maintain hygiene.",
        },
        {
          subtitle: "Restocking Supplies",
          description:
            "Ensuring availability of toilet paper, soap, and hand towels.",
        },
        {
          subtitle: "Mirror & Tile Cleaning",
          description:
            "Removing smudges, stains, and watermarks for a polished look.",
        },
      ],
    },
    {
      title: "Common Area Cleaning",
      image: img3,
      options: [
        {
          subtitle: "Break Rooms & Dining Areas",
          description:
            "Sanitizing surfaces, emptying trash, and restocking essentials.",
        },
        {
          subtitle: "Hallways & Reception Areas",
          description:
            "Sweeping, mopping, dusting, and organizing to create a welcoming environment",
        },
      ],
    },
  ];

  return (
    <div className="mb-10" id="services">
      <p className="mb-12 mt-20 text-center text-3xl font-semibold text-[#1A3666] max-xl:text-2xl max-[900px]:mb-6 max-[900px]:mt-14">
        Services
      </p>
      <div className="grid grid-cols-3 gap-16 px-28 max-xl:gap-8 max-xl:px-16 max-[1100px]:gap-4 max-[1100px]:px-6 max-[900px]:grid-cols-1">
        {services.map((service, index) => (
          <ServiceItem service={service} key={index} />
        ))}
      </div>
    </div>
  );
}
