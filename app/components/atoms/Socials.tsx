"use client"
import { useGenerals } from "@/app/context/generals.context";


export const Socials = () => {
  const { general } = useGenerals();
  console.log(JSON.stringify(general));
    
  return (
    <div className="container__socials">
      {general.social_networks.map(({ type, url }, i: number) => (
        <div
          key={i}
          className="socials__item"
        >
          <a
            className={`socials__item-link ${
              !url ? "pointer-events-none" : ""
            }`}
            href={url ? url : "#"}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`socials__item-link-icon icon icon-${type} `} />
          </a>
        </div>
      ))}
    </div>
  );
};

