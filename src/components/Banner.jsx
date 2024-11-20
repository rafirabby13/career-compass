import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

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
    <div className=" ">
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
        <SwiperSlide>
          <div className="flex items-center h-full bg-gradient-to-r from-blue-500/20 via-white/40 to-purple-500/20 backdrop-blur-3xl justify-between">
            <div className="  w-2/5    pl-16 pr-8 space-y-4">
              <h2 className="text-4xl font-bold">
                Discover Your True Potential
              </h2>
              <p className="text-lg">
                Personalized career guidance to help you unlock your dreams.
              </p>
              <div>
                <Link to="/login">
                  <button className="bg-[#c3002f] text-[#FFF0D1] font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <img className="h-[600px]  " src={s1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center h-full bg-gradient-to-r from-blue-500/20 via-white/40 to-purple-500/20 backdrop-blur-3xl justify-between">
            <div className="  w-2/5    pl-16 pr-8 space-y-4">
              <h2 className="text-4xl font-bold">
                Your Path to Success Begins Here
              </h2>
              <p className="text-lg">
                Expert advice and resources tailored to your aspirations.
              </p>
              <div>
                <Link to="/login">
                  <button className="bg-[#c3002f] text-[#FFF0D1] font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <img className="h-[600px]  " src={s2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center h-full bg-gradient-to-r from-blue-500/20 via-white/40 to-purple-500/20 backdrop-blur-3xl justify-between">
            <div className="  w-2/5   pl-16 pr-8 space-y-4">
              <h2 className="text-4xl font-bold">
                Make Informed Career Choices
              </h2>
              <p className="text-lg">
                We provide the tools to help you thrive in your chosen field.
              </p>
              <div>
                <Link to="/login">
                  <button className="bg-[#c3002f] text-[#FFF0D1] font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-/2">
              <img className="h-[600px]  " src={s3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
