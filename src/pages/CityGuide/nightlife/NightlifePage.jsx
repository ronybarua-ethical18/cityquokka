import NightLifeBody from "./components/NightLifeBody";
import NightLifeArticles from "./components/NightLifeArticles";
import Footer from "@/components/layout/Footer";

export default function NightLifePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <NightLifeBody />
      <NightLifeArticles />
      <Footer />
    </div>
  );
}


