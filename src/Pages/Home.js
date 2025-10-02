import HomeBanner from "../Sections/HomeBanner";
import ServiceCards from "../Sections/ServiceCards";
import ValuesGrid from "../Sections/ValuesGrid";
import Stats from "../Sections/Stats";
import HomeFooter from "../Sections/HomeFooter";
import BottomFooter from "../Sections/bottomFooter";
import WhatsappWidget from "../Components/Whatsapp Widget/WhatsappWidget";


function Home() {
  return (
    <>
      <HomeBanner />
      <ServiceCards />
      <ValuesGrid />
      <Stats />
      <HomeFooter />
      <BottomFooter />
      <WhatsappWidget />
    </>
  );
}

export default Home;
