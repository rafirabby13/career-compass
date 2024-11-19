/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import user from "../assets/user.png";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Helmet } from "react-helmet";
const ServiceDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const [service, setServices] = useState({});
  const [comment, setComment] = useState([]);

  

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        const findedData = data.find((dt) => dt.id == id);
        // console.log(findedData);
        setServices(findedData);
      });
  }, [id]);

  const {
    image_url,
    service_name,
    category,
    description,
    duration,
    location,
    max_participants,
    pricing,
    rating,
    counselor,
    tags,
  } = service;

  const handleAddComment = (e) => {
    e.preventDefault();
    if (e.target.comment.value.length > 0) {
      setComment([...comment, e.target.comment.value]);
      e.target.comment.value = "";
    }
  };
  return (
    <div className="min-h-screen">
       <Helmet>
        <title>Detail | Career Compass</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg border ">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={image_url}
            alt={service_name}
            className="w-full md:w-1/3 rounded-lg shadow-md "
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{service_name}</h1>
            <p className="text-gray-600 text-sm mb-4">Category: {category}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Counselor:</span> {counselor}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span> {location}
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Description</h2>
          <p className="text-gray-700 mt-2">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> {duration}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Max Participants:</span>{" "}
                {max_participants}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Pricing:</span> ${pricing}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Rating:</span> ⭐ {rating}
              </p>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <form
        onSubmit={handleAddComment}
        className="flex items-center gap-5 justify-center py-20 w-2/4 mx-auto"
      >
        <img className="h-12" src={user} alt="" />
        <input
          type="text"
          name="comment"
          placeholder="Comment here"
          className="input input-bordered w-full "
        />
        <button className="btn">Comment</button>
      </form>

      <div className=" py-20 w-2/4 mx-auto">
        <h1 className="text-3xl font-bold mb-5">Comments....</h1>

        <div>
          {comment?.map((comment, index) => (
            <p key={index}>
              {index + 1}. {comment}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
