import { motion } from "framer-motion";
import bgImage from "../assets/About-Us/bc-joelle.jpg";
import dashImage from "../assets/About-Us/line-01.svg";
import planeImage from "../assets/About-Us/flight-01.svg";
import TextType from "../Components/TextType/TextType";

export default function AboutSection() {
  return (
    <section
      className="relative w-full lg:h-[1100px] bg-neutral-500 overflow-hidden ring-1 ring-white/40"
      aria-label="About Admire agency"
    >
      {/* Background image (entire image, no crop) */}
      <img
        src={bgImage}
        alt="Portrait background"
        className="absolute inset-0 w-full h-full object-contain object-right pointer-events-none select-none"
        aria-hidden
      />

      {/* Subtle left-to-right dark gradient for legibility (does not crop) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.15) 50%, rgba(255,255,255,1) 100%, rgba(0,0,0,.15) 60%, rgba(0,0,0,0) 45%)",
        }}
        aria-hidden
      />

      {/* Grid overlay: edge lines + 25/50/75% + thicker center */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-0 left-0 w-full h-px bg-white/70" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/70" />
        <div className="absolute top-0 left-0 h-full w-px bg-white/70" />
        <div className="absolute top-0 right-0 h-full w-px bg-white/70" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/50" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/50" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white/50" />
        <div className="absolute top-0 left-1/4 h-full w-px bg-white/50" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-white/50" />
        <div className="absolute top-0 left-3/4 h-full w-px bg-white/50" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-white/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/20" />
      </div>

      {/* Content area */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-20 pb-10 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column (copy) */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h1
              className="mb-8 md:mb-8 tracking-[0.3em] drop-shadow text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Azonix, sans-serif" }}
            >
              <TextType
                text={["ABOUT US"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>

            <motion.div
              className="space-y-4 md:space-y-5 text-white/95 text-[13px] sm:text-sm md:text-[15px] leading-relaxed"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                Admire is a multinational advertising agency headquartered in
                Lebanon, with offices across Cyprus, Saudi Arabia, Dubai and
                Qatar. For more than 14 years, we have specialized in delivering
                high-quality digital marketing and graphic design solutions to
                some of the most prestigious brands in the region. Throughout
                our journey, we have built a solid reputation for excellence,
                professionalism, and reliability. Our extensive experience
                allows us to craft innovative, creative and customized
                strategies that help businesses maximize their potential and
                achieve sustainable growth.
              </p>
              <p>
                Our team of skilled professionals works closely with clients to
                understand their unique goals and challenges, ensuring every
                solution is tailored to their needs. Whether it's comprehensive
                digital marketing campaigns or impactful graphic design, we
                focus on delivering results that matter. At Admire, we believe
                our success is tied to the success of our clients. That is why
                we are committed to exceeding expectations, offering exceptional
                customer service, and maintaining long-lasting partnerships.
                With a strong track record and trusted relationships, we
                continue to position ourselves as a leading agency in the
                region, dedicated to shaping brands and driving growth.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 mt-10 lg:mt-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="lg:translate-y-48 lg:translate-x-16 p-0 font-azonix"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-pink-600 font-extrabold tracking-wide uppercase text-base md:text-lg">
                  Vision
                </h3>
                <p className="font-raleway font-bold text-black text-[13px] sm:text-sm mt-1">
                  To provide innovative and effective integrated brand marketing
                  and public relations solutions that help clients grow their
                  businesses and realize their marketing goals.
                </p>
              </motion.div>

              <motion.div
                className="lg:translate-y-96 lg:-translate-x-[500px] p-0 font-azonix"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-pink-600 font-extrabold tracking-wide uppercase text-base md:text-lg">
                  Mission
                </h3>
                <p className="font-raleway font-bold text-black text-[13px] sm:text-sm mt-1">
                  We empower great ideas and believe that innovative content
                  comes from special people just like you. We craft authentic
                  brand stories to create the largest possible value for both
                  your budget and your audience.
                </p>
              </motion.div>

              <motion.div
                className="lg:translate-y-96 p-0 font-azonix"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-pink-600 font-extrabold tracking-wide uppercase text-base md:text-lg">
                  Values
                </h3>
                <p className="font-raleway font-bold text-black text-[13px] sm:text-sm mt-1">
                  Our people enjoy a personal stake in your success and take
                  pride in what we do. We serve our clients, go above and
                  beyond, and keep each campaign’s objective at the top of mind.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Owner ribbon */}
      <motion.div
        className="hidden md:flex items-center gap-3 absolute right-4 sm:right-10 lg:right-16 top-[55%] z-20 select-none"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-pink-600 px-2 py-3 shadow-xl pr-28">
          <div className="text-white/90 text-xs tracking-widest uppercase">
            Owner:
          </div>
          <div className="font-azonix text-white text-lg sm:text-xl font-extrabold tracking-wider">
            Joelle Raiche
          </div>
        </div>
      </motion.div>

      <img
        src={dashImage}
        alt="Decorative dashed path"
        className="pointer-events-none absolute bottom-32 left-[45%] -translate-x-1/3 w-[50%] max-w-none h-auto z-10 select-none rotate-2"
        aria-hidden
      />

      <img
        src={planeImage}
        alt="Pink paper plane"
        className="pointer-events-none absolute bottom-[260px] right-[19.2%] lg:w-32 md:w-16 sm:w-16 h-auto rotate-[8deg] z-10 select-none"
        aria-hidden
      />
    </section>
  );
}
