/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { image_url, service_name, category, pricing, counselor, id } = service;
  return (
    <div className="card bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out h-full flex flex-col justify-between">
      
      <div className="card-image relative group">
        <img
          src={image_url}
          alt={service_name}
          className="w-full h-32 lg:h-64  transition-transform duration-300 ease-in-out group-hover:scale-125"
        />
        
        
      </div>

      
      <div className="p-4 lg:p-6 space-y-3">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-800 group-hover:text-[#c3002f] transition">
          {service_name}
        </h2>
        <div className="text-gray-600 space-y-1">
          <p className="text-sm lg:text-base">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p className="text-sm lg:text-base">
            <span className="font-medium">Price:</span> ${pricing}
          </p>
          <p className="text-sm lg:text-base">
            <span className="font-medium">Counselor:</span> {counselor}
          </p>
        </div>
      </div>

     
      <hr className="border-gray-200 mx-4 lg:mx-6" />

    
      <div className="p-4 lg:p-6">
        <Link
          to={`/serviceDetail/${id}`}
          className="block w-full bg-gradient-to-r from-[#c3002f] to-[#930123] text-white text-center py-2 lg:py-3 rounded-xl hover:from-[#930123] hover:to-[#c3002f] shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
