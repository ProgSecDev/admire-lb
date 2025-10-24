import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logos-and-Favicons/admire-logo-1.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const navRef = useRef(null);

  const openMenu = () => {
    setMenuVisible(true);
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 250);
  };
  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

  useEffect(() => {
    closeMenu();
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

  // --- Report nav height to CSS var for layout offset (WHY: keep content below fixed header)
  useEffect(() => {
    const setNavHeightVar = () => {
      if (navRef.current) {
        const h = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--nav-h", `${h}px`);
      }
    };
    setNavHeightVar();
    window.addEventListener("resize", setNavHeightVar);
    return () => window.removeEventListener("resize", setNavHeightVar);
  }, []);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/brands", label: "Brands Who Trust Us" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/careers", label: "Careers" },
    { to: "/photography", label: "Photography" },
  ];

  const socials = [
    { icon: <FaInstagram size={18} />, url: "https://www.instagram.com/admire.lb/?hl=en", label: "Instagram" },
    { icon: <FaFacebookF size={18} />, url: "https://www.facebook.com/admire.agency", label: "Facebook" },
    { icon: <FaTiktok size={18} />, url: "#", label: "TikTok" },
    { icon: <FaLinkedinIn size={18} />, url: "https://lb.linkedin.com/in/joelle-raich-92119aa8", label: "LinkedIn" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100"
    >
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
                className="h-12 sm:h-16 mobilesm:ml-auto mobilemed:ml-auto mobilebig:ml-auto lg:ml-16 4xl:h-24 4xl:ml-24 md:ml-0 object-contain select-none"
                draggable={false}
              />
            </Link>
          </div>

          <div></div>

          {/* right: socials + hamburger */}
          <div className="flex items-center justify-end gap-20">
            <ul className="hidden md:flex items-center gap-4">
              {socials.map((s, i) => (
                <li key={i} className="list-none">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="bg-black hover:bg-pink-600 rounded-full p-3 flex items-center justify-center text-white shadow-md transition"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
            <button
              ref={triggerRef}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="lg:mr-40 xl:mr-10 h-12 w-12 sm:h-12 sm:w-12 rounded-full bg-pink-600 text-white grid place-items-center shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 active:scale-[0.98] transition"
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
                  className="lg:mr-40 xl:mr-2 w-48 h-12 flex items-center justify-center rounded-full border border-pink-500 bg-pink-50 hover:bg-pink-100 text-pink-700 text-base text-center transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        :root { --nav-h: 72px; } /* default to avoid layout shift before JS runs */
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