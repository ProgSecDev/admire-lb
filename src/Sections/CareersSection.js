// src/sections/CareersSection.js
import backgroundImage from "../assets/Careers/career-outline-02.jpg";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Careers() {
  return (
    <section
      className="relative w-full min-h-screen px-6 md:px-16 pt-48 pb-24 bg-white/70 bg-top bg-cover bg-no-repeat flex items-start justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-5xl mx-auto mt-12">
        <h1
          className="text-3xl lg:ml-40 text-center lg:text-5xl sm:text-4xl font-bold tracking-widest mb-10"
          style={{ fontFamily: "Azonix" }}
        >
          JOIN OUR
        </h1>
        <h1
          className="text-5xl lg:ml-96 text-center lg:text-8xl sm:text-6xl font-bold tracking-widest mb-10"
          style={{ fontFamily: "Azonix" }}
        >
          FAMILY
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-start mt-[380px]">
          <div className="w-full flex items-center justify-center">
            <form className="w-full max-w-5xl p-8 rounded-lg bg-white/50 backdrop-blur-md shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-left text-lg">Your name</label>
                  <input type="text" className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400" />
                </div>
                <div>
                  <label className="block mb-1 text-left text-lg">Phone</label>
                  <input type="text" className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400" />
                </div>
                <div>
                  <label className="block mb-1 text-left text-lg">Your email</label>
                  <input type="email" className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400" />
                </div>
                <div>
                  <label className="block mb-1 text-left text-lg">Available Positions</label>
                  <select className="w-full border rounded px-3 py-2 shadow-md shadow-gray-400">
                    <option>graphic designer</option>
                    <option>frontend developer</option>
                    <option>backend developer</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block mb-1 text-left text-lg">Upload CV & Portfolio</label>
                  <input type="file" className="w-full shadow-md shadow-gray-400 border-0" />
                </div>
                <div className="md:col-span-1">
                  <label className="block mb-1 text-left text-lg">Your message (optional)</label>
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
            <div className="bg-white/50 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center justify-center text-center">
              <p className="mb-4 font-bold font-calibri text-xl">Stay Connected</p>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaFacebookF />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-full p-3 text-2xl flex items-center justify-center">
                  <FaTiktok />
                </a>
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center justify-center text-center">
              <p className="mb-3 font-bold font-calibri text-xl text-pink-600">Open Time</p>
              <p className="font-calibri text-lg">Monday - Friday</p>
              <p className="font-calibri text-lg">9:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white/50 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center justify-center text-center">
              <MdEmail className="text-pink-600 text-3xl mb-3" />
              <p className="font-calibri text-lg">info@admirelb.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
