"use client";

import Star from "@/app/icons/Star";
import Image from "next/image";
import React, { useState } from "react";
import after1 from "../../../public/images/projects/after1.png";
import after2 from "../../../public/images/projects/after2.png";
import before1 from "../../../public/images/projects/before1.png";
import before2 from "../../../public/images/projects/before2.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const options = [
    {
      before: "",
      after: "",
    },
    {
      before: "",
      after: "",
    },
  ];

  return (
    <div
      className="relative mb-10 bg-[#2f62ad1f] pb-16"
      style={{
        clipPath: "polygon(100% 0, 100% 92%, 97% 100%, 0 100%, 0 0)",
      }}
    >
      <div className="relative">
        <div
          className="absolute top-0 flex h-[120px] w-full items-center justify-end bg-[#2f62ad1f]"
          style={{
            clipPath: "polygon(52% 0, 100% 100%, 100% 0)",
          }}
        >
          <div className="h-[85px] w-[85px]">
            <Star height={85} width={85} />
          </div>
        </div>
        <div className="pt-20">
          <p className="mb-8 text-center text-3xl font-semibold text-[#1A3666]">
            Projects
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="max-w-[400px] text-center font-light text-[#1A3666]">
          Transform Your Business Space with Us! Explore some of our successful
          cleaning projects:
        </p>
      </div>
    </div>
  );
}
