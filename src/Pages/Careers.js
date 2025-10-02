import CareersSection from "../Sections/CareersSection";
import BottomFooterCareers from "../Sections/bottomFooterCareers";
import WhatsappWidget from "../Components/Whatsapp Widget/WhatsappWidget";

function Careers() {
  return (
    <div className="bg-gray-700 min-h-screen"> 
      <CareersSection />
      <BottomFooterCareers />
      <WhatsappWidget />
    </div>
  );
}

export default Careers;
