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
import ciaspora from "../assets/Brands/Ciaspora.jpg";
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
import backgroundImage from "../assets/Home/home-background.jpg";

const Brands = () => {
  const brandLogos = [
    alwatad,
    aoun,
    apcc,
    areekahdesign,
    arlyco,
    artandstyle,
    aujan,
    axvaya,
    beefclub,
    benego,
    bethaleph,
    bluelemon,
    bobcat,
    cactus,
    caritas,
    carry,
    ciaspora,
    clinimed,
    coop,
    cottonandcolors,
    cysense,
    dc,
    desegno,
    dominospizza,
    ecbc,
    ema,
    f,
    foodys,
    freshway,
    gaia,
    hardees,
    houseofolives,
    iconglobal,
    isuzu,
    janalubnan,
    jdeide,
    kands,
    kfc,
    khoury,
    krc,
    ksa,
    lebaneseuni,
    legrain,
    makhazen,
    maram,
    margarita,
    metra,
    mzresidency,
    netherlandsembassy,
    pakelo,
    paraff,
    pizzahut,
    psaltis,
    qatar,
    reisswolf,
    rentaride,
    rmck,
    rons,
    royalhillsresidency,
    rtmmotors,
    samizar,
    semeli,
    servmed,
    servwell,
    softy,
    stamina,
    thewellbeingassociation,
    tne,
    tonysfood,
    unesco,
    vertetblanc,
    yara,
    zein,
    zelere,
  ];

  return (
    <section
      className="w-full py-20 px-6 mt-40 md:px-16 bg-white/70 text-center bg-fixed bg-center bg-cover relative min-h-[500px] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        className="text-3xl font-bold tracking-widest mb-3"
        style={{ fontFamily: "Azonix" }}
      >
        BRANDS THAT TRUST US
      </h1>
      <p className="text-lg mb-12" style={{ fontFamily: "Raleway" }}>
        Take a look below at a few of the companies that we have the
        <span className="text-pink-500 font-semibold">
          {" "}
          privilege to partner{" "}
        </span>
        with.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 place-items-center">
        {brandLogos.map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center w-40 h-40 md:w-48 md:h-48"
          >
            <img
              src={logo}
              alt={`brand-${idx}`}
              className="object-contain max-h-full max-w-full transition-transform duration-300 ease-in-out transform hover:scale-[1.2]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
