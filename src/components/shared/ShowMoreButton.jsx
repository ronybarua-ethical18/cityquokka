import React from 'react';
import dividerIcon from '@/assets/divider.svg';

const ShowMoreButton = ({ bgColor = "bg-[#A97BF3;]", hoverColor = "hover:bg-[#00CA44]" }) => {
  return (
    <div className="flex justify-center items-center mt-8 px-4">
      <img
        src={dividerIcon}
        alt="divider"
        width={400}
        height={5}
        className="w-full max-w-[400px]"
      />
      
      <button 
        className={`h-[22px] px-4 ${bgColor} ${hoverColor} text-white text-[9px] font-bold rounded border-1 transition-colors duration-200 whitespace-nowrap flex items-center justify-center mx-1`}
      >
        Show More
      </button>

      <img
        src={dividerIcon}
        alt="divider"
        width={400}
        height={5}
        className="w-full max-w-[400px]"
      />
    </div>
  );
};

export default ShowMoreButton;