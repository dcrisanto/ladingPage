"use client";

import { useGenerals } from "@/app/context/generals.context";
import Star from "@/app/icons/Star";
import React from "react";
import ServiceItem from "../molecules/specializedServices/ServiceItem";

export default function SpecializedServices() {
  const { home } = useGenerals();
  const specializedServicesSection = home?.specializedServices;
  const specializedServices = specializedServicesSection?.cards;

  return (
    <div
      className="relative mt-20 bg-[#2f62ad1f] pb-16 pt-20 max-[1000px]:pt-12"
      style={{
        clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 100%, 0 4%)",
      }}
    >
      <p className="mb-12 text-center text-3xl font-semibold text-[#1A3666] max-[900px]:mb-8 max-[900px]:text-2xl">
        {specializedServicesSection?.title ?? ""}
      </p>
      <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 mx-28 flex gap-4 overflow-x-auto max-xl:mx-12 max-[1100px]:mx-10 max-[1100px]:mx-6 max-[900px]:flex-col">
        {specializedServices.map((service: any, index: number) => (
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
