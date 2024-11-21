/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";

const RevCard = ({review}) => {
    const { name, profession, feedback, rating, image } = review;

    return (
      <div className="group p-6 bg-gradient-to-r from-white to-[#FAF6E3] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col justify-between h-full animate__animated animate__headShake animate__slow animate__delay-3s animate__infinite">
       
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 rounded-full border-4 border-[#c3002f] group-hover:scale-110 transition-transform duration-300"
            src={image}
            alt={`${name}'s profile`}
          />
          <div>
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-blue-500 font-medium">{profession}</p>
          </div>
        </div>
  
        
        <p className="mt-4 text-gray-700 italic">{feedback}</p>
  
     
        <div className="mt-6 flex items-center">
          <StarRatings
            starRatedColor="orange"
            rating={rating}
            numberOfStars={5}
            starDimension="25px"
            starSpacing="3px"
          />
        </div>
      </div>
    );
};

export default RevCard;