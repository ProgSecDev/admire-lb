// src/components/BottomFooter.jsx
import lebanonflag from "../assets/Flags-and-Icons/lebanon-01.png";
import cyrusflag from "../assets/Flags-and-Icons/cyprus-01.png";
import dubaiflag from "../assets/Flags-and-Icons/dubai-01.png";
import qatarflag from "../assets/Flags-and-Icons/qatar-01.png";
import saudiflag from "../assets/Flags-and-Icons/saudi-01.png";

import bgImg from "../assets/Home/main-03.jpg"; // buildings background

const BottomFooter = () => {
  const flags = [
    { label: "", src: lebanonflag },
    { label: "", src: cyrusflag },
    { label: "", src: dubaiflag },
    { label: "", src: qatarflag },
    { label: "", src: saudiflag },
  ];

  return (
    <div
      className="relative text-white bg-fixed bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* black overlay with side gaps */}
      <div
        className="
          absolute inset-y-0
          left-2 right-2 sm:left-6 sm:right-6 lg:left-12 lg:right-12
          bg-black/100
        "
      />

      {/* content inside overlay */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-2 sm:px-6 lg:px-12
          py-6
        "
      >
        {/* Flags */}
        <div className="flex flex-wrap 3xl:-ml-60 4xl:-ml-[550px]">
          {flags.map((f, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <img
                src={f.src}
                alt={f.label}
                className="h-10 md:h-12 3xl:h-16 4xl:h-20 w-auto object-contain"
              />
              <span className="text-[10px] tracking-widest text-white/90 mt-1">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-4 text-left text-xs 4xl:text-xl md:text-sm text-gray-300 4xl:-ml-[550px] 3xl:-ml-48">
          Copyright © 2025 Admire Advertising, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
