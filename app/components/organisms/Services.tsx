import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/services/1.png";
import img2 from "../../../public/images/services/2.png";
import img3 from "../../../public/images/services/3.png";

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
      <p className="mb-12 mt-20 text-center text-3xl font-semibold text-[#1A3666]">
        Services
      </p>
      <div className="grid grid-cols-3 gap-16 px-28">
        {services.map((service, index) => (
          <div key={index} className="group cursor-pointer">
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
    </div>
  );
}
