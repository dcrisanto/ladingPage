"use client";

import Marker from "@/app/icons/Marker";
import Phone from "@/app/icons/Phone";
import { cn } from "@/app/utils";
import React, { useState } from "react";

export default function QuickContactForm() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div id="contact-us" className="bg-[#1a3666] px-28 py-16">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "1fr 1.5fr",
        }}
      >
        <div
          className="bg-[#2F62AD] px-12 pb-[140px] pt-[140px]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 8%)",
          }}
        >
          <p className="mb-[35px] text-3xl font-semibold text-white">
            Contact Us
          </p>
          <p className="font-light text-white">
            Discover how our commercial cleaning solutions can enhance your
            business and create a healthier, more productive work environment!
          </p>
          <div className="mb-8 mt-[30px] flex items-center gap-8">
            <div className="flex h-[50px] w-[50px] items-center justify-center border border-solid border-white">
              <Phone />
            </div>
            <p className="font-medium text-white">(650) 546 - 1965</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex h-[50px] w-[50px] items-center justify-center border border-solid border-white">
              <Marker />
            </div>
            <p className="font-medium text-white">
              1152 70th Ave, Oakland, CA 94621
            </p>
          </div>
        </div>
        <div
          className="bg-white px-12 pt-[80px]"
          style={{
            clipPath: "polygon(100% 0, 100% 89%, 95% 100%, 0 100%, 0 0)",
          }}
        >
          <p className="mb-[35px] text-3xl font-medium text-[#1A3666]">
            Quick Contact Form
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                Company Name
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter company name"
                value={phone}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">Email</p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter email"
                value={phone}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-[30px] grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                Phone Number
              </p>
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
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                Services Needed
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter email"
                value={phone}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <div className="flex flex-col gap-2">
              <p className="text-base font-light text-[#2F62AD]">
                Additional Notes
              </p>
              <textarea
                className={cn(
                  "h-[100px] w-full resize-none border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                )}
                placeholder="Enter..."
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-[30px] flex items-center justify-start">
            <div className="flex h-[40px] w-[320px] items-center justify-center bg-[#2F62AD]">
              <p className="font-medium text-white">Send</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
