"use client";

import { useGenerals } from "@/app/context/generals.context";
import RightIcon from "@/app/icons/RightIcon";
import Star from "@/app/icons/Star";
import { cn, getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React, { useState } from "react";


export default function Projects() {
  const { home } = useGenerals();
  const projectsSection = home?.projects;
  const projects = projectsSection?.projects ?? [];
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div
      id="projects"
      className="relative mb-10 bg-[#2f62ad1f] pb-16"
      style={{
        clipPath: "polygon(100% 0, 100% 92%, 97% 100%, 0 100%, 0 0)",
      }}
    >
      <div className="relative">
        <div
          className="absolute top-0 flex h-[120px] w-full items-center justify-end bg-[#2f62ad1f] max-[900px]:hidden"
          style={{
            clipPath: "polygon(52% 0, 100% 100%, 100% 0)",
          }}
        >
          <div className="h-[85px] w-[85px]">
            <Star height={85} width={85} />
          </div>
        </div>
        <div
          className="absolute top-0 flex hidden h-[90px] w-full items-center justify-end bg-[#2f62ad1f] max-[900px]:flex"
          style={{
            clipPath: "polygon(52% 0, 100% 100%, 100% 0)",
          }}
        >
          <div className="h-[60px] w-[60px]">
            <Star height={50} width={50} />
          </div>
        </div>
        <div className="pt-20 max-[900px]:pt-14">
          <p className="mb-8 text-center text-3xl font-semibold text-[#1A3666] max-[900px]:mb-6 max-[900px]:text-2xl">
            Projects
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center font-light text-[#1A3666] max-[900px]:max-w-[100vw] max-[900px]:max-w-[400px] max-[900px]:px-2">
          Transform Your Business Space with Us! Explore some of our successful
          cleaning projects:
        </p>
      </div>
      <div
        className="mt-10 grid px-28 max-xl:px-16 max-[1100px]:px-10 max-[1000px]:block max-[900px]:px-6"
        style={{
          gridTemplateColumns: "1fr 100px",
        }}
      >
        <div className="grid flex-1 grid-cols-2 max-[850px]:grid-cols-1">
          <div className="relative">
            <div className="">
              <div className="absolute left-0 top-0 z-[50] bg-[#1A3666] px-3 py-1 text-sm font-medium text-white">
                Before
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden max-[850px]:max-h-[200px]">
              {getFormattedImageUrl(projects[selectedProject]?.before?.url) && (
                <Image
                  src={
                    getFormattedImageUrl(
                      projects[selectedProject]?.before?.url,
                    ) ?? ""
                  }
                  layout="fill"
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              )}
            </div>
          </div>
          <div className="relative">
            <div className="">
              <div className="absolute left-0 top-0 z-[50] bg-[#1A3666] px-3 py-1 text-sm font-medium text-white">
                After
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden max-[850px]:max-h-[200px]">
              {getFormattedImageUrl(projects[selectedProject]?.after?.url) && (
                <Image
                  layout="fill"
                  src={
                    getFormattedImageUrl(
                      projects[selectedProject]?.after?.url,
                    ) ?? ""
                  }
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#2F62AD] max-[1000px]:flex-row max-[1000px]:py-4">
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
              if (selectedProject < projects?.length - 1) {
                setSelectedProject(selectedProject + 1);
              }
            }}
            className={cn(
              "flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-[2px] border-solid border-[#ffffff80] transition-all duration-300",
              selectedProject < projects?.length - 1 &&
                "border-white hover:scale-[1.04]",
            )}
          >
            <RightIcon
              color={
                selectedProject < projects?.length - 1 ? "white" : "#ffffff80"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
