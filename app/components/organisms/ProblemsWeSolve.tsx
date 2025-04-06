import { EqualIcon } from "@/app/icons/Equal";
import Star from "@/app/icons/Star";
import React from "react";

function ProblemsWeSolve() {
  const options = [
    {
      title: "Messy Workspaces",
      text: "Reduced Productivity",
      description:
        "A cluttered office can distract employees and lower efficiency. Our cleaning services create an organized, stress-free environment where teams can focus and thrive.",
    },
    {
      title: "Bacteria & Allergens",
      text: "More Sick Days",
      description:
        "Unclean offices are a breeding ground for germs, leading to employee absences and decreased morale. We use hospital-grade sanitization to ensure a healthier workforce.",
    },
    {
      title: "First Impressions Matter",
      description:
        "A dirty or unkempt office sends the wrong message to clients and partners. We help businesses project professionalism and excellence with spotless spaces",
    },
  ];

  return (
    <div className="mb-10">
      <div className="relative">
        <div
          className="absolute top-0 h-[140px] w-full bg-[#2f62ad1f] max-[900px]:hidden"
          style={{
            clipPath: "polygon(0 0, 0% 100%, 57% 0)",
          }}
        >
          <div className="h-[40px] w-[40px]">
            <Star height={90} width={90} />
          </div>
        </div>
        <div
          className="absolute top-0 hidden h-[100px] w-full bg-[#2f62ad1f] max-[900px]:block"
          style={{
            clipPath: "polygon(0 0, 0% 100%, 57% 0)",
          }}
        >
          <div className="h-[60px] w-[60px]">
            <Star height={60} width={60} />
          </div>
        </div>
        <div className="pt-20">
          <p className="mb-12 text-center text-3xl font-semibold text-[#1A3666] max-[900px]:mb-4 max-[900px]:text-2xl">
            The Problems We Solve
          </p>
        </div>
      </div>
      <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 grid grid-cols-3 gap-10 px-28 max-xl:gap-8 max-xl:px-16 max-[1100px]:gap-6 max-[1100px]:px-10 max-[900px]:flex max-[900px]:flex-row max-[900px]:overflow-x-auto max-[900px]:px-6 max-[900px]:py-6">
        {options.map((option, index) => (
          <div
            key={index}
            className="px-6 pb-7 pt-8 max-[900px]:min-w-[100%]"
            style={{
              boxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
              WebkitBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
              MozBoxShadow: "0px 0px 6px -2px rgba(0,0,0,0.72)",
            }}
          >
            <div className="border-b-solid mb-4 flex items-center justify-center gap-4 border-b-[2px] border-b-[#2F62AD] pb-4">
              <div className="flex items-center justify-center">
                <p className="text-center text-lg font-medium text-primary">
                  {option.title}
                </p>
              </div>
              {option?.text && (
                <div className="flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full bg-primary">
                  <EqualIcon />
                </div>
              )}
              {option?.text && (
                <div className="flex items-center justify-center text-center">
                  <p className="font-medium text-primary">{option.text}</p>
                </div>
              )}
            </div>
            <p className="text-center font-light text-[#1A3666]">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemsWeSolve;
