import { MapPin } from "lucide-react";
import { Minus } from 'lucide-react';

const Location = () => {
  const buttonStyle = {
    borderRadius: '8px',
    border: '1px solid #FFB200',
    background: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    color: 'black',
    fontFamily: 'Author',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 375,
    lineHeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  return (
    <div className="w-full pt-4">
      <div className="relative bg-[#B388FF] w-full rounded-3xl px-4 pt-16 pb-16 text-center">
        {/* Top floating button - moved to left */}
        <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10">
          <button className="w-[150px] h-[40px] flex-shrink-0 rounded-lg border-black bg-[#EFEFEF] text-black font-bold font-inter">
            Locations
          </button>
        </div>

        {/* Top 3 buttons (left aligned, with orange minus icon and border) */}
        <div className="flex flex-col items-start gap-4 mb-4 sm:pl-20">
          <div className="flex gap-4">
            <button style={buttonStyle} className="relative">

              <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 border border-[#FFB200]">
                <Minus size={6} color="#FFB200" />
              </div>
              Home
            </button>
            <button style={buttonStyle} className="relative">
              <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 border border-[#FFB200]">
                <Minus size={6} color="#FFB200" />
              </div>
              Work
            </button>
            <button style={buttonStyle} className="relative">
              <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 border border-[#FFB200]">
                <Minus size={6} color="#FFB200" />
              </div>
              Parent&apos;s House
            </button>
          </div>
        </div>

        {/* White separator line */}
        <div className="h-[3px] bg-white w-full my-4"></div>

        {/* Input fields (left aligned, responsive) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 sm:pl-20">
          <input
            type="text"
            placeholder="Place name"



            className="px-4 py-2 rounded-lg border-2 border-[#031749] w-full sm:w-[268px] placeholder-[#031749] focus:outline-none focus:border-[#031749] bg-[#c5bed1]"
          />
          <input
            type="text"
            placeholder="Address"
            className="px-4 py-2 rounded-lg border-2 border-[#031749] w-full sm:w-[619px] placeholder-[#031749] focus:outline-none focus:border-[#031749] bg-[#c5bed1]"
          />
        </div>

        {/* Log In Button (Centered horizontally at the bottom) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <button className="w-[252px] sm:w-[352px] px-8 py-3 flex justify-center items-center bg-[#FFB200] rounded-full text-black font-bold font-inter">
            <MapPin size={20} />
            Add Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;