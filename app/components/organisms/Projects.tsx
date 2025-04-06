"use client";

import RightIcon from "@/app/icons/RightIcon";
import Star from "@/app/icons/Star";
import { cn } from "@/app/utils";
import Image from "next/image";
import React, { useState } from "react";
import after1 from "../../../public/images/projects/after1.png";
import after2 from "../../../public/images/projects/after2.png";
import before1 from "../../../public/images/projects/before1.png";
import before2 from "../../../public/images/projects/before2.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  // before = #1A3666
  //

  const options = [
    {
      before: before1,
      after: after1,
    },
    {
      before: before2,
      after: before2,
    },
  ];

  return (
    <div
      id="proyects"
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
      <div
        className="mt-10 grid px-28"
        style={{
          gridTemplateColumns: "1fr 100px",
        }}
      >
        <div className="grid flex-1 grid-cols-2">
          <div className="relative">
            <div className="">
              <div className="text- absolute left-0 top-0 bg-[#1A3666] px-3 py-1 text-sm font-medium text-white">
                Before
              </div>
            </div>
            <div>
              <Image
                src={options[selectedProject].before}
                alt=""
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="relative">
            <div className="">
              <div className="text- absolute left-0 top-0 bg-[#1A3666] px-3 py-1 text-sm font-medium text-white">
                After
              </div>
            </div>
            <div>
              <Image
                src={options[selectedProject].after}
                alt=""
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#2F62AD]">
          <div
            onClick={() => {
              if (selectedProject > 0) {
                setSelectedProject(selectedProject - 1);
              }
            }}
            className={cn(
              "flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-[2px] border-solid border-[#ffffff80] transition-all duration-300",
              selectedProject > 0 && "border-white hover:scale-[1.04]",
            )}
          >
            <div className="rotate-180">
              <RightIcon color={selectedProject > 0 ? "white" : "#ffffff80"} />
            </div>
          </div>
          <div
            onClick={() => {
              if (selectedProject < options?.length - 1) {
                setSelectedProject(selectedProject + 1);
              }
            }}
            className={cn(
              "flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-[2px] border-solid border-[#ffffff80] transition-all duration-300",
              selectedProject < options?.length - 1 &&
                "border-white hover:scale-[1.04]",
            )}
          >
            <RightIcon
              color={
                selectedProject < options?.length - 1 ? "white" : "#ffffff80"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
