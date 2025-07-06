import React from "react";
import logo from "../assets/Logos-and-Favicons/admire-logo-1.png";
import qrCode from "../assets/Footer/qrcode.png";
import artwork from "../assets/Footer/image.png";

const Footer = () => {
  return (
    <footer className="bg-[#eff0f2] p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-6 max-w-md text-center md:text-left md:ml-40">
          <div>
            <img
              src={logo}
              alt="AD Drive Logo"
              width={300}
              height={80}
              className="mx-auto md:mx-0 mb-2 object-contain"
            />
            <p className="text-sm font-light">Advertising Agency</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm">
              📍 <span className="font-medium">Antelias - Lebanon</span>
            </p>
            <p className="text-sm">
              St. Nicolas center, 6th floor - Sawma Jaber street
            </p>
            <p className="text-sm text-gray-700">
              ☎️ +961 4 444107 - +961 70 777013
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 mr-28">
          <img
            src={qrCode}
            alt="QR Code"
            width={100}
            height={100}
            className="object-contain"
          />
          <img
            src={artwork}
            alt="Art Illustration"
            width={300}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
