"use client";

import { useGenerals } from "@/app/context/generals.context";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/services/1.png";
import img2 from "../../../public/images/services/2.png";
import img3 from "../../../public/images/services/3.png";
import ServiceItem from "../molecules/services/ServiceItem";

export default function Services() {
  const { home } = useGenerals();
  const servicesSection = home?.services;
  const services = servicesSection?.cards;

  return (
    <div className="mb-10" id="services">
      <p className="mb-12 mt-20 text-center text-3xl font-semibold text-[#1A3666] max-xl:text-2xl max-[900px]:mb-6 max-[900px]:mt-14">
        {servicesSection?.title ?? ""}
      </p>
      <div className="grid grid-cols-3 gap-16 px-28 max-xl:gap-8 max-xl:px-16 max-[1100px]:gap-4 max-[1100px]:px-6 max-[900px]:grid-cols-1">
        {services.map((service: any, index: number) => (
          <ServiceItem service={service} key={index} />
        ))}
      </div>
    </div>
  );
}
