import CalendarIcon from "@/app/icons/Calendar";
import Clock from "@/app/icons/Clock";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { ActiveModifiers } from "react-day-picker";
import { Calendar } from "../ui/Calendar";
import { Dialog, DialogContent } from "../ui/Dialog";

interface Props {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

function DatePickermodal({
  isVisible,
  setIsVisible,
  selectedDate,
  setSelectedDate,
}: Props) {
  const [hour, setHour] = useState(8);
  const [minute, setMinute] = useState(0);
  const [amPm, setAmPm] = useState<"AM" | "PM">("AM");
  const [newSelectedDate, setNewSelectedDate] = useState(
    selectedDate ?? new Date(),
  );

  const handleArrow = (
    type: "hour" | "minute" | "ampm",
    direction: "up" | "down",
  ) => {
    if (type === "hour") {
      setHour((prev) =>
        direction === "up"
          ? prev === 12
            ? 1
            : prev + 1
          : prev === 1
            ? 12
            : prev - 1,
      );
    } else if (type === "minute") {
      setMinute((prev) => {
        if (direction === "up") {
          return prev === 90 ? 0 : prev + 30;
        } else {
          return prev === 0 ? 90 : prev - 30;
        }
      });
    } else if (type === "ampm") {
      setAmPm((prev) => (prev === "AM" ? "PM" : "AM"));
    }
  };

  const renderSpinner = (
    label: string,
    value: number | string,
    onUp: () => void,
    onDown: () => void,
  ) => (
    <div className="flex w-20 flex-col items-center bg-[#2f62ad0d] py-2">
      <button onClick={onUp} className="font-bold hover:text-indigo-600">
        <ChevronUp style={{ color: "#2f62ad" }} size={20} />
      </button>
      <div className="text-sm font-extralight text-[#1a3666]">
        {value.toString().padStart(2, "0")}
      </div>
      <button
        onClick={onDown}
        className="text-lg font-bold hover:text-indigo-600"
      >
        <ChevronDown style={{ color: "#2f62ad" }} size={20} />
      </button>
    </div>
  );

  const handleClick = () => {
    const date = new Date(newSelectedDate);
    let finalHour = hour;
    if (amPm === "PM" && hour !== 12) {
      finalHour += 12;
    } else if (amPm === "AM" && hour === 12) {
      finalHour = 0;
    }
    date.setHours(finalHour);
    date.setMinutes(minute);
    date.setSeconds(0);
    date.setMilliseconds(0);

    // Esto es el nuevo objeto Date con la fecha + hora
    console.log("Selected Full Date:", date);

    // Guardar la fecha en el estado original
    setSelectedDate(date);
    setIsVisible(false);
  };

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent className="w-[350px] bg-white px-4">
        <DialogTitle></DialogTitle>
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2 bg-[#1A3666] px-2 py-[1px]">
            <CalendarIcon />
            <p className="text-sm font-extralight text-white">Date</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Calendar
            fromDate={new Date()}
            mode="single"
            selected={newSelectedDate}
            defaultMonth={new Date()}
            onSelect={(
              day: Date | undefined,
              selectedDay: Date,
              activeModifiers: ActiveModifiers,
              e: React.MouseEvent<Element, MouseEvent>,
            ) => {
              setNewSelectedDate(day as Date);
            }}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2 bg-[#1A3666] px-2 py-[1px]">
            <Clock />
            <p className="text-sm font-extralight text-white">Time</p>
          </div>
        </div>

        <div className="flex justify-around">
          {renderSpinner(
            "Hora",
            hour,
            () => handleArrow("hour", "up"),
            () => handleArrow("hour", "down"),
          )}
          <div className="flex items-center text-xl">:</div>
          {renderSpinner(
            "Minutos",
            minute,
            () => handleArrow("minute", "up"),
            () => handleArrow("minute", "down"),
          )}
          {renderSpinner(
            "AM/PM",
            amPm,
            () => handleArrow("ampm", "up"),
            () => handleArrow("ampm", "down"),
          )}
        </div>

        <div className="flex items-center justify-start" onClick={handleClick}>
          <div className="flex h-[40px] w-full cursor-pointer items-center justify-center bg-[#2F62AD]">
            <p className="text-sm font-medium text-white">Save</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DatePickermodal;
