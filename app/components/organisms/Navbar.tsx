import { useGenerals } from "@/app/context/generals.context";
import CloseIcon from "@/app/icons/CloseIcon";
import MenuIcon from "@/app/icons/Menu";
import Link from "next/link";
import React from "react";

interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}

interface NavItem {
  href: string,
  isExternal: boolean,
  text: string
}

export default function Navbar({ setShowMenu, showMenu }: Props) {
  const { general } = useGenerals();
  const navigation = general?.header?.navigation ?? [];

  console.log(general);
  

  return (
    <>
      <div
        className="flex items-center justify-between gap-12 max-lg:gap-8 max-md:hidden"
        style={{}}
      >
        {navigation.map((option: NavItem, index) => (
          <Link key={index} href={option.href ?? ""}>
            <div
              key={index}
              className="cursor-pointer font-light text-primary transition-all duration-300 hover:font-medium"
            >
              {option?.text}
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
