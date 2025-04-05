import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.png";
import Navbar from "../organisms/Navbar";

export default function Header() {
  return (
    <div
      className="fixed top-0 z-50 flex w-screen items-center justify-between px-10"
      style={{ backgroundColor: "white", height: "var(--app-header-height)" }}
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
      <Navbar />
    </div>
  );
}
