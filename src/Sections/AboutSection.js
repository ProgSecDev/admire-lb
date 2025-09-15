import { motion } from "framer-motion";
import bgImage from "../assets/About-Us/new-joelle.png";
import TextType from "../Components/TextType/TextType";
import Mission from "../assets/About-Us/mission-01.svg";
import Vision from "../assets/About-Us/vision-01.svg";
import Values from "../assets/About-Us/value-01.svg";

export default function AboutSection() {
  return (
    <section
      className="relative w-full lg:h-[1500px] bg-neutral-500 overflow-hidden ring-1 ring-white/40"
      aria-label="About Admire agency"
    >
      {/* Background */}
      <img
        src={bgImage}
        alt="Portrait background"
        className="absolute inset-0 z-10 3xl:w-[600px] 3xl:h-[1250px] 3xl:translate-x-[900px] 3xl:translate-y-0 2xl:w-[800px] 2xl:h-[1200px] 2xl:translate-x-[450px] object-contain object-right pointer-events-none select-none"
        aria-hidden
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.15) 70%, rgba(255,255,255,1) 100%, rgba(0,0,0,.15) 60%, rgba(0,0,0,0) 45%)",
        }}
        aria-hidden
      />

      {/* Grid overlay */}
      {/* <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-0 left-0 h-full w-px bg-white/40" />
        <div className="absolute top-0 right-0 h-full w-px bg-white/40" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-0 left-1/4 h-full w-px bg-white/40" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-white/40" />
        <div className="absolute top-0 left-3/4 h-full w-px bg-white/40" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/40" />
      </div> */}

      {/* Content */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-20 pb-10 md:pt-24">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h1
              className="3xl:ml-10 2xl:ml-10 mb-8 md:mb-8 tracking-[0.3em] drop-shadow text-3xl sm:text-4xl md:text-5xl font-light"
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
              className="max-w-prose mx-auto space-y-4 3xl:ml-10 2xl:ml-10 md:ml-40 text-white/95 text-[13px] sm:text-sm md:text-[15px] leading-relaxed"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                <b>
                  Established in 2012, Admire began with a clear vision: to
                  craft impactful brand experiences through thoughtful design
                  and strategic marketing.
                  <br />
                  What started as boutique agency has grown organically into a
                  multinational presence, expanding every two years to now
                  operate across Lebanon, Cyprus, Saudi Arabia, the UAE, and
                  Qatar.
                </b>
              </p>
              <p>
                <b>
                  Our journey reflects our dedication to quality, creativity,
                  and building long-term partnerships with clients who value
                  excellence. Over the <br/>years, Admire has positioned itself as a
                  partner of choice for high-end brands, offering services that
                  include premium branding,<br/> digital marketing, private label,
                  and 3D interior modeling <br/> &mdash; with a specialized focus on the
                  EMEA market. <br />
                  After more than a decade of experience, Admire has<br/> become a
                  recognized leader in private label solutions &mdash;<br/> not limited to
                  one sector, but spanning across industries.
                  <br />
                  From concept creation to branding, packaging, and<br/> marketing,
                  we provide businesses with complete<br/> brand-building expertise,
                  making us the trusted partner<br/> for companies aiming to launch,
                  grow, and elevate their<br/> own labels.
                </b>
              </p>
              <p>
                <b>
                  We don't just design brands &mdash; we build identities,<br/> shape
                  experiences, and help businesses<br/> communicate with clarity and
                  confidence in<br/> competitive markets.
                </b>
              </p>
              <p>
                <b>
                  As a woman-founded company, we take pride in our<br/> values of
                  leadership, resilience, and innovation &mdash;<br/> values that continue
                  to shape our story and the<br/> stories we tell to our clients.
                </b>
              </p>
            </motion.div>
          </div>
          </div>

          {/* Center overlay background with Mission / Vision / Values */}
      <div className="relative z-20 flex justify-center items-center mt-20">
        <div className="bg-gray-200/80 3xl:w-[1090px] 3xl:translate-x-1 3xl:translate-y-10 2xl:w-[1030px] 2xl:-translate-x-6 2xl:translate-y-10 md:w-3/4 lg:w-2/3 py-12 px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img src={Mission} alt="Mission" className="mx-auto w-36 h-36" />
              <h3 className="text-black font-azonix text-lg uppercase tracking-wide">
                Mission
              </h3>
              <p className="text-left font-raleway text-black text-sm leading-relaxed">
                We empower great ideas and believe that innovative content comes
                from special people just like you! We are dedicated to authentic 
                brand stories and use journalistic methods to create the largest 
                possible value for both your budget and your audience.<br />
                We work hard to create inspired and effective work for your brand.
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
              <img src={Vision} alt="Vision" className="mx-auto w-36 h-36" />
              <h3 className="text-black font-azonix text-lg uppercase tracking-wide">
                Vision
              </h3>
              <p className="text-left font-raleway text-black text-sm leading-relaxed">
                To provide innovative and effective integrated brand marketing
                and public relations solutions that help clients grow their
                businesses and realize their marketing goals.
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
              <img src={Values} alt="Values" className="mx-auto w-36 h-36" />
              <h3 className="text-black font-azonix text-lg uppercase tracking-wide">
                Values
              </h3>
              <p className="text-left font-raleway text-black text-sm leading-relaxed">
                Our people enjoy a personal stake in your continued success and take pride
                in what we do. We are here to serve our clients. Our commitment to our 
                customers is deeply ingrained in our corporate culture and we go above and beyond 
                every day to prove it. We produce clever work, but we always keep the objective 
                of each compaign at the top of our mind.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      </div>

      {/* Owner ribbon */}
      <motion.div
        className="mt-8 flex items-center gap-3"
        
      >
        <div className="relative z-0 bg-pink-600 px-4 py-3 shadow-xl 3xl:translate-x-[412px] 3xl:-translate-y-[582px] 3xl:w-[540px] 2xl:w-[450px] 2xl:translate-x-[221px] 2xl:-translate-y-[605px] text-center">
          <div className="text-white/90 text-lg tracking-widest uppercase">
            Founder / CEO
          </div>
          <div className="font-azonix text-white text-lg sm:text-xl font-extrabold tracking-wider">
            Joelle Raiche
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-300 via-gray-300/50 to-transparent backdrop-blur-md pointer-events-none z-20" />
    </section>
  );
}