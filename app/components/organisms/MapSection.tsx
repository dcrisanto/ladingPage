"use client";

import { useGenerals } from "@/app/context/generals.context";
import ServiceAreaIcon from "@/app/icons/ServiceArea";
import Star from "@/app/icons/Star";
import React from "react";

export default function MapSection() {
  const { home, general } = useGenerals();
  const mapSection = home?.map;
  const serviceAreas = mapSection?.serviceAreas ?? [];

  return (
    <div
      className="relative grid gap-4 px-28 py-14 max-xl:px-16 max-[1100px]:flex max-[1100px]:flex-col-reverse max-[1100px]:px-10 max-[900px]:px-4"
      style={{
        gridTemplateColumns: "2fr 1fr",
      }}
    >
      <div className="absolute right-0 top-0 h-[75px] w-[75px] max-[900px]:hidden">
        <Star height={75} width={75} />
      </div>
      <div className="h-[450px]">
        <iframe
          src={
            "https://www.google.com/maps/d/u/0/embed?mid=1R15866PapM_AbUpzwQv-5Qxs4sr-Fw4&ehbc=2E312F"
          }
          loading="lazy"
          style={{ border: 0, width: "100%", height: "100%" }}
        />
      </div>
      <div
        className="bg-white"
        style={{
          boxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
          WebkitBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
          MozBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
        }}
      >
        <div className="flex items-center justify-start gap-4 px-10 py-8 max-[1100px]:px-6">
          <p className="flex-1 text-2xl font-medium text-[#2F62AD] max-[900px]:text-xl">
            {mapSection?.title ?? ""}
          </p>
          <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#2F62AD]">
            <ServiceAreaIcon />
          </div>
        </div>
        <div className="mx-10 mb-[40px] max-h-[300px] overflow-y-auto border border-solid border-[#2F62AD] px-4 max-[1100px]:mx-6">
          <div className="flex flex-col gap-4 py-4">
            {serviceAreas?.map((service: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 max-[1100px]:px-4"
              >
                <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full border border-solid border-[#2F62AD] bg-white">
                  <div className="h-[50%] w-[50%] bg-[#2F62AD]" />
                </div>
                <p className="text-lg font-extralight text-[#2F62AD] max-[900px]:text-base">
                  {service?.name ?? ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
