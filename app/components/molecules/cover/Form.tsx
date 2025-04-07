"use client";

import { useGenerals } from "@/app/context/generals.context";
import CalendarClock from "@/app/icons/CalendarClock";
import Cellphone from "@/app/icons/Cellphone";
import SimpleStart from "@/app/icons/SimpleStart";
import SquareChevronDown from "@/app/icons/SquareChevronDown";
import { cn, validationEmail } from "@/app/utils";
import React, { useState } from "react";
import DatePickermodal from "../../organisms/DatePickermodal";
import MeetConfirmationModal from "../../organisms/MeetConfirmationModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/Dropdown";

export default function Form() {
  const { home, general } = useGenerals();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [formError, setFormError] = useState<any>({});
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

  const getSelectedDate = () => {
    return fields?.preferredDateTime?.placeholder ?? "";
  };

  const sendInformation = () => {
    let errors: any = {};
    if (!company) {
      errors.company = true;
      errors.companyMessage = "The company name is mandatory";
    } else if (!email) {
      errors.email = true;
      errors.emailMessage = "The email is mandatory";
    } else if (!validationEmail(email?.trim())) {
      errors.email = true;
      errors.emailMessage = "The email is invalid";
    } else if (!phone) {
      errors.phone = true;
      errors.phoneMessage = "The phone number is mandatory";
    } else if (!selectedService) {
      errors.service = true;
      errors.serviceMessage = "Select a service";
    } else {
      setShowConfirmationModal(true);
    }
    setFormError(errors);
  };

  return (
    <>
      <div className="flex items-center justify-center py-8 max-[900px]:justify-start max-[900px]:bg-[#2F62AD] max-[900px]:py-0">
        <div className="w-full bg-white px-8 py-8 max-[900px]:mx-6 max-[900px]:mb-[25px] max-[900px]:px-6">
          <div className="flex items-center justify-start">
            <p className="flex-1 text-[26px] font-semibold text-[#1A3666]">
              {home?.quoteRequestForm?.title ?? ""}
            </p>
            <SimpleStart />
          </div>
          <div className="mb-[18px] mt-[15px] flex items-start justify-start gap-3">
            <div className="mt-[7px]">
              <Cellphone />
            </div>
            <p className="flex-1 font-extralight text-[#1A3666]">
              Call us at <span className="font-medium">{general?.phone}</span>{" "}
              or fill out our quick form below:
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">
                {fields?.name?.label}
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                  formError?.company && "border-red-500",
                )}
                placeholder={fields?.name?.placeholder}
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
              {formError.company && formError.companyMessage && (
                <p className="mt-1 text-xs text-red-500">
                  {formError?.companyMessage}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">
                {fields?.email?.label}
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                  formError?.email && "border-red-500",
                )}
                placeholder={fields?.email?.placeholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {formError.email && formError.emailMessage && (
                <p className="mt-1 text-xs text-red-500">
                  {formError?.emailMessage}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">
                {fields?.phone?.label}
              </p>
              <input
                className={cn(
                  "w-full border-[1px] border-[#2F62AD] bg-transparent px-3 py-2 font-extralight text-[#2F62AD] outline-none placeholder:text-sm placeholder:font-extralight placeholder:text-[#2F62AD]",
                  formError?.phone && "border-red-500",
                )}
                placeholder={fields?.phone?.placeholder}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {formError.phone && formError.phoneMessage && (
                <p className="mt-1 text-xs text-red-500">
                  {formError?.phoneMessage}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">
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
                  <div
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-start border-[1px] border-[#2F62AD] pr-2 transition-all duration-300 hover:bg-[rgba(0,0,0,0.1)]",
                      formError?.service && "border-red-500",
                    )}
                  >
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
              {formError.service && formError.serviceMessage && (
                <p className="mt-1 text-xs text-red-500">
                  {formError?.serviceMessage}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-[#2F62AD]">
                {fields?.preferredDateTime?.label}
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
              <div
                className="flex h-[40px] w-full cursor-pointer items-center justify-center bg-[#2F62AD]"
                onClick={sendInformation}
              >
                {loading ? (
                  <></>
                ) : (
                  <p className="text-sm font-medium text-white">Send</p>
                )}
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
      <MeetConfirmationModal
        isVisible={showConfirmationModal}
        setIsVisible={setShowConfirmationModal}
      />
    </>
  );
}
