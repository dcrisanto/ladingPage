"use client";

import Cellphone from "@/app/icons/Cellphone";
import SimpleStart from "@/app/icons/SimpleStart";
import { cn } from "@/app/utils";
import React, { useState } from "react";

export default function Form() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex items-center justify-center py-8 max-[900px]:justify-start max-[900px]:bg-[#2F62AD] max-[900px]:py-0">
      <div className="w-full bg-white px-8 py-8 max-[900px]:mx-6 max-[900px]:mb-[25px]">
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
            <input
              className={cn(
                "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
              )}
              placeholder="Select a service"
              value={phone}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-light text-[#2F62AD]">
              Preferred Date & Time
            </p>
            <input
              className={cn(
                "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
              )}
              placeholder="Select a service"
              value={phone}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-start">
            <div className="flex h-[40px] w-full items-center justify-center bg-[#2F62AD]">
              <p className="text-sm font-medium text-white">Send</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
