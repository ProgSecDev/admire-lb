import bgImage from "../assets/About-Us/about-bg4.jpg";

const AboutUs = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pt-24 pb-12 max-w-6xl mx-auto text-black">
        <h1
          className="text-center mb-8 mt-8 tracking-widest drop-shadow-lg text-2xl sm:text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "Azonix" }}
        >
          ABOUT US
        </h1>

        <div
          className="space-y-5 text-black text-sm sm:text-base md:text-lg"
          style={{ fontFamily: "Raleway" }}
        >
          <p>
            A multinational advertising agency based in Lebanon with offices
            across Cyprus Saudi Arabia, Dubai, and Qatar. We pride ourselves on
            delivering exceptional digital marketing and graphic design
            solutions to our clients, who are some of the most esteemed brands
            in the industry.
          </p>
          <p>
            <span className="text-pink-600 font-semibold">Admire</span> has been
            providing top-notch digital marketing and graphic design solutions
            for over 14 years. During that time, we have developed a reputation
            for excellence, reliability, and professionalism. Our extensive
            experience has given us the knowledge and expertise needed to
            deliver outstanding results to our clients. We have built lasting
            relationships with many of our clients, and we are proud to have
            been a part of their growth and success over the years. At Admire,
            we are committed to continuing to deliver the best possible service
            to our clients for many years to come.
          </p>
          <p>
            At <span className="text-pink-600 font-semibold">Admire</span>, our
            goal is to help businesses maximize their potential through creative
            and innovative digital marketing strategies. We believe that every
            business deserves a unique and tailored approach to its digital
            marketing, and we work tirelessly to ensure that our clients’ needs
            are met with the utmost care and attention to detail.
          </p>
          <p>
            Our team of experts is composed of highly skilled and experienced
            professionals in the fields of digital marketing and graphic design.
            We understand that every business is different, and we take the time
            to understand our clients’ individual needs and objectives. Whether
            you are looking for a comprehensive digital marketing strategy or a
            stunning graphic design solution, we are here to help you achieve
            your goals.
          </p>
          <p>
            At <span className="text-pink-600 font-semibold">Admire</span>, we
            believe that our success is directly linked to our clients’ success.
            That is why we are dedicated to providing the highest level of
            customer service and support. We are committed to exceeding our
            clients’ expectations and delivering the best possible results.
          </p>
          <p>
            We are proud of our reputation as a leading digital marketing and
            graphic design company in the region. Our clients trust us to
            deliver exceptional work, and we are committed to uphold that trust.
            If you are looking for a reliable partner to help you grow your
            business, look no further than Admire.
          </p>

          <div className="pt-6 space-y-5">
            <div>
              <h2 className="text-pink-700 font-bold uppercase tracking-wide text-base md:text-lg">
                Our Mission
              </h2>
              <p>
                We empower great ideas and believe that innovative content comes
                from special people just like you! We are dedicated to authentic
                brand stories and use journalistic methods to create the largest
                possible value for both your budget and your audience. <br />
                We work hard to create inspired and effective work for your
                brand.
              </p>
            </div>
            <div>
              <h2 className="text-pink-700 font-bold uppercase tracking-wide text-base md:text-lg">
                Our Vision
              </h2>
              <p>
                To provide innovative and effective integrated brand marketing
                and public relations solutions that helps our clients grow their
                businesses and realize their marketing goals.
              </p>
            </div>
            <div>
              <h2 className="text-pink-700 font-bold uppercase tracking-wide text-base md:text-lg">
                Our Values
              </h2>
              <p>
                Our people enjoy a personal stake in your continued success and
                take pride in what we do. We are here to serve our clients. Our
                commitment to our customers is deeply ingrained in our corporate
                culture and we go above and beyond every day to prove it. We
                produce clever work, but we always keep the objective of each
                campaign at the top of our mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;