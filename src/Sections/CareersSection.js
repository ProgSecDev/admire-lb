// src/sections/CareersSection.js
import backgroundImage from "../assets/Careers/career-outline-04.jpg";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";

export default function Careers() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-start 
                 bg-white/70 bg-top bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ======= Header Section ======= */}
      <div className="w-full max-w-6xl mx-auto text-center mt-[15vh] sm:mt-[20vh] md:mt-[22vh] lg:mt-[35vh] lg:ml-[60vh] mobilesm:translate-y-40">
        <h1
  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-black"
  style={{ fontFamily: "Azonix" }}
>
  JOIN OUR
</h1>

{/* FAMILY Header - Clean SVG to fix Azonix glitch */}
<div className="w-full flex justify-center">
  <svg
    viewBox="0 0 800 200"
    className="w-[min(90%,1200px)] h-auto text-pink-600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Azonix, sans-serif"
      fontSize="120"
      fill="currentColor"
    >
      FAMILY
    </text>
  </svg>
</div>

      </div>

      {/* ======= Application Form Section (below pink background) ======= */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto 
                   mt-[min(35vh,20rem)] sm:mt-[28vh] md:mt-[40vh] 
                   px-4 sm:px-8 md:px-16 mobilesm:mt-[500px]"
      >
        <form className="w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-left text-[14px] font-raleway">Your name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-left text-[14px] font-raleway">Phone</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-left text-[14px] font-raleway">Your email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-left text-[14px] font-raleway">
                Available Positions
              </label>
              <select className="text-xs w-full border rounded px-3 py-2 shadow-md shadow-gray-400">
                <option>Graphic Designer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Content Creator</option>
                <option>Social Media Specialized</option>
                <option>3D Animation</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-left text-[14px] font-raleway">
                Upload CV & Portfolio
              </label>
              <input
                type="file"
                className="w-full shadow-md shadow-gray-400 border-0"
              />
            </div>
            <div>
              <label className="block mb-1 text-left text-[14px] font-raleway">
                Your message (optional)
              </label>
              <textarea className="w-full border rounded px-3 py-2 h-24 shadow-md shadow-gray-400" />
            </div>
          </div>
          <button className="mt-8 w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition">
            Submit
          </button>
        </form>
      </div>

      {/* ======= Contact Info Boxes ======= */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-4 sm:px-8">
        {/* Social */}
        <div className="bg-white/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <p className="mb-4 font-bold font-raleway text-pink-600 text-xl">
            Stay Connected
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/admire.lb/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/admire.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://lb.linkedin.com/in/joelle-raich-92119aa8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Open Time */}
        <div className="bg-white/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <p className="mb-3 font-bold font-raleway text-xl text-pink-600">
            Open Time
          </p>
          <p className="font-calibri text-lg">Monday - Friday</p>
          <p className="font-calibri text-lg">9:00 AM - 5:00 PM</p>
        </div>

        {/* Emails */}
        <div className="bg-white/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <MdEmail className="text-pink-600 text-3xl mb-3" />
          <p className="font-calibri text-lg">info@admirelb.com</p>
          <p className="font-calibri text-lg">joelle@admirelb.com</p>
        </div>
      </div>

      {/* ======= Footer ======= */}
      <footer className="relative w-full text-black mt-[clamp(2rem,8vw,6rem)]">
          <div
            className="
              relative z-10 flex flex-wrap justify-between items-end
              px-4 sm:px-6 md:px-10 lg:px-[clamp(2rem,18vw,18rem)]
              pb-6 lg:pb-[clamp(1rem,4vw,2rem)]
              w-full max-w-[1920px] 2k:max-w-[2300px] mx-auto
            "
          >
            {/* Left Side: Logo + Location + Phone */}
            <div className="flex flex-col items-center 3xl:-ml-48 3xl:-mt-20 4xl:mt-8 4xl:-ml-[550px] md:items-start gap-4">
              <img
                src={require('../assets/Logos-and-Favicons/admire-logo-1.png')}
                alt="Logo"
                className="h-16 w-auto object-contain"
              />

              <div className="flex items-center mobilesm:text-[12px] mobilesm:-ml-4 lg:-ml-8 xl:-ml-8 laptop:-ml-8 2xl:-ml-8 hd:-ml-8 2k:-ml-8 mobilesm:mt-4 md:text-base text-center md:text-left">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="h-12 w-12 object-contain"
                />
                <a
                  href="https://maps.app.goo.gl/eFyidDwxjG3oq6NE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black"
                >
                  Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street
                </a>
              </div>

              <div className="flex items-center mobilesm:text-[12px] mobilesm:-ml-4 mobilemed:-translate-x-4 -mt-4 text-sm md:text-base text-center md:text-left">
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="h-12 w-12 object-contain"
                />
                <span>
                  LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp; CYP +357 94 087 777
                </span>
              </div>
            </div>

            {/* Right Side: QR */}
            <div className="flex justify-center items-center w-full md:w-auto mt-8 md:mt-0 2k:mr-[0vw]">
              <img
                src={require('../assets/Footer/final-qr.png')}
                alt="QR code"
                className="w-[min(45vw,220px)] md:w-[min(30vw,250px)] max-h-[150px] h-auto object-contain"
              />
            </div>
          </div>
        </footer>
    </section>
  );
}
