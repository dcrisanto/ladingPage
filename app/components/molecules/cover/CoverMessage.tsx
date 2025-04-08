"use client";

import { useGenerals } from "@/app/context/generals.context";
import { getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React from "react";

function CoverMessage() {
  const { home, general } = useGenerals();
  const banner = home?.banner;
  const desktopImageUrl = banner?.desktopImage?.url;

  return (
    <>
      <div
        className="flex h-full flex-col justify-end max-[900px]:hidden"
        style={{
          minHeight: "calc(100vh - var(--app-header-height))",
        }}
      >
        <div
          className="bg-primary px-12 max-[1000px]:px-10 max-[900px]:px-6"
          style={{
            minHeight: "calc(100% - 100px)",
            clipPath:
              "polygon(83% 0, 100% 14%, 100% 100%, 0 100%, 0% 50%, 0 0)",
          }}
        >
          <div className="mb-6 mt-20 flex items-center justify-start max-xl:mt-16 max-[1000px]:mt-[30px]">
            <div className="bg-[#1A3666] px-4 py-[1px]">
              <p className="font-light text-white max-[1000px]:text-sm">
                {banner?.subtitle ?? ""}{" "}
                <span className="font-semibold">{general?.title ?? ""}</span>
              </p>
            </div>
          </div>
          <p className="text-6xl font-semibold text-white max-xl:text-4xl max-[1100px]:text-3xl">
            {banner?.title ?? ""}
          </p>
          <p className="max-[1000px]:text-bas mt-5 text-lg font-extralight text-white">
            {banner?.description ?? ""}
          </p>
        </div>
      </div>
      <div className="relative flex hidden h-full flex-col justify-end pt-[250px] max-[900px]:flex">
        <div
          className="bg-primary px-6"
          style={{
            clipPath:
              "polygon(83% 0, 100% 14%, 100% 100%, 0 100%, 0% 50%, 0 0)",
          }}
        >
          <div className="mb-6 mt-20 mt-[30px] flex items-center justify-start">
            <div className="bg-[#1A3666] px-4 py-[1px]">
              <p className="font-light text-white max-[1000px]:text-sm">
                {banner?.subtitle ?? ""}{" "}
                <span className="font-semibold">{general?.title ?? ""}</span>
              </p>
            </div>
          </div>
          <p className="text-3xl text-6xl font-semibold text-white">
            {banner?.title ?? ""}
          </p>
          <p className="mt-5 text-lg font-extralight text-white max-[1000px]:mb-[25px] max-[1000px]:text-base">
            {banner?.description ?? ""}
          </p>
        </div>
        <div
          className="inset absolute top-0 z-[-1] w-full"
          style={{
            height: "360px",
          }}
        >
          {getFormattedImageUrl(desktopImageUrl) && (
             <Image
             src={getFormattedImageUrl(desktopImageUrl) ?? ""}
             alt=""
             layout="fill"
             style={{
               objectFit: "cover",
               height: "100%",
               width: "100%",
             }}
           />       
          )}
        </div>
      </div>
    </>
  );
}

export default CoverMessage;
