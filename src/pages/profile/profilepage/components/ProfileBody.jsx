import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ProfileBody() {
  const [openDropdown, setOpenDropdown] = useState(null);


  const myListItems = [
    "EVENTS",
    "ACTIVITIES",
    {
      name: "DESTINATIONS",
      subItems: [
        "Cafes",
        "Restaurants",
        "Bars"
      ]
    },
    "SERVICES",
    "John's fave brunch spots",
    "music festivals 24/25"
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="relative mt-10 mb-6 sm:flex sm:flex-row sm:gap-6">
      <div className="absolute sm:static top-0 left-0 w-[180px] sm:w-[250px] z-10 h-[497px] sm:h-auto -mx-8 sm:mx-0">
        <div className="flex flex-col h-full px-2 pb-6 pt-12 w-full bg-[#FFB200] rounded-[6px] relative">
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            My List
          </div>

          <div className="mt-6 space-y-2">
            {myListItems.map((item, index) => (
              <div key={index}>
                <Button 
                  variant="ghost" 
                  className="w-full flex items-center justify-start hover:bg-orange-500/20 py-1 px-1"
                  onClick={() => toggleDropdown(index)}
                >
                  <ChevronDown 
                    size={16} 
                    className={`text-white mr-2 flex-shrink-0 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} 
                  />
                  <span className="text-sm font-semibold text-black hover:text-white truncate">
                    {typeof item === 'string' ? item : item.name}
                  </span>
                </Button>
                
                {typeof item === 'object' && item.subItems && openDropdown === index && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        <Button
                          variant="ghost"
                          className="w-full flex items-center justify-start hover:bg-orange-500/20 py-1 px-1"
                        >
                          <span className="text-sm font-semibold text-black hover:text-white truncate">
                            {subItem}
                          </span>
                        </Button>
                        {subIndex !== item.subItems.length - 1 && (
                          <div className="w-full h-[1px] bg-white mt-1"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <div className="w-full h-[1px] bg-white mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[calc(100%-250px-1.5rem)] h-[497px]">
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