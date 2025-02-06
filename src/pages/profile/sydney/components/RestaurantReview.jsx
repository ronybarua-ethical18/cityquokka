import { Star, MapPin } from "lucide-react";
import mapping from "../../../../assets/mapping.svg";
import mappingplus from "../../../../assets/mappingplus.svg";

import PropTypes from "prop-types";
import mozarella from "../../../../assets/mozarella.png";

const RestaurantCard = ({
  name,
  rating,
  reviews,
  priceRange,
  cuisine,
  location,
  imageUrl,
}) => (
  <div className="relative flex flex-col sm:flex-row items-start sm:items-center p-4 border-b border-gray-200 gap-3 sm:gap-4">
    {/* ON Button at Top Right */}
    <div className="absolute top-5 right-3 bg-white py-1 px-2 rounded-full border-2 border-black text-[10px] font-bold flex items-center">
      ON <img src={mapping} alt="Location" className="ml-1"/>
    </div>



    {/* Image Section */}
    <div className="w-20 h-20 flex-shrink-0">
      <img
        src={imageUrl || "/api/placeholder/64/64"}
        alt={name}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Content Section */}
    <div className="flex-grow w-full">
      <h3 className="font-medium text-lg truncate">{name}</h3>

      <div className="flex flex-wrap items-center text-sm space-x-2 mt-1">
        <span className="font-medium">{rating}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-gray-500">({reviews})</span>
        <span className="text-gray-500">·</span>
        <span className="text-gray-500">{priceRange}</span>
        <span className="text-gray-500">·</span>
        <span className="text-gray-500 truncate">{cuisine}</span>
      </div>

      <div className="flex items-center mt-1 text-gray-500 text-sm">
        <span>{location}</span>
        <span className="mx-2">-</span>
        <div className="flex items-center">
          
          <span>Location</span><MapPin size={16} alt="Location" className="mr-1" />
        </div>
      </div>


      <button className="text-xs text-gray-500 hover:text-gray-700 mt-2">
        × Remove From My List
      </button>
    </div>
  </div>
);

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  priceRange: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

const RestaurantList = () => {
  const restaurants = [
    {
      name: "Red Lemon Thai",
      rating: 4,
      reviews: 272,
      priceRange: "$20-40",
      cuisine: "Thai",
      location: "Ultimo NSW",
      imageUrl: mozarella,
    },
    {
      name: "Mad & Mex",
      rating: 4,
      reviews: 272,
      priceRange: "$20-40",
      cuisine: "Mexican",
      location: "Ultimo NSW",
      imageUrl: mozarella,
    },
    {
      name: "Indian Food",
      rating: 4,
      reviews: 272,
      priceRange: "$20-40",
      cuisine: "Indian",
      location: "Ultimo NSW",
      imageUrl: mozarella,
    },
  ];

  return (
    <div className="sm:pl-80">
      <div className="w-full max-w-[800px] mx-auto bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-end p-4 border-b border-gray-200">
          <div className="flex items-center gap-2"><img src={mappingplus} alt="Location" className="mr-1" />
            <h2 className="font-medium text-lg">Show All</h2>
            
          </div>
        </div>
        <div className="pr-4 sm:pr-6">

          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
