import React from 'react';

const ShowMoreButton = ({ bgColor = "bg-[#FFB200]", hoverColor = "hover:bg-[#FFB200]" }) => {
  return (
    <div className="flex justify-center mt-8">
      <button 
        className={`px-8 py-3 ${bgColor} ${hoverColor} text-black font-bold rounded-lg border-2 border-black transition-colors duration-200`}
      >
        Show More
      </button>
    </div>
  );
};

export default ShowMoreButton;