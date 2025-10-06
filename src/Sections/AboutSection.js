// src/sections/AboutSection.js
import { motion } from "framer-motion";
import bgImage from "../assets/About-Us/joelle-latest.png";
import TextType from "../Components/TextType/TextType";
import Mission from "../assets/About-Us/mission-01.svg";
import Vision from "../assets/About-Us/vision-01.svg";
import Values from "../assets/About-Us/value-01.svg";
import locationIcon from "../assets/Flags-and-Icons/location-01.svg";
import phoneIcon from "../assets/Flags-and-Icons/phone-01.svg";

export default function AboutSection() {
  return (
    <section
      className="relative w-full bg-neutral-600 overflow-hidden"
      aria-label="About Admire agency"
    >
      {/* Right-side portrait */}
      <div className="absolute inset-y-0 right-8 w-[900px] z-20">
        <img
          src={bgImage}
          alt="Portrait background"
          className="absolute h-[600px] 1xl:right-0 1xl:h-[800px] 2xl:!translate-y-2 1xl:mt-20 3xl:h-[750px] 3xl:-right-8 4xl:h-[1100px] object-right"
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl px-40 lg:px-20 py-20 4xl:ml-20">
        <h1
          className="mt-20 mb-10 tracking-[0.3em] text-3xl sm:text-4xl md:text-5xl font-light text-white"
          style={{ fontFamily: "Azonix, sans-serif" }}
        >
          <TextType
            text={["ABOUT US"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
          />
        </h1>

        <motion.div
          className="space-y-6 text-white text-sm sm:text-base leading-relaxed font-raleway 4xl:text-2xl about-text-4xl-shape"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <p>
            Admire was Established in 2012 with a clear vision: to craft impactful
            brand experiences through thoughtful <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>design and strategic marketing. What started as 
            a boutique agency has grown organically into a multinational <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>presence, expanding
            every two years to now operate across Lebanon, Cyprus, Saudi Arabia, the UAE, and <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>Qatar.
          </p>

          <p>
            Our journey reflects our dedication to quality, creativity, and building long-term
            partnerships with <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>clients who value excellence. Over the years, Admire has positioned
            itself as a partner of choice <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>for high-end brands, offering services that include
            premium branding, digital marketing, <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>private label, and 3D interior modeling — with a
            specialized focus on the EMEA market. After <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>more than a decade of experience, Admire
            has become a recognized leader in private label <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>solutions not limited to one sector,
            but spanning across industries. From concept creation to <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>branding, packaging, and
            marketing, we provide businesses with complete brand-building <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>expertise, making us the
            trusted partner for companies aiming to launch, grow, and elevate <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>their own labels.
          </p>

          <p>
            We don’t just design brands, we build identities, shape experiences, and help
            businesses <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>communicate with clarity and confidence in competitive markets.
          </p>

          <p>
            As a woman-founded company, we take pride in our values of leadership, resilience, and
            <span className="hidden 1xl:inline 3xl:hidden 4xl:hidden"><br /></span>innovation values that continue to shape our story and the stories we tell for our clients.
          </p>
        </motion.div>
      </div>

      {/* Mission / Vision / Values + Footer Wrapper */}
      <div className="relative z-30 mt-12 w-full bg-gray-200/60 backdrop-blur-sm">

        {/* Founder Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
    absolute 
    z-10 
    w-[250px] 
    -top-[84px] 
    2xl:-top-[72px]
    2xl:w-[300px]
    2xl:right-[400px]
    3xl:right-[300px] 
    4xl:-top-[84px] 
    4xl:w-[400px]
    4xl:right-[500px] 
    right-16 
    sm:right-12 
    md:right-20 
    lg:right-32 
    xl:right-40
    founder-ribbon-1xl-left
  "
        >

          <div className="bg-pink-600 px-8 py-3 shadow-xl mt-9">
            <div className="font-azonix text-white text-xl 4xl:text-2xl sm:text-xl font-extrabold tracking-wider text-center">
              Joelle Raich
            </div>
            <div className="text-white text-sm 4xl:text-xl tracking-widest text-center uppercase">
              Founder / CEO
            </div>
          </div>
        </motion.div>

        {/* Mission / Vision / Values */}
        <div className="w-full py-12 px-6 sm:px-12 md:px-20">
          <div className="max-w-7xl 4xl:max-w-[120rem] mx-auto grid md:grid-cols-3 gap-10 3xl:gap-24 4xl:gap-40 text-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img src={Mission} alt="Mission" className="mx-auto w-16 h-16 2xl:w-28 2xl:h-28 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48" />
              <h3 className="text-black font-azonix text-lg 4xl:text-3xl uppercase tracking-wide">
                Mission
              </h3>
              <p className="text-left font-raleway text-black text-sm 4xl:text-lg leading-relaxed">
                At Admire, we empower great ideas and we are convinced that innovative comes from unique
                people just like you. WE will take your innovation to the next level through our team's
                knowledge, expertise and commitment to your success. Our mission is to craft authentic brand
                stories that create meaningful connections. By combining creativity with journalistic methods,
                we optimize the value of both and tailor it to your budget and for your audience. We are
                dedicated to producing inspired, effective marketing that helps every brand thrive.

              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img src={Vision} alt="Vision" className="mx-auto w-16 h-16 2xl:w-28 2xl:h-28 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48" />
              <h3 className="text-black font-azonix text-lg 4xl:text-3xl uppercase tracking-wide">
                Vision
              </h3>
              <p className="text-left font-raleway text-black text-sm 4xl:text-lg leading-relaxed">
                Our vision is to deliver innovative and impactful integrated brand marketing and public relations
                solutions that empower our clients to grow, achieve their goals, and build lasting success.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img src={Values} alt="Values" className="mx-auto w-16 h-16 2xl:w-28 2xl:h-28 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48" />
              <h3 className="text-black font-azonix text-lg 4xl:text-3xl uppercase tracking-wide">
                Values
              </h3>
              <p className="text-left font-raleway text-black text-sm 4xl:text-lg leading-relaxed">
                At Admire, we are disciplined in building genuine partnerships with our clients. Our team takes
                personal pride in every project and shares a deep commitment to your success. Client
                service is at the heart of our culture, we go above and beyond every day to deliver. While
                we value creativity, innovation and remarkable ideas, we always keep your objectives at
                the core of every campaign.
              </p>
            </motion.div>
          </div>
        </div>

        <footer className="relative w-full text-black mt-40">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
              {/* left column */}
              <div className="flex flex-col items-center 3xl:-ml-48 3xl:-mt-10 4xl:mt-8 4xl:-ml-[550px] md:items-start gap-4">
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
              <div className="flex justify-center 3xl:-mt-20 4xl:mt-2 2xl:-mt-10 3xl:-mr-40 4xl:-mr-80 md:justify-end">
                <img
                  src={require("../assets/Footer/final-qr.png")}
                  alt="QR code"
                  className="h-40 w-80 2xl:h-32 2xl:translate-y-16 4xl:h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>

    </section>
  );
}
