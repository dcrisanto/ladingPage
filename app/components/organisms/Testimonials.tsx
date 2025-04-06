"use client";

import Quote from "@/app/icons/Quote";
import Star from "@/app/icons/Star";
import { cn } from "@/app/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import img from "../../../public/images/testimonial.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";

export default function Testimonials() {
  const [selectedStep, setSelectedStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      image: img,
      name: "Sarah M.",
      position: "Office Manager",
      testimonial:
        "Brightview transformed our office! The team is professional, thorough, and always punctual. Highly recommended!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "Their deep cleaning service exceeded our expectations. Our workspace has never looked better!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "We love their eco-friendly approach. It’s great to have a clean office while knowing we’re being environmentally responsible.",
    },
    {
      image: img,
      name: "Sarah M.",
      position: "Office Manager",
      testimonial:
        "Brightview transformed our office! The team is professional, thorough, and always punctual. Highly recommended!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "Their deep cleaning service exceeded our expectations. Our workspace has never looked better!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "We love their eco-friendly approach. It’s great to have a clean office while knowing we’re being environmentally responsible.",
    },
    {
      image: img,
      name: "Sarah M.",
      position: "Office Manager",
      testimonial:
        "Brightview transformed our office! The team is professional, thorough, and always punctual. Highly recommended!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "Their deep cleaning service exceeded our expectations. Our workspace has never looked better!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "We love their eco-friendly approach. It’s great to have a clean office while knowing we’re being environmentally responsible.",
    },
    {
      image: img,
      name: "Sarah M.",
      position: "Office Manager",
      testimonial:
        "Brightview transformed our office! The team is professional, thorough, and always punctual. Highly recommended!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "Their deep cleaning service exceeded our expectations. Our workspace has never looked better!",
    },
    {
      image: img,
      name: "Mark T.",
      position: "Office Manager",
      testimonial:
        "We love their eco-friendly approach. It’s great to have a clean office while knowing we’re being environmentally responsible.",
    },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollPosition = carouselRef.current.scrollLeft;

      const index = Math.floor(
        (scrollPosition / (carouselWidth - containerWidth)) *
          groupedTestimonials.length,
      );
      setSelectedStep(index);
    }
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

  function splitArray<T>(arr: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  const groupedTestimonials = splitArray(testimonials, 3);

  const scrollToGroup = (index: number) => {
    if (carouselRef.current) {
      const target = carouselRef.current.children[index];
      target && target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="relative pb-[50px]">
      <div className="relative">
        <div className="absolute top-0 h-[140px] w-full max-[900px]:hidden">
          <div className="h-[40px] w-[40px]">
            <Star height={90} width={90} />
          </div>
        </div>
        <div className="absolute top-0 hidden h-[100px] w-full max-[900px]:block">
          <div className="h-[60px] w-[60px]">
            <Star height={60} width={60} />
          </div>
        </div>
        <div className="pt-20 max-[900px]:pt-10">
          <p className="mb-8 text-center text-3xl font-semibold text-[#2F62AD] max-[900px]:mb-6 max-[900px]:text-2xl">
            Testimonials
          </p>
        </div>
      </div>
      <div className="mb-[30px] flex items-center justify-center">
        <p className="text-center font-light text-[#1A3666] max-[900px]:max-w-[100vw] max-[900px]:max-w-[400px] max-[900px]:px-2">
          See what our satisfied clients have to say about Brightview’s
          services:
        </p>
      </div>
      <div
        className="flex overflow-x-hidden py-3 max-[850px]:snap-x max-[850px]:snap-mandatory max-[850px]:overflow-x-auto"
        ref={carouselRef}
      >
        {groupedTestimonials.map((group, i) => (
          <div
            className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 grid min-w-full snap-center grid-cols-3 gap-10 px-28 max-xl:gap-8 max-xl:px-16 max-[1100px]:gap-6 max-[1100px]:px-10 max-[950px]:px-4 max-[850px]:flex max-[850px]:flex-col"
            key={i}
          >
            {group.map((testimonial, index) => (
              <div
                key={index}
                className="flex items-start"
                style={{
                  boxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                  WebkitBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                  MozBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                }}
              >
                <div
                  className={cn(
                    "flex h-full w-[60px] justify-center bg-[#1A3666] pt-[20px]",
                    index == 1 && "bg-[#2f62ad]",
                  )}
                >
                  <Quote />
                </div>
                <div className="flex-1 px-[24px] py-[35px] max-[850px]:px-[18px] max-[850px]:py-[25px]">
                  <div className="flex items-center justify-start gap-4">
                    <div className="h-[60px] w-[60px] max-[850px]:h-[45px] max-[850px]:w-[45px]">
                      <Image
                        src={testimonial.image}
                        alt=""
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-medium text-[#1A3666]">
                        {testimonial.name}
                      </p>
                      <p className="font-regular text-[#1A3666]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="mt-[20px] font-extralight text-[#1A3666]">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="z-[10] mt-[15px] flex flex-row items-center justify-center gap-4">
        {groupedTestimonials.map((dot, index) => (
          <div
            onClick={() => {
              setSelectedStep(index);
              scrollToGroup(index);
            }}
            key={index}
            className="z-[10] flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#1A3666]"
          >
            {selectedStep === index && (
              <div className="h-[45%] w-[45%] rounded-full bg-white"></div>
            )}
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 z-[-100] flex h-[360px] w-[120px] flex-col justify-end bg-[#2f62ad1f] max-[900px]:flex"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      ></div>
    </div>
  );
}
