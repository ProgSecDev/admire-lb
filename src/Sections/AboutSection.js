// src/sections/AboutSection.js
import { motion } from "framer-motion";
import bgImage from "../assets/About-Us/owner-aboutus.png";
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
      {/* Desktop/Laptop portrait (kept as-is; absolute) */}
      <div className="hidden lg:flex absolute inset-y-0 right-0 w-[min(55vw,900px)] z-20 justify-end items-center">
        <img
          src={bgImage}
          alt="Portrait background"
          className="
            w-full h-auto object-contain object-right
            max-h-[85vh] mt-[clamp(4rem,6vh,6rem)]
            xl:max-h-[80vh] xl:-translate-y-[58%]
            laptop:max-h-[80vh] laptop:-translate-y-[63%]
            hd:max-h-[60vh] hd:-translate-y-[70%] hd:-translate-x-[10%]
            2k:max-h-[75vh] 2k:-translate-y-[36%]
          "
        />
      </div>

      {/* TEXT + responsive images */}
      <div
        className="
          relative z-10
          w-full sm:w-[90%] md:w-[85%]
          lg:w-[60%] xl:w-[55%]
          mx-auto lg:mx-0 lg:ml-20
          px-4 sm:px-6 md:px-8 lg:px-[clamp(1rem,6vw,2rem)]
          py-10 sm:py-12 md:py-14 lg:py-[clamp(2rem,6vw,5rem)]
          text-left leading-relaxed
          md:block lg:block
        "
      >
        {/* TEXT */}
        <div className="md:flex-1">
          <h1
            className="mt-10 sm:mt-14 lg:mt-20 mb-6 sm:mb-8 lg:mb-10 tracking-[0.3em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2k:text-7xl font-light text-white"
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
            className="space-y-4 sm:space-y-5 text-white text-[0.9rem] sm:text-base leading-relaxed font-raleway 2k:text-3xl about-text-4xl-shape"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="max-w-prose md:max-w-[60ch] lg:max-w-none">
              Admire was Established in 2012 with a clear vision: to craft impactful
              brand experiences through thoughtful <span className="hidden"><br /></span>
              design and strategic marketing. What started as a boutique agency has grown
              organically into a multinational <span className="hidden"><br /></span>
              presence, expanding every two years to now operate across Lebanon, Cyprus,
              Saudi Arabia, the UAE, and <span className="hidden"><br /></span>
              Qatar. <br />
              Our journey reflects our dedication to quality, creativity, and building
              long-term partnerships with <span className="hidden"><br /></span>
              clients who value excellence. Over the years, Admire has positioned itself
              as a partner of choice <span className="hidden"><br /></span>
              for high-end brands, offering services that include premium branding,
              digital marketing, <span className="hidden"><br /></span>
              private label, and 3D interior modeling with a specialized focus on the
              EMEA market. After <span className="hidden"><br /></span>
              more than a decade of experience, Admire has become a recognized leader in
              private label <span className="hidden"><br /></span>
              solutions not limited to one sector, but spanning across industries. From
              concept creation to <span className="hidden"><br /></span>
              branding, packaging, and marketing, we provide businesses with complete
              brand-building <span className="hidden"><br /></span>
              expertise, making us the trusted partner for companies aiming to launch,
              grow, and elevate <span className="hidden"><br /></span>
              their own labels. <br />
              We don’t just design brands, we build identities, shape experiences, and
              help businesses <span className="hidden"><br /></span>
              communicate with clarity and confidence in competitive markets. <br />
              As a woman-founded company, we take pride in our values of leadership,
              resilience, and <span className="hidden"><br /></span>
              innovation values that continue to shape our story and the stories we tell
              for our clients.
            </p>
          </motion.div>

          {/* MOBILE-ONLY image (below text) — slight downward nudge */}
          <div className="block md:hidden mt-0">
            <img
              src={bgImage}
              alt="Founder portrait"
              className="w-full h-auto object-contain translate-y-10 sm:translate-y-3"
            />
          </div>

          {/* TABLET-ONLY image (enhanced card below text) */}
          <div className="hidden md:block lg:hidden mt-8">
            <div className="mx-auto max-w-[480px]">
              <img
                src={bgImage}
                alt="Founder portrait"
                className="
                  w-full h-auto object-contain
                  translate-y-20 sm:translate-y-14
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Values + Footer Wrapper */}
      <div className="relative z-30 mt-0 sm:mt-0 lg:mt-10 w-full bg-gray-200/60 backdrop-blur-sm 2k:mt-72">
        {/* Founder Ribbon — top-aligned on tablet, slightly up on mobile, normal on lg+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            w-full lg:w-auto
            lg:absolute z-10
            lg:bottom-[46rem] xl:bottom-[51rem] 2k:bottom-[56rem]
            lg:right-[clamp(25%,15vw,200px)] 2k:right-[clamp(30%,15vw,200px)]
            flex justify-center lg:block
            pt-0 md:pt-0 lg:pt-6
            -translate-y-2 sm:-translate-y-3 md:-translate-y-10 lg:translate-y-0
          "
        >
          <div className="bg-pink-600 px-6 py-3 shadow-xl inline-block">
            <div className="font-azonix text-white text-base sm:text-lg md:text-xl font-extrabold tracking-wider text-center">
              Joelle Raich
            </div>
            <div className="text-white text-[0.7rem] sm:text-xs md:text-sm tracking-widest text-center uppercase">
              Founder / CEO
            </div>
          </div>
        </motion.div>

        {/* Mission / Vision / Values */}
        <div className="w-full py-8 sm:py-10 md:py-12 lg:py-14 2k:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
          <div
            className="
              max-w-7xl mx-auto
              grid grid-cols-1 md:grid-cols-3
              gap-8 sm:gap-10 3xl:gap-24 4xl:gap-40 2k:gap-56 2k:max-w-[1600px]
              text-center
            "
          >
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <img
                src={Mission}
                alt="Mission"
                className="mx-auto w-14 h-14 sm:w-16 sm:h-16 2xl:w-28 2xl:h-28 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48"
              />
              <h3 className="text-black font-azonix text-base sm:text-lg 4xl:text-3xl uppercase tracking-wide">
                Mission
              </h3>
              <p className="text-left font-raleway text-black text-sm sm:text-[0.95rem] 4xl:text-lg leading-relaxed">
                At Admire, we empower great ideas and we are convinced that innovative
                comes from unique people just like you. WE will take your innovation to
                the next level through our team's knowledge, expertise and commitment to
                your success. Our mission is to craft authentic brand stories that create
                meaningful connections. By combining creativity with journalistic
                methods, we optimize the value of both and tailor it to your budget and
                audience. We are dedicated to producing inspired, effective marketing
                that helps every brand thrive.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <img
                src={Vision}
                alt="Vision"
                className="mx-auto w-14 h-14 sm:w-16 sm:h-16 2xl:w-28 2xl:h-28 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48"
              />
              <h3 className="text-black font-azonix text-base sm:text-lg 4xl:text-3xl uppercase tracking-wide">
                Vision
              </h3>
              <p className="text-left font-raleway text-black text-sm sm:text-[0.95rem] 4xl:text-lg leading-relaxed">
                Our vision is to deliver innovative and impactful integrated brand
                marketing and public relations solutions that empower our clients to
                grow, achieve their goals, and build lasting success.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <img
                src={Values}
                alt="Values"
                className="mx-auto w-14 h-14 sm:w-16 sm:h-16 2xl:w-28 2xl:h-28 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48"
              />
              <h3 className="text-black font-azonix text-base sm:text-lg 4xl:text-3xl uppercase tracking-wide">
                Values
              </h3>
              <p className="text-left font-raleway text-black text-sm sm:text-[0.95rem] 4xl:text-lg leading-relaxed">
                At Admire, we are disciplined in building genuine partnerships with our
                clients. Our team takes personal pride in every project and shares a deep
                commitment to your success. Client service is at the heart of our
                culture; we go above and beyond every day to deliver. While we value
                creativity, innovation and remarkable ideas, we always keep your
                objectives at the core of every campaign.
              </p>
            </motion.div>
          </div>
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
                className="h-16 w-auto object-contain"
              />

              <div className="flex items-center text-sm sm:text-base text-center md:text-left gap-3">
                <img src={locationIcon} alt="Location" className="h-6 w-6 sm:h-8 tablet:h-12 tablet:w-12 tablet:-ml-4 sm:w-8 object-contain" />
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
                <img src={phoneIcon} alt="Phone" className="h-6 w-6 sm:h-8 sm:w-8 tablet:h-12 tablet:w-12 tablet:-ml-4 object-contain" />
                <span>LEB +961 4 444107 - +961 70 777013 &nbsp;&nbsp; CYP +357 94 087 777</span>
              </div>
            </div>

            {/* Right: QR */}
            <div className="w-full md:w-auto md:ml-auto flex justify-center md:justify-end">
              <img
                src={require("../assets/Footer/final-qr.png")}
                alt="QR code"
                className="w-[min(45vw,220px)] md:w-[min(28vw,240px)] max-h-[180px] h-auto object-contain"
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
