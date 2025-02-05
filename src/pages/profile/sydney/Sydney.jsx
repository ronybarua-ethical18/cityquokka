import Navbar from "@/components/layout/Navbar";
import RestaurantReview from "./components/RestaurantReview";
import SydneyProfileBody from "./components/SydneyProfileBody";
import ProfileNavbar from "../profilepage/components/ProfileNavbar";
import Footer from "@/components/layout/Footer";




export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <div className="flex justify-center w-full bg-white">
        <div className="max-w-[340px] sm:max-w-[1120px] w-full">
          <ProfileNavbar />
          <SydneyProfileBody />
          <RestaurantReview />
        </div>
      </div>
      <Footer />

    </div>
  );
}
