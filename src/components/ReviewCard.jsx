/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";

const ReviewCard = ({ review }) => {
  const { name, profession, feedback, rating, image } = review;

  return (
    <div className="p-10   shadow-md rounded-lg max-w-sm bg-slate-100 flex flex-col justify-between h-full">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-full"
          src={image}
          alt={`${name}'s profile`}
        />
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-blue-500">{profession}</p>
        </div>
      </div>

      <div>
        <p className="mt-4 text-gray-600">{feedback}</p>
      </div>

      <div className="mt-auto flex items-center">
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? (
            <AiFillStar key={i} className="text-yellow-500" />
          ) : (
            <AiOutlineStar key={i} className="text-yellow-500" />
          )
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
