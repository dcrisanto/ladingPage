import Calendar from "@/app/icons/Calendar";
import React from "react";

export default function OurValues() {
  const values = [
    {
      image: "",
      title: "Integrity & Trust",
      description:
        "Building long-term relationships with honesty and transparency.",
    },
    {
      image: "",
      title: "Quality & Excellence",
      description:
        "Delivering superior results through professionalism and innovation.",
    },
    {
      image: "",
      title: "Sustainability & Responsibility",
      description: "Reducing environmental impact with eco-friendly solutions.",
    },
  ];

  return (
    <div className="flex h-full flex-col justify-end pb-[50px]">
      <div>
        <p className="mb-[20px] text-xl font-semibold text-primary">
          Our Values
        </p>
        <div className="flex flex-col gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-6 px-6 py-5"
              style={{
                boxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                WebkitBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                MozBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
              }}
            >
              <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#1a3666]">
                <Calendar />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <p className="text-base font-medium text-primary">
                  {value.title}
                </p>
                <p className="text-sm font-extralight text-[#1a3666]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
