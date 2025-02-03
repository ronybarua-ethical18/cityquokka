import React from 'react';
import Body from "@/pages/Home/components/Body";
import Footer from "../../components/layout/Footer";
import SocialSignUp from "@/pages/Home/components/SignUp";
import WhoWeAre from "@/pages/Home/components/WhoWeAre";

export default function Homepage() {
  return (
    <div className='flex flex-col items-center w-full bg-white'>
      <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] bg-white'> {/* Added px-8 for 30px padding */}

        <Body />


        <WhoWeAre />


        <SocialSignUp />


        <Footer />
      </div>
    </div>
  );
}
