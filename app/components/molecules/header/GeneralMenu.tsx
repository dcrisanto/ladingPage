import { useGenerals } from "@/app/context/generals.context";
import { cn } from "@/app/utils";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GeneralMenu({ setShowMenu }: Props) {
  const { general } = useGenerals();
  const navigation = general?.header?.navigation ?? [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col border border-solid border-black bg-white"
      style={{ height: "calc(100vh - var(--app-header-height))" }}
    >
      {navigation.map((option: any, index) => (
        <Link
          key={index}
          href={option.href ?? ""}
          onClick={() => setShowMenu(false)}
        >
          <div
            key={index}
            className={cn(
              "group flex flex-row items-center justify-start border-b-[0.5px] border-b-white pr-4 transition-all hover:bg-[#2F62AD]",
              index < navigation.length - 1 && "border-b border-b-black",
            )}
          >
            <p className="flex-1 cursor-pointer px-4 py-4 text-base font-light text-[#2F62AD] transition-all group-hover:text-white">
              {option.text}
            </p>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}
