import React from 'react';
import Body from "@/pages/Home/components/Body";
import Footer from "../../components/layout/Footer";
import SocialSignUp from "@/pages/Home/components/SocialSignUp";
import WhoWeAre from "@/pages/Home/components/WhoWeAre";
import Navbar from "@/components/layout/Navbar";


export default function Homepage() {
  return (
    <div className='flex flex-col items-center w-full bg-white'>
      <Navbar />
      <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] bg-white'>
      <Body />
      <WhoWeAre />
      <SocialSignUp />
      <Footer /></div>
    </div>

  );
}
