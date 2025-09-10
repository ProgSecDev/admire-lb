// src/Sections/Footer.js
import React from "react";
import logo from "../assets/Logos-and-Favicons/admire-logo-1.png";
import qrCode from "../assets/Footer/QR-01.png";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phone from "../assets/Flags-and-Icons/phone-01.svg";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Blur top overlay */}
      <div className="absolute top-8 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none" />

      {/* Main background */}
      <div className="relative bg-gradient-to-b from-gray-300 via-gray-500 to-black px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Left: Logo + Info */}
          <div className="flex-1 text-left">
            <img src={logo} alt="Admire Logo" className="w-56 mb-2" />

            <div className="-space-y-6">
              <div className="flex items-center gap-3">
                <img src={locationIcon} alt="Location" className="h-16 mt-1" />
                <p className="text-base md:text-lg leading-snug">
                  Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src={phone} alt="Phone" className="h-16 mt-1" />
                <p className="text-base md:text-lg leading-snug">
                  LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp; CYP +357 94 087 777
                </p>
              </div>
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img src={qrCode} alt="QR Code" className="w-32 md:w-44" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
