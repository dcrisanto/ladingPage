"use client";

import { useGenerals } from "@/app/context/generals.context";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/images/logo.png";
import GeneralMenu from "../molecules/header/GeneralMenu";
import Navbar from "../organisms/Navbar";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

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
              className="cursor-pointer"
            >
              <Image
                src={logo}
                alt=""
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </Link>
          <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
        {showMenu && <GeneralMenu setShowMenu={setShowMenu} />}
      </div>
    </>
  );
}
