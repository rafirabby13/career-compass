/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ review }) => {
  const { name, profession, feedback, rating, image } = review;

  return (
    <div className="px-5 py-10  rounded-lg max-w-sm bg-[#FAF6E3] flex flex-col justify-between h-[330px] shadow-xl mx-4">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-full"
          src={image}
          alt={`${name}'s profile`}
        />
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-blue-500 font-bold text-xl">{profession}</p>
        </div>
      </div>

      <div>
        <p className="mt-4 font-medium text-xl text-gray-600">{feedback}</p>
      </div>

      <div className=" flex items-center ">
        <StarRatings
          starRatedColor="orange"
          starHoverColor="red"
          rating={rating}
          starDimension="30px"
          starSpacing="5px"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
