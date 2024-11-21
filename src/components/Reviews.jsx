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
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 828,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" pb-28 ">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold border-b-[3px] lg:border-b-[5px] border-[#c3002f] shadow-md  lg:shadow-2xl p-2 lg:p-8 mb-4 md:mb-16 lg:mb-20 text-center lg:text-start">
        What Client Say's About Us..
      </h1>
      <div className="slider-container pb-20">
        <Slider {...settings} className="h-full ">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
