import logoImg from "../assets/Logos-and-Favicons/admire-logo-1.png";
import qrImg from "../assets/Footer/QR-01.png";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";

function AboutFooter() {
  const addressLine =
    "Antelias - Lebanon St. Nicolas center, 6th floor - Sawma Jaber street";

  const phones = [
    { label: "LEB", value: "+961 4 444107 - +961 70 777013" },
    { label: "CYP", value: "+357 94 087 777" },
  ];

  return (
    <footer className="relative z-20 w-full text-black bg-gray-200/60 backdrop-blur-sm">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* left column */}
          <div className="flex flex-col items-center 3xl:-ml-48 3xl:-mt-10 4xl:mt-8 4xl:-ml-[550px] md:items-start gap-4">
            <img
              src={logoImg}
              alt="Logo"
              className="h-16 4xl:h-28 w-auto object-contain"
            />

            {/* address */}
            <div className="flex items-center 4xl:-mt-2 text-sm 4xl:text-2xl md:text-base text-center md:text-left">
              <img
                src={locationIcon}
                alt="Location"
                className="h-12 w-20 4xl:h-20 object-contain"
              />
              <span>{addressLine}</span>
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
          <div className="flex justify-center 3xl:-mr-40 4xl:-mr-80 md:justify-end">
            <img
              src={qrImg}
              alt="QR code"
              className="h-40 w-80 4xl:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AboutFooter;
