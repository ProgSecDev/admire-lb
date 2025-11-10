import logoImg from "../assets/Logos-and-Favicons/WHITE LOGO-01.png";
import qrImg from "../assets/Footer/final-qr.png";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";
import bgImg from "../assets/Services/latest/bg-midpic.png";

function ServicesFooter() {
  const addressLine =
    "Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street";

  const phones = [
    { label: "LEB", value: "+961 4 444107 - +961 70 777013" },
    { label: "CYP", value: "+357 94 087 777" },
  ];

  return (
    <footer className="relative w-full text-white bg-black -mt-20">
      {/* background only behind content, sides remain black */}
      <div
        className="relative mx-auto max-w-7xl bg-fixed bg-center bg-contain"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* overlay with side gaps */}
        <div
          className="
            pointer-events-none absolute inset-y-0
             sm:left-6 sm:right-6 lg:left-0 lg:right-0
            bg-black/40
          "
        />

        <div className="relative z-10 px-4 py-2">
          {/* top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
            {/* left column */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src={logoImg}
                alt="Logo"
                className="h-52 w-auto object-contain"
              />

              {/* address */}
              <div className="flex items-center mobilesm:text-[12px] mobilesm:-ml-8 -mt-16 text-sm md:text-base text-center md:text-left">
              <img
                src={locationIcon}
                alt="Location"
                className="h-12 w-12 tablet:ml-10 xl:ml-10 mobilesm:ml-10 object-contain"
              />
              <a
                href="https://maps.app.goo.gl/eFyidDwxjG3oq6NE7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                {addressLine}
              </a>
            </div>

            {/* phones */}
            <div className="flex items-center mobilesm:text-[12px] mobilesm:-ml-8 -mt-4 text-sm md:text-base text-center md:text-left">
              <img
                src={phoneIcon}
                alt="Phone"
                className="h-12 w-12 tablet:ml-10 xl:ml-10 mobilesm:ml-10 object-contain"
              />
              <span>
                {phones
                  .map((p) => `${p.label} ${p.value}`)
                  .join("\u00A0\u00A0\u00A0")}
              </span>
            </div>
          </div>
            {/* right column: QR */}
<div className="
  flex justify-center md:justify-end items-end
  relative
  w-full h-full
">
  <img
    src={qrImg}
    alt="QR code"
    className="
      h-auto
      w-[min(25vw,250px)]
      max-h-[150px]
      -translate-y-[5%]
      object-contain
    "
  />
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ServicesFooter;
