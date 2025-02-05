const RestaurantList = () => {
  const restaurants = [
    // ... restaurant data stays the same
  ];

  return (
    <div className="sm:pl-80">
      <div className="w-full max-w-[800px] mx-auto bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-end p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="font-medium text-lg">Show All</h2>
            <MapPin size={18} className="text-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:block gap-4 p-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className={`${index !== restaurants.length - 1 ? 'sm:border-b sm:border-gray-200' : ''}`}>
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 