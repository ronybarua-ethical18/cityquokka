import NightLifeBody from "./components/NightLifeBody";
import NightLifeArticles from "./components/NightLifeArticles";
import Footer from "@/components/layout/Footer";
import CityHeader from "../components/CityHeader";
import Navbar from "@/components/layout/Navbar";

export default function NightLifePage() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col w-full px-4 max-md:px-8 bg-white">
        <div className="max-w-[1120px] mx-auto w-full">
          <CityHeader />
          <NightLifeBody />
        </div>
        
        <NightLifeArticles />
      </div>
      <div className="max-w-[1120px] mx-auto w-full md:px-0"> {/* Footer wrapper */}
        <Footer />
      </div>
    </div>
  );
}