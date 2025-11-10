// src/sections/BrandsSection.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";
import brandCardBg from "../assets/Brands/boxes-01.png";
import alwatad from "../assets/Brands/Al-Watad.jpg";
import aoun from "../assets/Brands/Aoun.jpg";
import apcc from "../assets/Brands/APCC.jpg";
import areekahdesign from "../assets/Brands/Areekah-Design.jpg";
import arlyco from "../assets/Brands/Arlyco.jpg";
import artandstyle from "../assets/Brands/Art-and-Style.jpg";
import aujan from "../assets/Brands/Aujan.jpg";
import axvaya from "../assets/Brands/Axvaya.jpg";
import beefclub from "../assets/Brands/Beed-Club.jpg";
import benego from "../assets/Brands/Benego.jpg";
import bethaleph from "../assets/Brands/beth-aleph.jpg";
import bplus from "../assets/Brands/bplus.jpg";
import cactus from "../assets/Brands/Cactus.jpg";
import caritas from "../assets/Brands/Caritas.jpg";
import carry from "../assets/Brands/Carry.jpg";
import diaspora from "../assets/Brands/Diaspora.jpg";
import daaboul from "../assets/Brands/daaboul.jpg";
import dombeya from "../assets/Brands/DC.jpg";
import clinimed from "../assets/Brands/clinimed.jpg";
import coop from "../assets/Brands/coop.jpg";
import cysense from "../assets/Brands/Cysense.jpg";
import dominospizza from "../assets/Brands/Dominos-Pizza.jpg";
import ecbc from "../assets/Brands/ECBC.jpg";
import ema from "../assets/Brands/EMA.jpg";
import f from "../assets/Brands/F.jpg";
import foodys from "../assets/Brands/Foodys.jpg";
import freshway from "../assets/Brands/Freshway.jpg";
import fnc from "../assets/Brands/fnc.jpg";
import finefoods from "../assets/Brands/fine-foods.jpg";
import hardees from "../assets/Brands/Hardees.jpg";
import houseofolives from "../assets/Brands/House-of-Olives.jpg";
import iconglobal from "../assets/Brands/Icon-Global-LTD.jpg";
import isuzu from "../assets/Brands/Isuzu.jpg";
import imar from "../assets/Brands/imar.jpg";
import janalubnan from "../assets/Brands/Jana-Lubnan.jpg";
import jdeide from "../assets/Brands/jdeide.jpg";
import kfc from "../assets/Brands/kfc.jpg";
import khoury from "../assets/Brands/Khoury.jpg";
import krc from "../assets/Brands/KRC.jpg";
import ksa from "../assets/Brands/ksa.jpg";
import lebaneseuni from "../assets/Brands/Lebanese-University.jpg";
import legrain from "../assets/Brands/Le-Grain.jpg";
import makhazen from "../assets/Brands/makhazen.jpg";
import maram from "../assets/Brands/Maram.jpg";
import margarita from "../assets/Brands/Margarita.jpg";
import metra from "../assets/Brands/Metra.jpg";
import mzresidency from "../assets/Brands/MZ Residence.jpg";
import netherlandsembassy from "../assets/Brands/netherlands-embassy.jpg";
import pakelo from "../assets/Brands/pakelo.jpg";
import paraff from "../assets/Brands/Paraff.jpg";
import pizzahut from "../assets/Brands/pizza-hut.jpg";
import psaltis from "../assets/Brands/Psaltis.jpg";
import qatar from "../assets/Brands/qatar.jpg";
import reisswolf from "../assets/Brands/Reisswolf.jpg";
import rmck from "../assets/Brands/rmck.jpg";
import rons from "../assets/Brands/Rons.jpg";
import rtm from "../assets/Brands/rtm.jpg";
import samizar from "../assets/Brands/Samizar.jpg";
import semeli from "../assets/Brands/Semeli.jpg";
import servmed from "../assets/Brands/Servmed.jpg";
import stamina from "../assets/Brands/Stamina.jpg";
import thewellbeingassociation from "../assets/Brands/The-Well-Being-Association.png";
import tonysfood from "../assets/Brands/Tonys-Food.jpg";
import unesco from "../assets/Brands/unesco-logo.png";
import vertetblanc from "../assets/Brands/Vert-Et-Blanc.jpg";
import wardy from "../assets/Brands/wardy.jpg";
import yara from "../assets/Brands/Yara.jpg";
import zein from "../assets/Brands/zein.jpg";
import zelere from "../assets/Brands/Zelere.jpg";

const Brands = () => {
  const brandLogos = [
    qatar, ksa, netherlandsembassy, unesco, lebaneseuni, diaspora, isuzu, caritas,
    reisswolf, pakelo, aujan, hardees, kfc, dominospizza, pizzahut, coop, makhazen,
    aoun, freshway, carry, imar, jdeide, wardy, fnc, finefoods, tonysfood, axvaya,
    arlyco, ema, margarita, daaboul, rons, janalubnan, houseofolives, foodys, semeli,
    beefclub, legrain, zein, bplus, maram, iconglobal, psaltis, apcc, metra, zelere,
    vertetblanc, rtm, rmck, cactus, cysense, clinimed, servmed, samizar, mzresidency,
    khoury, areekahdesign, krc, ecbc, stamina, bethaleph, alwatad, paraff, dombeya,
    benego, f, artandstyle, thewellbeingassociation, yara
  ];

  const [loadedIndexes, setLoadedIndexes] = useState([]);

  useEffect(() => {
    brandLogos.forEach((_, idx) => {
      setTimeout(() => {
        setLoadedIndexes((prev) => [...prev, idx]);
      }, idx * 100);
    });
  }, []);

  return (
    <section className="relative w-full mt-28 text-center min-h-screen bg-fixed bg-center bg-cover px-6 md:px-16 py-20">
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold tracking-widest mb-3" style={{ fontFamily: "Azonix" }}>
          BRANDS THAT TRUST US
        </h1>
        <p className="text-lg mb-12" style={{ fontFamily: "Raleway" }}>
          Take a look below at a few of the companies that we have the
          <span className="text-pink-500 font-semibold"> privilege </span> to{" "}
          <span className="text-pink-500 font-semibold">partner </span>
          with.
        </p>

        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            gap-x-2 gap-y-4 place-items-center
            px-4 sm:px-8 2xl:px-72 3xl:px-[500px] 4xl:px-[820px]
          "
        >
          {brandLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="relative w-44 h-32 md:w-48 md:h-40 bg-center bg-no-repeat bg-contain flex items-center justify-center"
              style={{ backgroundImage: `url(${brandCardBg})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: loadedIndexes.includes(idx) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {loadedIndexes.includes(idx) ? (
                <img
                  src={logo}
                  alt={`brand-${idx}`}
                  className="object-contain max-h-[70%] max-w-[70%] transition-transform duration-300 ease-in-out hover:scale-110"
                />
              ) : (
                <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="relative w-full text-black mt-[clamp(2rem,8vw,6rem)]">
          <div
            className="
              relative z-10 w-full max-w-[1920px] 2k:max-w-[2300px] mx-auto
              px-4 sm:px-6 md:px-10 lg:px-[clamp(2rem,18vw,18rem)]
              pb-6 lg:pb-[clamp(1rem,4vw,2rem)]
              flex flex-col md:flex-row md:items-end gap-6 md:gap-8
            "
          >
            {/* Left: Logo + Location + Phone */}
            <div className="flex flex-col items-center md:items-start gap-4 md:flex-1">
              <img
                src={require("../assets/Logos-and-Favicons/admire-logo-1.png")}
                alt="Logo"
                className="h-16 w-auto tablet:-ml-12 object-contain"
              />

              <div className="flex items-center text-sm sm:text-base text-center md:text-left gap-3">
                <img src={locationIcon} alt="Location" className="h-6 w-6 sm:h-8 tablet:h-12 tablet:w-12 tablet:-ml-16 sm:w-8 object-contain" />
                <a
                  href="https://maps.app.goo.gl/eFyidDwxjG3oq6NE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black"
                >
                  Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street
                </a>
              </div>

              <div className="flex items-center text-sm sm:text-base gap-3 -mt-2 md:mt-0">
                <img src={phoneIcon} alt="Phone" className="h-6 w-6 sm:h-8 sm:w-8 tablet:h-12 tablet:w-12 tablet:-ml-16 object-contain" />
                <span>LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp; CYP +357 94 087 777</span>
              </div>
            </div>

            {/* Right: QR */}
            <div className="w-full md:w-auto md:ml-auto flex justify-center md:justify-end">
              <img
                src={require("../assets/Footer/final-qr.png")}
                alt="QR code"
                className="w-[min(45vw,220px)] md:w-[min(28vw,240px)] max-h-[180px] tablet:w-[min(35vw,120px)] h-auto object-contain"
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Brands;
