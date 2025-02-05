import Navbar from "@/components/layout/Navbar";    
import Footer from "@/components/layout/Footer";
import ProfileNavbar from "../profilepage/components/ProfileNavbar";
import MyProfile from "./components/MyProfile";
import MyPreference from "./components/MyPreference";
import Location from "./components/Location";

export default function SydneyProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />
      <div className="flex justify-center w-full bg-white">
        <div className="max-w-[340px] sm:max-w-[1120px] w-full">
          <ProfileNavbar />
          <MyProfile />
          <MyPreference />
          <Location />
        </div>
      </div>
      <Footer />

    </div>

  );
}
