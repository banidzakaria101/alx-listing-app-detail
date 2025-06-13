import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {property.category.map((cat, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-2 text-gray-800 font-semibold">
          ${property.price.toLocaleString()}
        </div>
        <div className="mt-1 text-yellow-500">
          ⭐ {property.rating.toFixed(2)}
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Beds: {property.offers.bed} | Showers: {property.offers.shower} | Occupants: {property.offers.occupants}
        </div>
        {property.discount && (
          <div className="mt-2 text-red-500 font-bold">
            {property.discount}% OFF
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
