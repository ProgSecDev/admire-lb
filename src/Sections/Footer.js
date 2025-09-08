import React from "react";
import logo from "../assets/Logos-and-Favicons/admire-logo-1.png";
import qrCode from "../assets/Footer/QR-01.png";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phone from "../assets/Flags-and-Icons/phone-01.svg";
import lebanonflag from "../assets/Flags-and-Icons/lebanon-01.png";
import cyrusflag from "../assets/Flags-and-Icons/cyprus-01.png";
import dubaiflag from "../assets/Flags-and-Icons/dubai-01.png";
import qatarflag from "../assets/Flags-and-Icons/qatar-01.png";
import saudiflag from "../assets/Flags-and-Icons/saudi-01.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function ContactRow({ src, label }) {
  return (
    <div className="flex items-start gap-2 text-sm text-left whitespace-normal break-words max-w-xs md:max-w-md">
      <img alt={label} src={src} className="h-6 w-6 flex-shrink-0 mt-1" />
      <span className="font-medium text-sm sm:text-base text-white leading-snug">
        {label}
      </span>
    </div>
  );
}

function FlagsBar({ sizeClass = "h-16 w-16 md:h-24 md:w-20 gap-1" }) {
  const flags = [lebanonflag, cyrusflag, dubaiflag, qatarflag, saudiflag];

  return (
    <div className="absolute bottom-0 left-0 right-0 py-6">
      <ul className="flex justify-center items-end gap-2">
        {flags.map((src, idx) => (
          <li key={`flag-${idx}`} className="flex flex-col items-center gap-1">
            <img
              src={src}
              alt=""
              className={`${sizeClass} object-contain drop-shadow`}
            />
          </li>
        ))}
      </ul>
      <div className="text-center text-white/80 text-xs md:text-sm mt-4 px-2">
        Copyright © 2025 Admire Advertising, All Rights Reserved.
      </div>
    </div>
  );
}

function SocialBar() {
  const socials = [
    { icon: <FaInstagram size={18} />, url: "https://www.instagram.com" },
    { icon: <FaFacebookF size={18} />, url: "https://www.facebook.com" },
    { icon: <FaTiktok size={18} />, url: "https://www.tiktok.com" },
    { icon: <FaLinkedinIn size={18} />, url: "https://www.linkedin.com" },
  ];

  return (
    <div className="flex gap-3 mt-4">
      {socials.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 rounded-full p-2 flex items-center justify-center"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="relative overflow-hidden min-h-[380px] md:pb-44 px-4">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#ced1d2_0%,#aeb1b2_33%,#6a6d6e_66%,#1b1c1d_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_10%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mt-12">
          {/* Left side: Logo + info */}
          <div className="flex-1 text-left md:ml-40">
            <img
              src={logo}
              alt="Admire Logo"
              className="w-48 object-contain mb-6"
            />

            <div className="flex flex-col gap-4">
              <ContactRow
                src={locationIcon}
                label="Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street"
              />
              <ContactRow
                src={phone}
                label="LEB +961 4 444107 - +961 70 777013 | CYP +357 94 087 777"
              />
              <SocialBar />
            </div>
          </div>

          {/* Right side: QR Code */}
          <div className="flex justify-center md:justify-end w-full md:w-auto md:mr-28">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-40 h-auto md:w-56 object-contain"
            />
          </div>
        </div>

        <FlagsBar sizeClass="h-12 w-12 md:h-20 md:w-20" />
      </div>
    </footer>
  );
};

export default Footer;
