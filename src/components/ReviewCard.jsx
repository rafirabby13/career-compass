import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewCard = ({review}) => {
    const { name, profession, feedback, rating, image_url } = review;
    return (
        <div className="p-5 bg-white shadow-md rounded-lg max-w-md">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 rounded-full"
            src={image_url}
            alt={`${name}'s profile`}
          />
          <div>
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-blue-500">{profession}</p>
          </div>
        </div>
  
        {/* Feedback */}
        <p className="mt-4 text-gray-600">{feedback}</p>
  
        {/* Rating */}
        <div className="mt-3 flex items-center">
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