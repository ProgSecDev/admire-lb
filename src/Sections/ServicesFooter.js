import logoImg from "../assets/Logos-and-Favicons/WHITE LOGO-01.png";
import qrImg from "../assets/Footer/qr-new.png";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";

function ServicesFooter() {
  const addressLine =
    "Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street";

  const phones = [
    { label: "LEB", value: "+961 4 444107 - +961 70 777013" },
    { label: "CYP", value: "+357 94 087 777" },
  ];

  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #4a4a4a, #000000)", // dark gray -> black
      }}
    >
      {/* 🔥 Top Blur Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-10 
                   bg-gradient-to-b from-black via-black/40 to-transparent 
                   backdrop-blur-md pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* left column: logo + address + phones */}
          <div className="flex flex-col items-center 3xl:-ml-48 3xl:-mt-10 4xl:mt-8 4xl:-ml-[550px] md:items-start gap-4">
            <img
              src={logoImg}
              alt="Logo"
              className="h-52 3xl:mt-20 4xl:h-80 4xl:-mt-20 w-auto object-contain"
            />

            {/* address */}
            <div className="flex items-center -mt-16 4xl:-mt-28 text-sm 4xl:text-2xl md:text-base text-center md:text-left">
              <img
                src={locationIcon}
                alt="Location"
                className="h-12 w-20 4xl:h-20 object-contain"
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
            <div className="flex items-center -mt-4 4xl:-mt-10 text-sm 4xl:text-2xl md:text-base flex-wrap text-center md:text-left">
              <img
                src={phoneIcon}
                alt="Phone"
                className="h-12 w-20 4xl:h-20 object-contain"
              />
              <span>
                {phones
                  .map((p) => `${p.label} ${p.value}`)
                  .join("\u00A0\u00A0\u00A0")}
              </span>
            </div>
          </div>

          {/* right column: QR */}
          <div className="flex justify-center 2xl:mt-10 3xl:mt-20 3xl:-mr-40 4xl:-mr-80 md:justify-end">
            <img
              src={qrImg}
              alt="QR code"
              className="h-40 w-80 2xl:h-32 2xl:translate-y-16 4xl:-mt-10 4xl:h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ServicesFooter;
