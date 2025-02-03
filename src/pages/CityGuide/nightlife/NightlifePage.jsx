import NightLifeBody from "./components/NightLifeBody";
import NightLifeArticles from "./components/NightLifeArticles";
import Footer from "@/components/layout/Footer";
import CityHeader from "../components/CityHeader";
import Navbar from "@/components/layout/Navbar";

export default function NightLifePage() {
  return (
    <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] '> <Navbar />
            <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] px-4 max-md:px-8 bg-white'><CityHeader />
      
      <NightLifeBody />
      <NightLifeArticles />
      

    </div>
    <Footer />
    </div>
  );
}


