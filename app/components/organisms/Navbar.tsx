import CloseIcon from "@/app/icons/CloseIcon";
import MenuIcon from "@/app/icons/Menu";
import Link from "next/link";
import React, { useState } from "react";
import GeneralMenu from "../molecules/header/GeneralMenu";

interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}

export default function Navbar({ setShowMenu, showMenu }: Props) {
  const options = [
    {
      title: "Home",
      id: "",
    },
    {
      title: "Services",
      id: "#services",
    },
    {
      title: "About Us",
      id: "#about-us",
    },
    {
      title: "Proyects",
      id: "#proyects",
    },
    {
      title: "Contact Us",
      id: "#contact-us",
    },
  ];

  return (
    <>
      <div
        className="flex items-center justify-between gap-12 max-lg:gap-8 max-md:hidden"
        style={{}}
      >
        {options.map((option, index) => (
          <Link key={index} href={option.id}>
            <div
              key={index}
              className="cursor-pointer font-light text-primary transition-all duration-300 hover:font-medium"
            >
              {option.title}
            </div>
          </Link>
        ))}
      </div>
      <div
        className="hidden cursor-pointer max-md:block"
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? <MenuIcon /> : <CloseIcon />}
      </div>
    </>
  );
}
