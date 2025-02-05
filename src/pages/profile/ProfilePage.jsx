import Navbar from "@/components/layout/Navbar";
import ProfileNavbar from "./profilepage/components/ProfileNavbar";
import ProfileBody from "./profilepage/components/ProfileBody";
import Footer from "@/components/layout/Footer";

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <div className="flex justify-center w-full bg-white">
        <div className="max-w-[340px] sm:max-w-[1120px] w-full">
          <ProfileNavbar />
          <ProfileBody />
        </div>
      </div>
      <Footer />
    </div>
  );
}
