import { Star, MapPin } from "lucide-react";
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
  <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border-b border-gray-200 gap-3 sm:gap-4">
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
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg truncate">{name}</h3>
        <div className="bg-gray-100 px-2 py-1 rounded text-sm flex items-center gap-2">ON <MapPin size={16} className="text-red-500 flex-shrink-0" /></div>
      </div>



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
          <MapPin size={14} className="mr-1 " />
          <span>Location</span>
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
          <div className="flex items-center gap-2"><h2 className="font-medium text-lg">Show All</h2>
            <MapPin size={18} className="text-red-500" />
            

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
