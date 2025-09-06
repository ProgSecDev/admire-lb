import { motion } from "framer-motion";
// import backgroundImage from "../assets/Brands/bc-01.jpg";
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
import bethaleph from "../assets/Brands/Beth-Aleph.jpg";
import bluelemon from "../assets/Brands/Blue-Lemon.jpg";
import bobcat from "../assets/Brands/Bobcat.jpg";
import cactus from "../assets/Brands/Cactus.jpg";
import caritas from "../assets/Brands/Caritas.jpg";
import carry from "../assets/Brands/Carry.jpg";
import diaspora from "../assets/Brands/Diaspora.jpg";
import clinimed from "../assets/Brands/Clinimed.jpg";
import coop from "../assets/Brands/Coop.jpg";
import cottonandcolors from "../assets/Brands/Cotton-and-Colors.jpg";
import cysense from "../assets/Brands/Cysense.jpg";
import dc from "../assets/Brands/DC.jpg";
import desegno from "../assets/Brands/Desegno.jpg";
import dominospizza from "../assets/Brands/Dominos-Pizza.jpg";
import ecbc from "../assets/Brands/ECBC.jpg";
import ema from "../assets/Brands/EMA.jpg";
import f from "../assets/Brands/F.jpg";
import foodys from "../assets/Brands/Foodys.jpg";
import freshway from "../assets/Brands/Freshway.jpg";
import gaia from "../assets/Brands/Gaia.jpg";
import hardees from "../assets/Brands/Hardees.jpg";
import houseofolives from "../assets/Brands/House-of-Olives.jpg";
import iconglobal from "../assets/Brands/Icon-Global-LTD.jpg";
import isuzu from "../assets/Brands/Isuzu.jpg";
import janalubnan from "../assets/Brands/Jana-Lubnan.jpg";
import jdeide from "../assets/Brands/Jdeide.jpg";
import kands from "../assets/Brands/K-and-S.jpg";
import kfc from "../assets/Brands/KFC.jpg";
import khoury from "../assets/Brands/Khoury.jpg";
import krc from "../assets/Brands/KRC.jpg";
import ksa from "../assets/Brands/KSA.jpg";
import lebaneseuni from "../assets/Brands/Lebanese-University.jpg";
import legrain from "../assets/Brands/Le-Grain.jpg";
import makhazen from "../assets/Brands/Makhazen.jpg";
import maram from "../assets/Brands/Maram.jpg";
import margarita from "../assets/Brands/Margarita.jpg";
import metra from "../assets/Brands/Metra.jpg";
import mzresidency from "../assets/Brands/MZ Residence.jpg";
import netherlandsembassy from "../assets/Brands/Netherlands-Embassy.jpg";
import pakelo from "../assets/Brands/Pakelo.jpg";
import paraff from "../assets/Brands/Paraff.jpg";
import pizzahut from "../assets/Brands/Pizza-Hut.jpg";
import psaltis from "../assets/Brands/Psaltis.jpg";
import qatar from "../assets/Brands/Qatar.jpg";
import reisswolf from "../assets/Brands/Reisswolf.jpg";
import rentaride from "../assets/Brands/Rent-A-Ride.jpg";
import rmck from "../assets/Brands/RMCK.jpg";
import rons from "../assets/Brands/Rons.jpg";
import royalhillsresidency from "../assets/Brands/Royal-Hills-Residence.jpg";
import rtmmotors from "../assets/Brands/RTM-Motors.jpg";
import samizar from "../assets/Brands/Samizar.jpg";
import semeli from "../assets/Brands/Semeli.jpg";
import servmed from "../assets/Brands/Servmed.jpg";
import servwell from "../assets/Brands/Servwell.jpg";
import softy from "../assets/Brands/Softy.jpg";
import stamina from "../assets/Brands/Stamina.jpg";
import thewellbeingassociation from "../assets/Brands/The-Well-Being-Association.png";
import tne from "../assets/Brands/Tne.jpg";
import tonysfood from "../assets/Brands/Tonys-Food.jpg";
import unesco from "../assets/Brands/UNESCO.png";
import vertetblanc from "../assets/Brands/Vert-Et-Blanc.jpg";
import yara from "../assets/Brands/Yara.jpg";
import zein from "../assets/Brands/Zein.jpg";
import zelere from "../assets/Brands/Zelere.jpg";

const Brands = () => {
  const brandLogos = [
    qatar, ksa, netherlandsembassy, lebaneseuni, pakelo, diaspora, caritas,
    isuzu, alwatad, aoun, apcc, areekahdesign, arlyco, artandstyle, aujan,
    axvaya, beefclub, benego, bethaleph, bluelemon, bobcat, cactus, carry,
    clinimed, coop, cottonandcolors, cysense, dc, desegno, dominospizza, ecbc,
    ema, f, foodys, freshway, gaia, hardees, houseofolives, iconglobal,
    janalubnan, jdeide, kands, kfc, khoury, krc, legrain, makhazen, maram,
    margarita, metra, mzresidency, paraff, pizzahut, psaltis, reisswolf,
    rentaride, rmck, rons, royalhillsresidency, rtmmotors, samizar, semeli,
    servmed, servwell, softy, stamina, thewellbeingassociation, tne, tonysfood,
    unesco, vertetblanc, yara, zein, zelere,
  ];

  return (
    <section
      className="relative w-full mt-28 text-center min-h-screen bg-fixed bg-center bg-cover px-6 md:px-16 py-20"
    >
      <div className="absolute inset-0 bg-black/10" aria-hidden />

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 md:-gap-x-20 md:-gap-y-20 place-items-center lg:ml-96 lg:mr-96">
          {brandLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="relative w-44 h-32 md:w-48 md:h-40 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${brandCardBg})` }}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.1, delay: idx * 0.01 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={logo}
                alt={`brand-${idx}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain max-h-[70%] max-w-[70%] transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
