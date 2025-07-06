import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logos and Favicons/admire-logo-1.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-16 sm:h-20 object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          {/* <button className="px-5 py-3 border border-pink-500 text-pink-600 rounded-full text-base hover:bg-pink-50">
            Get In Touch
          </button>
          <button className="px-5 py-3 bg-pink-600 text-white rounded-full text-base hover:bg-pink-700">
            Request A Quote
          </button> */}
          <button className="text-black text-3xl transition-transform duration-300" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="rotate-animation inline-block">&times;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-6 mt-4 bg-transparent p-2 z-40">
          <div className="flex flex-col items-end space-y-3 text-pink-700 font-semibold animate-fade-in-right">
            <Link to="/home" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-200" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about-us" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-200" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/brands" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-200" onClick={() => setIsMenuOpen(false)}>
              Brands Who Trust Us
            </Link>
            <Link to="/portfolio" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-100" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/services" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-100" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/careers" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-100" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/photography" className="border border-pink-500 rounded-full px-5 py-3 text-base bg-pink-100 hover:bg-pink-100" onClick={() => setIsMenuOpen(false)}>
              Photography
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.3s ease-out forwards;
        }

        @keyframes rotateIn {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: rotate(180deg);
            opacity: 1;
          }
        }
        .rotate-animation {
          animation: rotateIn 0.4s ease forwards;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
