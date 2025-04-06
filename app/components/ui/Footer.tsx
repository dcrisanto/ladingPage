import Email from "@/app/icons/Email";
import Facebook from "@/app/icons/Facebook";
import Instagram from "@/app/icons/Instagram";
import Marker from "@/app/icons/Marker";
import RingPhone from "@/app/icons/RingPhone";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-[#323232] px-28 py-20 max-xl:px-16 max-[1100px]:px-10 max-[900px]:block max-[900px]:px-6 max-[900px]:py-12">
      <div className="flex items-center gap-12 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8">
        <div className="flex items-center gap-4">
          <Marker />
          <p className="text-sm font-medium text-white">
            1152 70th Ave, Oakland, CA 94621
          </p>
        </div>
        <div className="flex items-center gap-4">
          <RingPhone />
          <p className="text-sm font-medium text-white">(650) 546 - 1965</p>
        </div>
        <div className="flex items-center gap-4">
          <Email />
          <p className="text-sm font-medium text-white">email@brightview</p>
        </div>
      </div>
      <div className="flex items-center gap-8 max-[900px]:mt-[25px] max-[900px]:mt-[5px] max-[900px]:justify-end">
        <div className="flex h-[40px] w-[40px] items-center justify-center bg-white">
          <Facebook />
        </div>
        <div className="flex h-[40px] w-[40px] items-center justify-center bg-white">
          <Instagram />
        </div>
      </div>
    </div>
  );
}
