import React from "react";

export default function Navbar() {
  const options = [
    {
      title: "Home",
      id: "#home",
    },
    {
      title: "Services",
      id: "#services",
    },
    {
      title: "About Us",
      id: "#about-us",
    },
    {
      title: "Proyects",
      id: "#proyects",
    },
    {
      title: "Contact Us",
      id: "#contact-us",
    },
  ];

  return (
    <div className="flex items-center justify-between gap-12" style={{}}>
      {options.map((option, index) => (
        <div
          key={index}
          className="cursor-pointer font-light text-primary transition-all duration-300 hover:font-medium"
        >
          {option.title}
        </div>
      ))}
    </div>
  );
}
