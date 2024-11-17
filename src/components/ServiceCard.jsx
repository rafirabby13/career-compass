/* eslint-disable react/prop-types */

const ServiceCard = ({ service }) => {
  const { image_url, service_name, category, pricing, counselor } = service;
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden border p-6 h-full flex flex-col justify-between space-y-7">
      {/* Image */}
      <div className="card-image">
        <img
          src={image_url}
          alt={service_name}
          className="w-full h-52 rounded-md shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{service_name}</h2>
        <p className=" text-lg">Category: {category}</p>
        <p className=" text-lg">Price: {pricing}</p>
        <p className="font-semibold text-lg">Counselor: {counselor}</p>

        {/* Button */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
