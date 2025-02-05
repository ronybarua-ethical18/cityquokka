
import EntertainmentBody from "./components/EntertainmentBody";
import EntertainmentContent from "./components/EntertainmentContent";
import EntertainmentMapContent from "./components/EntertainmentMapContent";
import Footer from "../../../components/layout/Footer";
import CityHeader from "../components/CityHeader";
import Navbar from "@/components/layout/Navbar";


export default function EntertainmentPage() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col w-full px-8 sm:px-0">
        <div className="max-w-[1120px] mx-auto w-full"> {/* Added max-w and mx-auto */}
          <CityHeader />
        </div>
        <EntertainmentBody />
        <EntertainmentContent />
        <EntertainmentMapContent />
      </div>

      <div className="px-8 flex justify-center"> {/* Centered the sidebar */}
        
      </div>
      <Footer />
    </div>
  );
}