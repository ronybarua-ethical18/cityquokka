import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import Business from "@/pages/Business";
import CityGuide from "@/pages/CityGuide";
import Header from "@/components/layout/Header";

const Layout = () => (
  <div className="flex flex-col min-h-screen w-full">
    <Header />
    <main className="flex-grow flex justify-center w-full">
      <Outlet />
    </main>
  </div>
);

export const router = createBrowserRouter([
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
        path: "/cityguide/:section",
        element: <CityGuide />,
      }
    ],
  },
]);