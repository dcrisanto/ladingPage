"use client";

import { useGenerals } from "@/app/context/generals.context";
import { getFormattedImageUrl } from "@/app/utils";
import Image from "next/image";
import React from "react";
import coverImage from "../../../public/images/cover.png";
import CoverMessage from "../molecules/cover/CoverMessage";
import Form from "../molecules/cover/Form";

export default function Cover() {
  const { home } = useGenerals();
  const banner = home?.banner;
  const desktopImageUrl = banner?.desktopImage?.url;

  return (
    <div
      className="relative mt-[var(--app-header-height)]"
      style={{
        minHeight: "calc(100vh - var(--app-header-height))",
        width: "100vw",
      }}
    >
      <div
        className="inset absolute top-0 z-[-1] h-full w-full max-[900px]:hidden"
        style={{
          minHeight: "calc(100vh - var(--app-header-height))",
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
      <div
        className="z-10 grid h-full w-full gap-36 px-28 max-xl:gap-8 max-xl:px-16 max-[1100px]:gap-6 max-[1100px]:px-6 max-[900px]:block max-[900px]:gap-0 max-[900px]:gap-4 max-[900px]:px-0"
        style={{
          gridTemplateColumns: "1.3fr 1fr",
        }}
      >
        <CoverMessage />
        <Form />
      </div>
      <div
        className="absolute bottom-0 right-0 z-[-1] h-[140px] w-screen bg-[#2f62ad73]"
        style={{
          clipPath: "polygon(100% 0, 57% 100%, 100% 100%)",
        }}
      />
    </div>
  );
}
