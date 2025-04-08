"use client";

import { useGenerals } from "@/app/context/generals.context";
import { getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React from "react";

export default function OurValues() {
  const { home } = useGenerals();
  const values = home?.about?.valuesCards;

  return (
    <div className="flex h-full flex-col justify-end pb-[50px]">
      <div>
        <p className="mb-[20px] text-xl font-semibold text-primary">
          Our Values
        </p>
        <div className="flex flex-col gap-8">
          {values.map((value: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-start gap-6 px-6 py-5"
              style={{
                boxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                WebkitBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
                MozBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
              }}
            >
              <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#1a3666]">
                <div className="relative flex h-[30px] w-[30px] items-center justify-center">
                  {getFormattedImageUrl(value?.image?.url) && (
                    <Image
                      layout="fill"
                      src={getFormattedImageUrl(value?.image?.url) ?? ""}
                      alt=""
                      style={{
                        objectFit: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <p className="text-base font-medium text-primary">
                  {value?.title ?? ""}
                </p>
                <p className="text-sm font-extralight text-[#1a3666]">
                  {value?.description ?? ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
