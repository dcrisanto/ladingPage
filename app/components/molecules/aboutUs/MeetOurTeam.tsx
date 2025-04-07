"use client";

import { useGenerals } from "@/app/context/generals.context";
import Star from "@/app/icons/Star";
import { getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import img from "../../../../public/images/cover.png";

export default function MeetOurTeam() {
  const { home } = useGenerals();
  const meetOurTeamSection = home?.about?.meetOurTeam;
  const images = meetOurTeamSection?.images ?? [];
  const [selectedStep, setSelectedStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  console.log({ meetOurTeamSection });

  const handleScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.scrollWidth;
        const containerWidth = carouselRef.current.offsetWidth;
        const scrollPosition = carouselRef.current.scrollLeft;

        const index = Math.floor(
          (scrollPosition / (carouselWidth - containerWidth)) * images.length,
        );
        setSelectedStep(index);
      }
    }, 150);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => {
        carousel.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToGroup = (index: number) => {
    if (carouselRef.current) {
      const target = carouselRef.current.children[index];
      target && target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div
      className="mt-[100px] grid px-28 pb-[92px] max-xl:px-16 max-[1100px]:mt-[20px] max-[1100px]:px-4 max-[1000px]:flex max-[1000px]:flex-col max-[900px]:px-0"
      style={{
        gridTemplateColumns: "1fr 1.3fr",
      }}
    >
      <div
        className="relative flex h-[250px] flex-col bg-[#1a3666] pr-[10px] text-white max-[1000px]:hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 7% 100%, 0 88%)",
        }}
      >
        <div className="flex flex-1 flex-col justify-center px-20">
          <p className="text-3xl font-medium">Meet Our</p>
          <p className="mb-[30px] text-3xl font-medium">Team</p>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center justify-end">
          <Star height={80} width={80} color="white" />
        </div>
      </div>
      <div className="hidden max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center">
        <div
          className="relative flex h-[250px] flex-col bg-[#1a3666] pr-[10px] text-white max-[1000px]:flex max-[1000px]:h-[100px]"
          style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 12%)",
          }}
        >
          <div className="flex flex-1 flex-col justify-center px-20">
            <p className="text-2xl font-medium">Meet Our Team</p>
          </div>
          <div className="absolute right-0 top-0 flex items-center justify-end">
            <Star height={60} width={60} color="white" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 relative flex snap-x snap-mandatory overflow-x-auto"
          ref={carouselRef}
        >
          {images.map((image: any, index: number) => (
            <div
              className="relative z-[-1] h-[350px] min-w-full snap-center max-[1000px]:min-h-[300px]"
              key={index}
            >
              {getFormattedImageUrl(image?.url) && (
                <Image
                  layout="fill"
                  src={getFormattedImageUrl(image?.url) ?? ""}
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-[10px] z-[50] flex w-full items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-4 border border-[2px] border-solid border-white px-3 py-2">
            {images.map((dot: any, index: number) => (
              <div
                onClick={() => {
                  setSelectedStep(index);
                  scrollToGroup(index);
                }}
                key={index}
                className="flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-white"
              >
                {selectedStep !== index && (
                  <div className="h-[40%] w-[40%] rounded-full bg-[#787575]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
