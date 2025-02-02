import React from 'react';
import dividerIcon from '../../../assets/divider.svg';

const FeatureCard = ({ title, backgroundColor, borderColor }) => {
  return (
    <div className={`flex flex-col grow justify-center px-12 py-14 w-full text-center text-black ${backgroundColor} rounded-lg border-black border-solid border-[3px] max-md:px-5 max-md:mt-8`}>
      <div className={`px-9 h-[196px] flex items-center justify-center bg-white rounded-lg ${borderColor} border-solid border-[3px] max-md:px-5 text-[30px] font-author font-[596] leading-[98.4%] tracking-[-0.9px]`}>
        {title}
      </div>
    </div>
  );
};

const Features = () => {
  const topFeatures = [
    { title: "City Quokka publishes an independent review of your business at no cost ", backgroundColor: "bg-[#FFB200]", borderColor: "border-[#FFB200]" },
    { title: "Send notifications to users who follow your business", backgroundColor: "bg-[#A97BF3]", borderColor: "border-[#A97BF3]" },
    { title: "Send notifications to users who follow your business", backgroundColor: "bg-[#00CA44]", borderColor: "border-[#00CA44]" },
  ];

  const bottomFeatures = [
    { title: "Send notifications to users who follow your business", backgroundColor: "bg-[#00CA44]", borderColor: "border-[#00CA44]" },
    { title: "Send notifications to users who follow your business", backgroundColor: "bg-[#FFB200]", borderColor: "border-[#FFB200]" },
    { title: "Send notifications to users who follow your business", backgroundColor: "bg-[#A97BF3]", borderColor: "border-[#A97BF3]" }
  ];

  return (
    <section>
      <div className="flex flex-col gap-2">
        <img
          src={dividerIcon}
          alt="divider"
          width={1120}
          height={3}
          className='mt-20'
        />
        <div className="text-black font-author text-[30px] font-[596] leading-[98.4%] tracking-[-0.9px] mb-10">
          1. FREE LISTING on the City Quokka City Guide
        </div>
      </div>

      <div className="w-full max-w-[1121px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {topFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <img
          src={dividerIcon}
          alt="divider"
          width={1120}
          height={3}
          className='mt-20'
        />
        <div className="text-black font-author text-[30px] font-[596] leading-[98.4%] tracking-[-0.9px] mb-20">
          2. TARGET special offers at New Customers.. and convert them into loyal fans
        </div>
      </div>

      <div className="w-full max-w-[1121px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-[700px] bg-white"></div>
    </section>
  );
};

export default Features;