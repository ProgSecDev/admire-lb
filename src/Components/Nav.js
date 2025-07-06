import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logos and Favicons/admire-logo-1.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 300); // Match CSS animation duration
  };

  const toggleMenu = () => {
    isMenuOpen ? closeMenu() : openMenu();
  };

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
          <button
            className="text-black text-3xl transition-transform duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <span className="rotate-animation inline-block">&times;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {menuVisible && (
        <div className="absolute right-6 mt-4 bg-transparent p-2 z-40">
          <div
            className={`flex flex-col items-end space-y-3 text-pink-700 font-semibold ${
              isMenuOpen ? "animate-fade-in-right" : "animate-fade-out-left"
            }`}
          >
            {[
              { to: "/home", label: "Home" },
              { to: "/about-us", label: "About Us" },
              { to: "/brands", label: "Brands Who Trust Us" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/services", label: "Services" },
              { to: "/careers", label: "Careers" },
              { to: "/photography", label: "Photography" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className="w-48 h-12 flex items-center justify-center border border-pink-500 rounded-full bg-pink-100 hover:bg-pink-200 text-base text-center"
              >
                {label}
              </Link>
            ))}
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

        @keyframes fade-out-left {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-20px);
          }
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.3s ease-out forwards;
        }

        .animate-fade-out-left {
          animation: fade-out-left 0.3s ease-out forwards;
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
