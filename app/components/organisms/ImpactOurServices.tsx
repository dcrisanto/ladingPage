"use client";

import { useGenerals } from "@/app/context/generals.context";
import { getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React from "react";


export default function ImpactOurServices() {
  const { home } = useGenerals();
  const ourServicesImpact = home?.ourServicesImpact;
  const options = ourServicesImpact?.cards ?? [];

  return (
    <div className="relative mt-20 pb-16 pt-16 max-[900px]:mt-10 max-[900px]:pt-12">
      <div className="absolute inset-0 z-[-5]">
        {getFormattedImageUrl(ourServicesImpact?.image?.url) && (
          <Image
            src={getFormattedImageUrl(ourServicesImpact?.image?.url) ?? ""}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="absolute inset-0 z-[-1] bg-primary opacity-[.85]"></div>
      <div className="bg-red z-[10]">
        <p className="mb-12 text-center text-3xl font-semibold text-white max-[900px]:mb-8 max-[900px]:text-xl">
          {ourServicesImpact?.title ?? ""}
        </p>
        <div className="grid grid-cols-4 gap-16 px-28 max-xl:gap-6 max-xl:px-16 max-[1100px]:px-10 max-[900px]:px-6 max-[890px]:grid-cols-2">
          {options.map((option: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-3 border border-solid border-[white] px-6 py-8 max-[900px]:px-4 max-[900px]:py-6"
            >
              <div className="flex items-center justify-center">
                <div className="relative flex h-[60px] w-[60px] items-center justify-center max-[900px]:h-[40px] max-[900px]:w-[40px]">
                  {getFormattedImageUrl(option?.image?.url) && (
                    <Image
                      src={getFormattedImageUrl(option?.image?.url) ?? ""}
                      alt={option.title}
                      layout="fill"
                      style={{
                        objectFit: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  )}
                </div>
              </div>
              <p className="text-center text-lg font-bold text-white max-[900px]:text-base">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
