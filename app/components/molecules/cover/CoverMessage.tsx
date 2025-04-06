import React from "react";

function CoverMessage() {
  return (
    <div className="flex h-full flex-col justify-end">
      <div
        className="bg-primary px-12"
        style={{
          height: "calc(100% - 100px)",
          clipPath: "polygon(79% 0, 100% 18%, 100% 100%, 0 100%, 0% 50%, 0 0)",
        }}
      >
        <div className="mb-6 mt-20 flex items-center justify-start">
          <div className="bg-[#1A3666] px-4 py-[1px]">
            <p className="font-light text-white">
              Welcome to <span className="font-semibold">Brightview</span>
            </p>
          </div>
        </div>
        <p className="text-6xl font-semibold text-white">A Clean Workspace,</p>
        <p className="text-6xl font-semibold text-white">A Better Business</p>
        <p className="mt-5 text-lg font-light text-white">
          Our business deserves a space that boosts productivity, health, and
          success.
        </p>
        <p className="text-lg font-light text-white">
          At Brightview, we eliminate clutter, hidden germs, and ensure a clean,
          efficient environment
        </p>
      </div>
    </div>
  );
}

export default CoverMessage;
