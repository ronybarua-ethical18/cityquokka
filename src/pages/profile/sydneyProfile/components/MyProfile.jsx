import PorfileAvatar from "../../../../../src/assets/ProfileAvatar.png"
import { Pencil } from "lucide-react";

export default function MyProfile() {
    return (
      <div className="flex flex-col sm:flex-row mt-10 mb-6">
        <div className="w-full sm:w-full flex flex-col">
          <div className="flex flex-col h-[500px] sm:h-[375px] px-8 pb-6 pt-12 w-full bg-[#00CA44] rounded-l-[6px] sm:rounded-l-[6px] sm:rounded-r-none max-md:px-5 max-md:mt-8 relative">
            <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-[#EFEFEF] rounded-lg whitespace-nowrap font-bold">
             My Profile
            </div>
  
            <div className="mt-6 space-y-6 flex flex-col justify-between h-full">
              <div className="flex flex-col sm:flex-row items-start w-full">
                {/* Avatar */}
                <div className="relative flex-shrink-0 w-[188px] h-[188px] overflow-hidden rounded-[50%] bg-gray-300 z-10 sm:mr-12 mx-auto sm:mx-0 mb-6 sm:mb-0">
                  <img
                    src={PorfileAvatar}
                    alt="Avatar"
                    className="w-[188px] h-[188px] rounded-[50%] object-cover"
                  />
                </div>
  
                {/* Text */}
                <div className="flex flex-col justify-center pt-2 w-full">
                  <div className="flex items-center justify-between pb-2">
                    <div className="text-black text-2xl font-semibold font-inter">John</div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#00CA44] rounded-lg hover:bg-[#00CA44] transition-colors">
                      <Pencil size={20} />
                      <span className="font-semibold">Edit</span>
                    </button>
                  </div>
                  <div className="h-[3px] w-full sm:w-[760px] bg-white"></div>

                  <div className="text-white text-2xl font-light pb-2 font-inter">Gender</div>
                  <div className="h-[3px] w-full sm:w-[760px] bg-white"></div>
                  <div className="text-white text-2xl font-light pb-2 font-inter">Email</div>
                  <div className="h-[3px] w-full sm:w-[760px] bg-white"></div>

                  <div className="text-white text-2xl font-light font-inter">Home Suburb</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }