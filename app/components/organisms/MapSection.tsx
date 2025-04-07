import ServiceAreaIcon from "@/app/icons/ServiceArea";
import Star from "@/app/icons/Star";
import React from "react";

export default function MapSection() {
  return (
    <div
      className="relative grid gap-4 px-28 py-14"
      style={{
        gridTemplateColumns: "1.5fr 1fr",
      }}
    >
      <div className="absolute right-0 top-0 h-[75px] w-[75px]">
        <Star height={75} width={75} />
      </div>
      <div className="h-[400px]">
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
        <div className="flex items-center justify-start gap-4 px-10 py-8">
          <p className="flex-1 text-2xl font-medium text-[#2F62AD]">
            Services Areas
          </p>
          <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#2F62AD]">
            <ServiceAreaIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
