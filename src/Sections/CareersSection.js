// src/sections/CareersSection.js
import backgroundImage from "../assets/Careers/career-outline-04.jpg";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";

export default function Careers() {
  return (
    <section
      className="relative w-full min-h-screen px-6 md:px-16 pt-48 pb-24 bg-white/70 bg-top bg-cover bg-no-repeat flex items-start justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-5xl mx-auto mt-40">
        <h1
          className="text-3xl lg:ml-40 text-center lg:text-5xl sm:text-4xl font-bold tracking-widest mb-10"
          style={{ fontFamily: "Azonix" }}
        >
          JOIN OUR
        </h1>
        <h1
          className="3xl:text-[150px] 4xl:text-[250px] text-pink-600 text-5xl lg:ml-96 text-center lg:text-8xl sm:text-6xl font-bold tracking-widest mb-10"
          style={{ fontFamily: "Azonix" }}
        >
          FAMILY
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-start 2xl:mt-[400px] 3xl:mt-[450px] 4xl:mt-[700px]">
          <div className="w-full flex items-center justify-center">
            <form className="w-full max-w-4xl p-8 rounded-lg bg-white/50 backdrop-blur-md shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-left text-[14px] font-raleway">Your name</label>
                  <input type="text" className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400" />
                </div>
                <div>
                  <label className="block mb-1 text-left text-[14px] font-raleway">Phone</label>
                  <input type="text" className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400" />
                </div>
                <div>
                  <label className="block mb-1 text-left text-[14px] font-raleway">Your email</label>
                  <input type="email" className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400" />
                </div>
                <div>
                  <label className="block mb-1 text-left text-[14px] font-raleway">Available Positions</label>
                  <select className="text-xs w-full border rounded px-3 py-2 shadow-md shadow-gray-400">
                    <option>Graphic Designer</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Content Creator</option>
                    <option>Social Media Specialized</option>
                    <option>3D Animation</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block mb-1 text-left text-[14px] font-raleway">Upload CV & Portfolio</label>
                  <input type="file" className="w-full shadow-md shadow-gray-400 border-0" />
                </div>
                <div className="md:col-span-1">
                  <label className="block mb-1 text-left text-[14px] font-raleway">Your message (optional)</label>
                  <textarea className="w-full border rounded px-3 py-2 h-24 shadow-md shadow-gray-400" />
                </div>
              </div>
              <button className="mt-6 w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="max-w-2xl bg-white/50 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center justify-center text-center">
              <p className="mb-4 font-bold font-raleway text-pink-600 text-xl">Stay Connected</p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/admire.lb/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/admire.agency" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaFacebookF />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaTiktok />
                </a>
                <a href="https://lb.linkedin.com/in/joelle-raich-92119aa8" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center justify-center text-center">
              <p className="mb-3 font-bold font-raleway text-xl text-pink-600">Open Time</p>
              <p className="font-calibri text-lg">Monday - Friday</p>
              <p className="font-calibri text-lg">9:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white/50 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center justify-center text-center">
              <MdEmail className="text-pink-600 text-3xl mb-3" />
              <p className="font-calibri text-lg">info@admirelb.com</p>
              <p className="font-calibri text-lg">joelle@admirelb.com</p>
            </div>
          </div>
        </div>

        <footer className="relative w-full text-black mt-60 -mb-20">
          <div className="relative z-10 mx-auto max-w-7xl 4xl:-mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
              {/* left column */}
              <div className="flex flex-col items-center 2xl:-ml-40 3xl:-ml-48 3xl:-mt-10 4xl:mt-8 4xl:-ml-[550px] md:items-start gap-4">
                <img
                  src={require("../assets/Logos-and-Favicons/admire-logo-1.png")}
                  alt="Logo"
                  className="h-16 4xl:h-28 w-auto object-contain"
                />

                <div className="flex items-center 2xl:-ml-8 3xl:-ml-8 4xl:-mt-2 4xl:text-2xl text-sm md:text-base text-center md:text-left">
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="h-12 w-20 4xl:h-20 object-contain"
                  />
                  <a
                    href="https://maps.app.goo.gl/eFyidDwxjG3oq6NE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    <span>
                      Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street
                    </span>
                  </a>
                </div>

                <div className="flex items-center -mt-4 2xl:-ml-8 3xl:-ml-8 4xl:-mt-10 4xl:text-2xl text-sm md:text-base flex-wrap text-center md:text-left">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="h-12 w-20 4xl:h-20 object-contain"
                  />
                  <span>
                    LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp;&nbsp; CYP +357 94 087 777
                  </span>
                </div>
              </div>

              {/* right column: QR */}
              <div className="flex justify-center 3xl:-mt-20 4xl:mt-0 2xl:-mt-8 3xl:-mr-40 4xl:-mr-80 md:justify-end">
                <img
                  src={require("../assets/Footer/final-qr.png")}
                  alt="QR code"
                  className="h-40 w-80 2xl:h-32 2xl:translate-y-16 2xl:translate-x-20 4xl:translate-y-24 4xl:h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}
