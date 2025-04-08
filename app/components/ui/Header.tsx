"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getFormattedImageUrl } from "@/app/utils";
import GeneralMenu from "../molecules/header/GeneralMenu";
import Navbar from "../organisms/Navbar";
import { useGenerals } from "@/app/context/generals.context";

export default function Header() {
  const { general } = useGenerals();
  const [showMenu, setShowMenu] = useState(false);

  const logo = general?.header?.logo?.image.url;

  return (
    <>
      <div className="fixed top-0 z-50">
        <div
          className="flex w-screen items-center justify-between px-10 max-[840px]:px-6"
          style={{
            backgroundColor: "white",
            height: "var(--app-header-height)",
          }}
        >
          <Link href={"/"}>
            <div
              style={{
                width: "150px",
                height: "80px",
              }}
              className="relative cursor-pointer"
            >
              {getFormattedImageUrl(logo) && (
                  <Image
                  src={getFormattedImageUrl(logo) ?? ""}
                  alt=""
                  layout="fill"
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                />
              )}      
            </div>
          </Link>
          <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
        {showMenu && <GeneralMenu setShowMenu={setShowMenu} />}
      </div>
    </>
  );
}
