"use client";

import Minus from "@/app/icons/Minus";
import Plus from "@/app/icons/Plus";
import { cn, getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  service: any;
}

export default function ServiceItem({ service }: Props) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="group min-w-[380px] cursor-pointer">
      <div className="relative h-[400px]">
        <div className="absolute inset-0 z-[-5]">
          <Image
            src={getFormattedImageUrl(service?.image?.url) ?? ""}
            alt=""
            layout="fill"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-[900px]:hidden">
          <div className="absolute inset-0 z-[-1] bg-primary opacity-[0.8]" />
          <div className="flex h-full flex-col items-center justify-center gap-4">
            {service.options.map((opt: any, index: number) => (
              <div key={index} className="flex items-start gap-3 px-10">
                <div className="mt-[9px]">
                  <div className="h-[4px] w-[4px] rounded-full bg-white" />
                </div>
                <div className="flex-1">
                  <p className="font-light text-white">
                    <span className="font-medium">{opt?.title ?? ""}: </span>
                    {opt?.description ?? ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showContent && (
          <div className="h-full">
            <div className="absolute inset-0 z-[-1] bg-primary opacity-[0.8]" />
            <div className="flex h-full flex-col items-center justify-center gap-4">
              {service.options.map((opt: any, index: number) => (
                <div key={index} className="flex items-start gap-3 px-10">
                  <div className="mt-[9px]">
                    <div className="h-[4px] w-[4px] rounded-full bg-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-light text-white">
                      <span className="font-medium">{opt?.title ?? ""}: </span>
                      {opt?.description ?? ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center bg-[#1A3666] py-5 max-[900px]:justify-between max-[900px]:pr-4">
        <p className="px-4 text-center font-medium text-white max-[900px]:flex-1 max-[900px]:text-left">
          {service.title}
        </p>
        <div
          className="hidden h-[30px] w-[30px] cursor-pointer items-center justify-center border border-solid border-white max-[900px]:inline-flex"
          onClick={handleClick}
        >
          {!showContent ? <Plus /> : <Minus />}
        </div>
      </div>
    </div>
  );
}
