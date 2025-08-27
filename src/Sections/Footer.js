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
    <div className="absolute bottom-0 left-0 right-0 py-6">
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
      <div className="text-center text-white/80 text-xs md:text-sm mt-4">
        Copyright © 2025 Admire Advertising, All Rights Reserved.
      </div>
    </div>
  );
}

function SocialBar() {
  const socials = [
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com" },
    { icon: <FaFacebookF size={20} />, url: "https://www.facebook.com" },
    { icon: <FaTiktok size={20} />, url: "https://www.tiktok.com" },
    { icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com" },
  ];

  return (
    <div className="flex justify-start gap-4 mt-6 ml-6">
      {socials.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 rounded-full p-3 flex items-center justify-center"
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
      <div className="relative overflow-hidden min-h-[360px] md:pb-44 px-4">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#ced1d2_0%,#aeb1b2_33%,#6a6d6e_66%,#1b1c1d_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_10%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0))]" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md text-center md:text-left md:ml-40 mt-16">
            <div>
              <img
                src={logo}
                alt="AD Drive Logo"
                width={300}
                height={80}
                className="mx-auto md:mx-0 object-contain mb-6"
              />
            </div>
            <div className="mb-6 -space-y-8">
              <ContactRow
                src={locationIcon}
                label="Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street"
              />
              <ContactRow
                src={phone}
                label="LEB +961 4 444107 - +961 70 777013 CYP +357 94 087 777"
              />
              <div className="ml-12">
              <SocialBar />
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center md:mr-28">
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