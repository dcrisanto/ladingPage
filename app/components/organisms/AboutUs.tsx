import { useGenerals } from "@/app/context/generals.context";
import Image from "next/image";
import React from "react";
import aboutUsImg from "../../../public/images/aboutus/1.png";
import MeetOurTeam from "../molecules/aboutUs/MeetOurTeam";
import OurValues from "../molecules/aboutUs/OurValues";

export default function AboutUs() {
  const { home } = useGenerals();
  const aboutSection = home?.about;

  return (
    <div className="relative" id="about-us">
      <div className="relative">
        <div
          className="absolute top-0 flex h-[120px] w-full items-center justify-end bg-[#2f62ad] max-[900px]:hidden"
          style={{
            clipPath: "polygon(52% 0, 100% 100%, 100% 0)",
          }}
        ></div>
        <div
          className="absolute top-0 flex hidden h-[90px] w-full items-center justify-end bg-[#2f62ad] max-[900px]:flex"
          style={{
            clipPath: "polygon(52% 0, 100% 100%, 100% 0)",
          }}
        ></div>
        <div className="pt-20 max-[900px]:pt-10">
          <p className="mb-8 text-center text-3xl font-semibold text-[#2F62AD] max-[900px]:mb-6 max-[900px]:text-2xl">
            {aboutSection?.title ?? ""}
          </p>
        </div>
      </div>
      <div className="mb-[60px] flex items-center justify-center">
        <p className="max-w-[800px] text-center font-extralight text-[#1A3666] max-[900px]:max-w-[400px] max-[900px]:px-2">
          {aboutSection?.description ?? ""}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 px-28 pb-[60px] max-xl:px-16 max-[1100px]:gap-8 max-[1100px]:px-4 max-[1100px]:pb-[10px] max-[950px]:grid-cols-1">
        <div className="relative max-h-[500px] max-[1000px]:max-h-[350px]">
          <Image
            src={aboutUsImg}
            alt=""
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
          <div className="absolute bottom-0 z-[-1] h-[68%] w-full">
            <div
              className="h-[100%] w-[75%] bg-[#2f62ad] max-[1100px]:w-[100%]"
              style={{
                clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 9%)",
              }}
            />
          </div>
        </div>
        <OurValues />
      </div>
      <div className="relative">
        <div
          className="absolute bottom-0 left-0 z-[-1] flex h-[300px] w-[100px] flex-col justify-end bg-[#2f62ad] max-[900px]:flex"
          style={{
            clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
          }}
        ></div>
        <MeetOurTeam />
      </div>
    </div>
  );
}
