import Image from "next/image";
import React from "react";
import coverImage from "../../../public/images/cover.png";
import CoverMessage from "../molecules/cover/CoverMessage";
import Form from "../molecules/cover/Form";

export default function Cover() {
  return (
    <div
      className="relative mt-[var(--app-header-height)]"
      style={{
        height: "calc(100vh - var(--app-header-height))",
        width: "100vw",
      }}
    >
      <div
        className="w-full"
        style={{
          height: "calc(100vh - var(--app-header-height))",
        }}
      >
        <Image
          src={coverImage}
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div
        className="absolute top-0 z-10 grid h-full w-full gap-24 px-28"
        style={{
          gridTemplateColumns: "1.5fr 1fr",
        }}
      >
        <CoverMessage />
        <Form />
      </div>
      <div
        className="absolute bottom-0 right-0 h-[140px] w-screen bg-[#2f62ad73]"
        style={{
          clipPath: "polygon(100% 0, 57% 100%, 100% 100%)",
        }}
      />
    </div>
  );
}
