/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { image_url, service_name, category, pricing, counselor, id } = service;
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden border p-6 h-full flex flex-col justify-between space-y-7">
      {/* Image */}
      <div className="card-image">
        <img
          src={image_url}
          alt={service_name}
          className="w-full h-52 rounded-md shadow-md transition duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{service_name}</h2>
        <p className=" text-lg">Category: {category}</p>
        <p className=" text-lg">Price: {pricing}</p>
        <p className="font-semibold text-lg">Counselor: {counselor}</p>

        {/* Button serviceDetail */}
        <button className="">
          <Link to={`/serviceDetail/${id}`} className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
