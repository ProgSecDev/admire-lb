import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logos-and-Favicons/admire-logo-1.png";
import fbicon from "../assets/Flags-and-Icons/fb-01.svg";
import instaicon from "../assets/Flags-and-Icons/insta-01.svg";
import tiktokicon from "../assets/Flags-and-Icons/tiktok-01.svg";
import linkedinicon from "../assets/Flags-and-Icons/LINKED-IN-01.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  const openMenu = () => {
    setMenuVisible(true);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 250);
  };

  const toggleMenu = () => {
    (isMenuOpen ? closeMenu : openMenu)();
  };

  useEffect(() => {
    if (isMenuOpen) closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const onClick = (e) => {
      if (!menuVisible) return;
      const t = e.target;
      if (
        menuRef.current &&
        !menuRef.current.contains(t) &&
        triggerRef.current &&
        !triggerRef.current.contains(t)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuVisible]);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/brands", label: "Brands Who Trust Us" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/photography", label: "Photography" },
  ];

  const socials = [
    { href: "https://www.instagram.com/yourhandle", src: instaicon, label: "Instagram" },
    { href: "https://www.facebook.com/yourpage", src: fbicon, label: "Facebook" },
    { href: "https://www.tiktok.com/@yourhandle", src: tiktokicon, label: "TikTok" },
    { href: "https://www.linkedin.com/company/yourcompany", src: linkedinicon, label: "LinkedIn" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6 py-3 sm:py-4"
          role="navigation"
          aria-label="Main"
        >
          {/* left: logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="block" aria-label="Go to home">
              <img
                src={logo}
                alt="Admire Advertising Agency logo"
                className="h-12 sm:h-16 sm:ml-40 lg:ml-16 object-contain select-none"
                draggable={false}
              />
            </Link>
          </div>

          {/* center: social icons (render images as-is) */}
{/* center: social icons (render images centered in fixed squares) */}
<div className="hidden md:flex justify-center">
  <ul className="flex items-center gap-6">
    {socials.map(({ href, src, label }, idx) => (
      <li key={`${label}-${idx}`} className="list-none">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex h-20 w-20 items-center justify-center"
        >
          <img
            src={src}
            alt=""
            className="max-h-full max-w-full object-contain select-none"
            draggable={false}
          />
        </a>
      </li>
    ))}
  </ul>
</div>



          {/* right: circular hamburger */}
          <div className="flex items-center justify-end">
            <button
              ref={triggerRef}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="lg:mr-40 h-12 w-12 sm:h-12 sm:w-12 rounded-full bg-pink-600 text-white grid place-items-center shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 active:scale-[0.98] transition"
            >
              <span
                className={`block text-2xl leading-none transition-transform duration-200 ${
                  isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {isMenuOpen ? "×" : "≡"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* dropdown menu */}
      {menuVisible && (
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div
            ref={menuRef}
            className={`absolute right-0 sm:right-2 mt-3 sm:mt-2 z-40 ${
              isMenuOpen ? "animate-menu-in" : "animate-menu-out"
            }`}
          >
            <div className="flex flex-col items-end gap-3 font-semibold">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className="w-56 h-12 flex items-center justify-center rounded-full border border-pink-500 bg-pink-50 hover:bg-pink-100 text-pink-700 text-base text-center transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes menu-in {
          0% { opacity: 0; transform: translateX(16px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes menu-out {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(16px); }
        }
        .animate-menu-in { animation: menu-in 0.25s ease-out forwards; }
        .animate-menu-out { animation: menu-out 0.25s ease-in forwards; }
      `}</style>
    </nav>
  );
}

export default Nav;