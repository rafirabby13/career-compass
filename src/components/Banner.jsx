import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
//   const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: "vertical",
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//   });
  return (
    <div className=" max-w-[85%] mx-auto">
       <Swiper
      // Include Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      slidesPerView={1}
      navigation
      
    
    >
      {/* Define individual slides */}
      <SwiperSlide><img className="h-[600px] w-full " src={s1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="h-[600px] w-full" src={s2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="h-[600px] w-full" src={s3} alt="" /></SwiperSlide>
     
    </Swiper>
    </div>
  );
};

export default Banner;
