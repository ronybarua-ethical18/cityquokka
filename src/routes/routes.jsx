import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import Business from "@/pages/Business";
import CityGuide from "@/pages/CityGuide";
import SignUpPage from "../pages/auth/SignUp/SignUpPage";
import NightlifePage from "@/pages/CityGuide/nightlife/NightlifePage";
import ArticlePage from "@/pages/CityGuide/Article/ArticlePage";
import MarketPage from "@/pages/CityGuide/marketplace/MarketPage";
import EntertainmentPage from "@/pages/CityGuide/entertainment/EntertainmentPage";
import ProfilePage from "@/pages/Profile";
import SydneyOfferPage from "@/pages/profile/SydneyOfferPage";
import SydneyProfile from "@/pages/profile/SydneyProfile";
const Layout = () => (
  <div className="flex flex-col min-h-screen w-full bg-white">
    
    <main className="flex-grow flex justify-center w-full">
      <Outlet />
    </main>
  </div>
);

export const router = createBrowserRouter([
  // Auth routes without header
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  // Main layout routes with header
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/cityguide",
        element: <CityGuide />,

      },
      {
        path: "/profile",
        element:<SydneyProfile /> 
      },
     
      {
        path: "/offers",
        element: <SydneyOfferPage />,

      },
      {
        path: "/sydney",
        element: <ProfilePage />,
      },
      {
        path: "/cityguide/nightlife",
        element: <NightlifePage />,
      },



      {
        path: "/cityguide/article",
        element: <ArticlePage />,
      },
      {
        path: "/cityguide/:section",
        element: <CityGuide />,
      },
      {
        path: "/cityguide/markets",
        element: <MarketPage />,
      },
      {
        path: "/cityguide/entertainment",
        element: <EntertainmentPage />,
      },
    ],
  },

]);


export default router;

