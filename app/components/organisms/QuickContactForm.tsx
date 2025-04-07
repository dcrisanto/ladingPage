"use client";

import { useGenerals } from "@/app/context/generals.context";
import Marker from "@/app/icons/Marker";
import Phone from "@/app/icons/Phone";
import { cn } from "@/app/utils";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/Dropdown";

export default function QuickContactForm() {
  const { home, general } = useGenerals();
  const contactSection = home?.contact;
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [notes, setNotes] = useState("");
  const fields = home?.quoteRequestForm?.fields;

  const services = [
    {
      title: "Office Cleaning",
      id: "Office Cleaning",
    },
    {
      title: "Restroom Cleaning",
      id: "Restroom Cleaning",
    },
    {
      title: "Common Area Cleaning",
      id: "Common Area Cleaning",
    },
    {
      title: "Deep Cleaning",
      id: "Deep Cleaning",
    },
    {
      title: "Post-Event Cleaning",
      id: "Post-Event Cleaning",
    },
    {
      title: "Advanced Sanitization & Disinfection",
      id: "Advanced Sanitization & Disinfection",
    },
    {
      title: "Office Plant Care",
      id: "Office Plant Care",
    },
  ];

  const getSelectedService = () => {
    if (!selectedService) return fields?.service?.placeholder ?? "";
    const index = services.findIndex((item) => item.id === selectedService);
    if (index === -1) return fields?.service?.placeholder ?? "";
    return services[index].title;
  };

  const selectService = (service: any) => {
    setSelectedService(service.id);
    setIsOpenDropdown(false);
  };

  return (
    <div
      id="contact-us"
      className="bg-[#1a3666] px-28 py-16 max-xl:px-16 max-[1100px]:px-8 max-[900px]:px-6"
    >
      <div
        className="grid max-[800px]:block"
        style={{
          gridTemplateColumns: "1fr 1.5fr",
        }}
      >
        <div
          className="bg-[#2F62AD] px-12 pb-[140px] pt-[140px] max-[900px]:px-6 max-[900px]:pb-[50px] max-[900px]:pt-[50px]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 8%)",
          }}
        >
          <p className="mb-[35px] text-3xl font-semibold text-white max-[900px]:mb-[20px] max-[900px]:text-center max-[900px]:text-2xl">
            {contactSection?.title ?? ""}
          </p>
          <p className="font-extralight text-white max-[900px]:text-center">
            {contactSection?.description ?? ""}
          </p>
          <div className="mb-8 mt-[30px] flex items-center gap-8">
            <div className="flex h-[50px] w-[50px] items-center justify-center border border-solid border-white">
              <Phone />
            </div>
            <p className="font-medium text-white">{general?.phone ?? ""}</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex h-[50px] w-[50px] items-center justify-center border border-solid border-white">
              <Marker />
            </div>
            <p className="font-medium text-white">
              {contactSection?.location ?? ""}
            </p>
          </div>
        </div>
        <div
          className="bg-white px-12 pt-[80px] max-[900px]:px-6 max-[900px]:pt-[50px]"
          style={{
            clipPath: "polygon(100% 0, 100% 96%, 93% 100%, 0 100%, 0 0)",
          }}
        >
          <p className="mb-[35px] text-3xl font-medium text-[#1A3666] max-[900px]:text-center max-[900px]:text-2xl">
            Quick Contact Form
          </p>
          <div className="grid grid-cols-2 gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                {fields?.name?.label}
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder={fields?.name?.placeholder}
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                {fields?.email?.label}
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder={fields?.email?.placeholder}
                value={phone}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-[30px] grid grid-cols-2 gap-10 max-[900px]:mt-[20px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                {fields?.phone?.label}
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder={fields?.phone?.placeholder}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                {fields?.service?.label}
              </p>
              <DropdownMenu
                open={isOpenDropdown}
                onOpenChange={setIsOpenDropdown}
              >
                <DropdownMenuTrigger
                  asChild
                  onClick={() => {
                    setIsOpenDropdown(true);
                  }}
                >
                  <div className="flex w-full cursor-pointer items-center justify-start border-[1px] border-[#2F62AD] pr-2 transition-all duration-300 hover:bg-[rgba(0,0,0,0.1)]">
                    <p className="flex h-[42px] flex-1 flex-col justify-center px-3 font-extralight text-[#2F62AD]">
                      {getSelectedService()}
                    </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="border-radius-[10px] overflow-y-auto bg-[#F1F7FF] p-0"
                >
                  {services.map((service, index) => (
                    <div
                      onClick={() => selectService(service)}
                      key={index}
                      className="cursor-pointer bg-[#F1F7FF] px-3 py-3 hover:bg-[rgba(155,155,155,0.2)]"
                    >
                      <p className="text-sm font-extralight text-[#2F62AD]">
                        {service.title}
                      </p>
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-[30px] max-[900px]:mt-[20px]">
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                {fields?.notes?.label}
              </p>
              <textarea
                className={cn(
                  "h-[100px] w-full resize-none border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder={fields?.notes?.placeholder}
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-[30px] flex items-center justify-start pb-[30px] max-[900px]:mt-[20px] max-[900px]:w-full max-[900px]:pb-[60px]">
            <div className="flex h-[40px] w-[320px] items-center justify-center bg-[#2F62AD] max-[900px]:w-full">
              <p className="font-medium text-white">Send</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
