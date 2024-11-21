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
  
  

  return (
    <div className="pb-10">
      <Swiper
        // Include Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="">
          <div className="flex flex-col lg:flex-row items-center h-full bg-gradient-to-r from-[#DE7C7D]/20  via-white/40 to-purple-500/20 backdrop-blur-3xl justify-between gap-2 lg:gap-0 z-10 pt-10 lg:pt-0">
            <div className=" text-center lg:text-start lg:w-2/5    lg:pl-16 lg:pr-8 space-y-2 lg:space-y-4 ">
              <h2 className="text-lg lg:text-4xl font-bold">
                Discover Your True Potential
              </h2>
              <p className="text-sm lg:text-lg">
                Personalized career guidance to help you unlock your dreams.
              </p>
              <div>
                <Link >
                  <button className="bg-[#c3002f] text-[#FFF0D1] font-semibold lg:py-2 lg:px-4 p-2 text-sm lg:text-xl rounded-lg hover:bg-indigo-100 transition duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full">
              <img className=" h-48 md:h-80 w-full  lg:h-[600px]  " src={s1} alt="" />
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center h-full bg-gradient-to-r from-[#DE7C7D]/20  via-white/40 to-purple-500/20 backdrop-blur-3xl justify-between gap-2 lg:gap-0 z-10 pt-10 lg:pt-0">
            <div className=" text-center lg:text-start lg:w-2/5    lg:pl-16 lg:pr-8 space-y-2 lg:space-y-4 ">
              <h2 className="text-lg lg:text-4xl font-bold">
                Your Path to Success Begins Here
              </h2>
              <p className="text-sm lg:text-lg">
                Expert advice and resources tailored to your aspirations.
              </p>
              <div>
                <Link >
                  <button className="bg-[#c3002f] text-[#FFF0D1] font-semibold lg:py-2 lg:px-4 p-2 text-sm lg:text-xl rounded-lg hover:bg-indigo-100 transition duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full">
              <img className=" h-48 md:h-80 w-full  lg:h-[600px]    " src={s2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center h-full bg-gradient-to-r from-[#DE7C7D]/20  via-white/40 to-purple-500/20 backdrop-blur-3xl justify-between gap-2 lg:gap-0 z-10 pt-10 lg:pt-0">
            <div className=" text-center lg:text-start lg:w-2/5    lg:pl-16 lg:pr-8 space-y-2 lg:space-y-4 ">
              <h2 className="text-lg lg:text-4xl font-bold">
                Make Informed Career Choices
              </h2>
              <p className="text-sm lg:text-lg">
                We provide the tools to help you thrive in your chosen field.
              </p>
              <div>
                <Link >
                  <button className="bg-[#c3002f] text-[#FFF0D1] font-semibold lg:py-2 lg:px-4 p-2 text-sm lg:text-xl rounded-lg hover:bg-indigo-100 transition duration-300">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full">
              <img className=" h-48 md:h-80 w-full  lg:h-[600px]    " src={s3} alt="" />
            </div>
          </div>
        </SwiperSlide>  
      </Swiper>
    </div>
  );
};

export default Banner;
