"use client";

import CalendarClock from "@/app/icons/CalendarClock";
import Cellphone from "@/app/icons/Cellphone";
import SimpleStart from "@/app/icons/SimpleStart";
import SquareChevronDown from "@/app/icons/SquareChevronDown";
import { cn } from "@/app/utils";
import React, { useState } from "react";
import DatePickermodal from "../../organisms/DatePickermodal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/Dropdown";

export default function Form() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    if (!selectedService) return "Select a service";
    const index = services.findIndex((item) => item.id === selectedService);
    if (index === -1) return "Select a service";
    return services[index].title;
  };

  const selectService = (service: any) => {
    setSelectedService(service.id);
    setIsOpenDropdown(false);
  };

  const getSelectedDate = () => {
    return "Select Preferred Date & Time";
  };

  console.log({ showDatePickerModal });

  return (
    <>
      <div className="flex items-center justify-center py-8 max-[900px]:justify-start max-[900px]:bg-[#2F62AD] max-[900px]:py-0">
        <div className="w-full bg-white px-8 py-8 max-[900px]:mx-6 max-[900px]:mb-[25px] max-[900px]:px-6">
          <div className="flex items-center justify-start">
            <p className="flex-1 text-[26px] font-semibold text-[#1A3666]">
              Get a free quote today!
            </p>
            <SimpleStart />
          </div>
          <div className="mb-[18px] mt-[15px] flex items-start justify-start gap-3">
            <div className="mt-[7px]">
              <Cellphone />
            </div>
            <p className="flex-1 font-extralight text-[#1A3666]">
              Call us at <span className="font-medium">(650) 546-1965</span> or
              fill out our quick form below:
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">Company Name</p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter company name"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">Email</p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">Phone Number</p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">Services</p>
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
                    <SquareChevronDown />
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
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">
                Preferred Date & Time
              </p>
              <div
                onClick={() => setShowDatePickerModal(true)}
                className="flex w-full cursor-pointer items-center justify-start border-[1px] border-[#2F62AD] pr-2 transition-all duration-300 hover:bg-[rgba(0,0,0,0.1)]"
              >
                <p className="flex h-[42px] flex-1 flex-col justify-center px-3 font-extralight text-[#2F62AD]">
                  {getSelectedDate()}
                </p>
                <CalendarClock />
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="flex h-[40px] w-full items-center justify-center bg-[#2F62AD]">
                <p className="text-sm font-medium text-white">Send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DatePickermodal
        isVisible={showDatePickerModal}
        setIsVisible={setShowDatePickerModal}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
}
