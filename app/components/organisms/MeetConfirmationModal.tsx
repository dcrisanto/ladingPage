import CircleCheck from "@/app/icons/CircleCheck";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/Dialog";

interface Props {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MeetConfirmationModal({
  isVisible,
  setIsVisible,
}: Props) {
  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent className="w-[350px] gap-0 border-none bg-white px-0 py-0 pb-[30px]">
        <DialogTitle></DialogTitle>
        <div className="mb-[18px] flex items-center justify-center bg-[#1a3666] py-8">
          <CircleCheck />
        </div>
        <p className="mt-[10px] text-center text-lg font-semibold text-[#2f62ad]">
          Thank you!
        </p>
        <p className="mb-[15px] mt-[8px] text-center text-base font-extralight text-[#2f62ad]">
          We will contact you soon.
        </p>
        <div className="flex items-center justify-center">
          <div
            className="mt-[10px] flex h-[40px] cursor-pointer items-center justify-center border border-solid border-[#2f62ad] bg-[white] px-8"
            onClick={() => setIsVisible(false)}
          >
            <p className="text-sm font-extralight text-[#2f62ad]">Close</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
