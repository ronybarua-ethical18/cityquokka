import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SydneyProfileBody() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const myListItems = [
    "Events",
    "Activities",
    {
      name: "Destinations",
      subItems: [
        "Cafes",
        <strong key="restaurants">Restaurants</strong>,
        "Bars",
      ],
    },
    "Services",
    "John's fave brunch spots",
    "Music festivals 24/25",
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="relative mt-10 mb-6 sm:flex sm:flex-row sm:gap-6">
      {/* Sidebar */}
      <div className="absolute sm:static top-0 left-0 w-[220px] sm:w-[250px] z-10 h-[550px] sm:h-auto -mx-8 sm:mx-0">
        <div className="flex flex-col h-full px-2 pb-6 pt-12 w-full bg-[#FFB200] rounded-[6px] relative">
          {/* "My List" Title */}
          <div className="absolute top-0 left-6 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold text-lg"> {/* Increased font size here */}
            My List
          </div>

          {/* List Items */}
          <div className="mt-4 space-y-2">
            {myListItems.map((item, index) => (
              <div key={index}>
                {/* Main List Items */}
                <Button
                  variant="ghost"
                  className="w-full min-h-[40px] flex items-center hover:bg-orange-500/20 py-3 px-4 whitespace-normal text-left relative"
                  onClick={() => toggleDropdown(index)}
                >
                  <ChevronDown
                    size={16}
                    className={`text-white mr-3 flex-shrink-0 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                  <div className="flex-1">
                    <span className="text-base font-semibold text-black hover:text-white whitespace-normal leading-5"> {/* Increased font size here */}
                      {typeof item === "string" ? item : item.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                </Button>

                {/* Sub-Items */}
                {typeof item === "object" && item.subItems && openDropdown === index && (
                  <div className="ml-12 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        <Button
                          variant="ghost"
                          className="w-full min-h-[40px] flex items-center hover:bg-orange-500/20 py-2 px-4 whitespace-normal text-left relative"
                        >
                          <div className="flex-1">
                            <span
                              className={`text-base font-normal text-black hover:text-white whitespace-normal leading-5 ${
                                subItem === "Restaurants" ? "font-extrabold" : ""
                              }`}
                            >
                              • {subItem}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                        </Button>
                        {/* Reduced Separator Line Width */}
                        {subIndex !== item.subItems.length - 1 && (
                          <div className="w-3/4 h-[0.5px] bg-white mt-1 mx-auto"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {/* Reduced Width for Main List Separators */}
                <div className="w-5/6 h-[0.5px] bg-white mt-1 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full sm:w-[calc(100%-250px-1.5rem)] h-[550px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26532.449767537553!2d150.844998!3d-33.77213185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a3c5c1896a7%3A0x5017d681632c8e0!2sRooty%20Hill%20NSW%202766%2C%20Australia!5e0!3m2!1sen!2sbd!4v1738737160210!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-[6px]"
        />
      </div>
    </div>
  );
}