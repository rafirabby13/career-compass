/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import err from "../assets/404_page_cover.jpg";
const Error = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center lg:py-20 gap-10 shadow-2xl lg:w-1/2 mx-auto mt-10 py-10 lg:mt-40 lg:p-20  bg-slate-100">
      <div>
        <img className="lg:h-52 rounded-lg" src={err} alt="" />
      </div>
      <div className="text-center">
        <p className="text-3xl font-semibold ">Oops! The page you are looking for doesn't exist.</p>
        <Link  to="/" className="home-button btn bg-[#c3002f] text-[#FFF0D1]">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
