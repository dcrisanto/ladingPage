"use client";
import { useGenerals } from "@/app/context/generals.context";
import React from "react";
import { Socials } from "../atoms/Socials";

export const Footer = () => {
  const { general } = useGenerals(); // 🔹 Obtenemos multilanguage desde el contexto
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="contact__info">
          <a
            href={`${general.map_url}`}
            target="_blank"
            className="address__contact"
          >
            <i className="contact__item-link-icon icon icon-location" />
            {general.address}
          </a>
          <a href={`tel:${general.phone}`} className="phone__contact">
            <i className="contact__item-link-icon icon icon-phone" />
            {general.phone}
          </a>
          <a
            href={`mailto:${general.email}`}
            target="_blank"
            className="email__contact"
          >
            <i className="contact__item-link-icon icon icon-mail" />
            {general.email}
          </a>
        </div>
        <ul className="container__socials">
          <li>
            <Socials />
          </li>
        </ul>
      </div>
    </footer>
  );
};
