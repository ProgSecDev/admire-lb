import React from "react";
import logo from "../assets/Logos-and-Favicons/WHITE LOGO-01.png";
import qrCode from "../assets/Footer/QR-01.png";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phone from "../assets/Flags-and-Icons/phone-01.svg";
import backgroundImage from "../assets/Home/main-page-01.jpg";
import lebanonflag from "../assets/Flags-and-Icons/lebanon-01.png";
import cyrusflag from "../assets/Flags-and-Icons/cyprus-01.png";
import dubaiflag from "../assets/Flags-and-Icons/dubai-01.png";
import qatarflag from "../assets/Flags-and-Icons/qatar-01.png";
import saudiflag from "../assets/Flags-and-Icons/saudi-01.png";

function ContactRow({ src, label }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm whitespace-nowrap">
      <img alt={label} src={src} className="h-14 w-auto md:h-16" />
      <span className="font-medium text-lg text-white">{label}</span>
    </div>
  );
}

function FlagsBar({ sizeClass = "h-16 w-16 md:h-24 md:w-20 gap-1" }) {
  const flags = [
    { src: lebanonflag, label: "" },
    { src: cyrusflag, label: "" },
    { src: dubaiflag, label: "" },
    { src: qatarflag, label: "" },
    { src: saudiflag, label: "" },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-6">
      <ul className="flex justify-center items-end gap-0">
        {flags.map((f, idx) => (
          <li key={`flag-${idx}`} className="flex flex-col items-center gap-2">
            <img
              src={f.src}
              alt={f.label}
              className={`${sizeClass} object-contain drop-shadow`}
            />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white/90">
              {f.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-center text-white/80 text-xs md:text-sm">
        Copyright © 2025 Admire Advertising, All Rights Reserved.
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="relative">
      <div
        className="md:pb-44 px-4 bg-fixed bg-center bg-cover relative min-h-[360px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md text-center md:text-left md:ml-40">
            <div>
              <img
                src={logo}
                alt="AD Drive Logo"
                width={300}
                height={80}
                className="mx-auto md:mx-0 -mb-14 object-contain"
              />
            </div>
            <div className="mb-6 -space-y-8">
              <ContactRow
                src={locationIcon}
                label="Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street"
              />
              <ContactRow
                src={phone}
                label="LEB +961 4 444107 - +961 70 777013   CYP +357 94 087 777"
              />
            </div>
          </div>

          <div className="flex items-center md:mr-28">
            <img
              src={qrCode}
              alt="QR Code"
              width={250}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        <FlagsBar sizeClass="h-16 w-16 md:h-20 md:w-20" />
      </div>
    </footer>
  );
};

export default Footer;
