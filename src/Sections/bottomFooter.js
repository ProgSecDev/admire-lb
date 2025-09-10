// src/Sections/BottomFooter.js
import React from "react";
import lebanonflag from "../assets/Flags-and-Icons/lebanon-01.png";
import cyrusflag from "../assets/Flags-and-Icons/cyprus-01.png";
import dubaiflag from "../assets/Flags-and-Icons/dubai-01.png";
import qatarflag from "../assets/Flags-and-Icons/qatar-01.png";
import saudiflag from "../assets/Flags-and-Icons/saudi-01.png";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const BottomFooter = () => {
  const flags = [
    { src: lebanonflag},
    { src: cyrusflag},
    { src: dubaiflag},
    { src: qatarflag},
    { src: saudiflag},
  ];

  const socials = [
    { icon: <FaInstagram size={20} />, url: "#" },
    { icon: <FaFacebookF size={20} />, url: "#" },
    { icon: <FaTiktok size={20} />, url: "#" },
    { icon: <FaLinkedinIn size={20} />, url: "#" },
  ];

  return (
    <div className="bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Row: Socials (left) + Flags (center) */}
        <div className="flex items-center justify-between">
          {/* Social Media Icons - left */}
          <div className="flex gap-3">
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

          {/* Flags - centered with equal spacing */}
          <div className="flex justify-center space-x-1 flex-1 mr-20">
            {flags.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={f.src}
                  alt={f.label}
                  className="h-20 md:h-20 w-auto object-contain items-center"
                />
                <span className="text-xs mt-2">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Spacer to balance layout */}
          <div className="w-28 md:w-40" />
        </div>

        {/* Copyright - centered below */}
        <div className="text-center text-gray-400 text-sm">
          Copyright © 2025 Admire Advertising, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
