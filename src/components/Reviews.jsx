/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("../review.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);
  const settings = {
  
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "ease"
  };
  return (
    <div className="">
        <h1 className="text-5xl font-bold border-b-[5px] border-[#DE7C7D] shadow-xl p-8   mb-20 ">What Client Say's About Us..</h1>
     <div className="slider-container pb-20">
     <Slider {...settings} className="h-full">
        
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
          ))}
      
      </Slider>
     </div>
    </div>
  );
};

export default Reviews;
