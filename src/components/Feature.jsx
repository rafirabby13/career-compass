import lady from "../assets/lady.jpg";
import success from "../assets/11_Success-1.jpg";
import career from "../assets/career-58 (1)-min.jpg";
import guide from "../assets/icons8-guidance-64.png";
import meeting from "../assets/icons8-meeting-80.png";
import "animate.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const Feature = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pb-20 lg:py-20">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold border-b-[3px] lg:border-b-[5px] border-[#c3002f] shadow-md  lg:shadow-2xl p-2 lg:p-8 mb-4 lg:mb-20 text-center lg:text-start">
        Feature
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 items-center justify-between space-y-5 py-10 lg:py-0">
        <div className="lg:w-1/2 relative">
          <img src={lady} alt="Career Guidance Icon" />
          <img
            className="hidden xl:flex absolute -bottom-20 -left-20 shadow-2xl rounded-xl  xl:h-40 2xl:h-60 animate__animated animate__pulse animate__fast animate__delay-3s animate__infinite "
            src={career}
            alt="Career Growth Icon"
          />
          <img
            className=" hidden xl:flex absolute -top-20 -right-10  shadow-2xl rounded-xl   xl:h-40 2xl:h-60  animate__animated animate__pulse animate__fast animate__delay-3s animate__infinite"
            src={success}
            alt="Success Icon"
          />
        </div>
        <div className="lg:w-1/2 space-y-2 lg:space-y-5">
          <h1 className="text-xl text-center lg:text-start  md:text-3xl xl:text-5xl font-semibold">
            <span className="text-[#e77577]">Empower Your Career</span> with
            Expert Guidance
          </h1>
          <p className="text-sm text-center lg:text-start  lg:text-lg xl:text-xl">
            Take charge of your professional journey with personalized
            counseling, in-demand courses, and proven strategies to achieve your
            career goals.
          </p>

          <div className="md:px-20 lg:px-0 space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-5 bg-slate-100 p-2 lg:p-7 rounded-lg">
              <img className="h-24 " src={meeting} alt="" />
              <div>
                <h1
                  className="font-bold text-center lg:text-start text-sm xl:text-xl mb-1
            "
                >
                  500+ Tailored Career Counseling Sessions
                </h1>
                <p className="text-sm text-center lg:text-start   font-normal">
                  From resume building to interview preparation, access
                  resources designed to elevate your career and land your dream
                  job.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 bg-slate-100 p-2 lg:p-7 rounded-lg">
              <img className="h-24" src={guide} alt="" />

              <div>
                <h1
                  className="font-bold text-center lg:text-start text-sm xl:text mb-1
            "
                >
                  1900+ Successful Career Transformations
                </h1>
                <p className="text-sm text-center lg:text-start   font-normal">
                  Join a growing community of professionals who’ve unlocked
                  their potential through our expert guidance and proven
                  methodologies.
                </p>
              </div>
            </div>
          </div>

          {user ? (
            ""
          ) : (
            <div className="text-center lg:text-start">
              <Link to="/register" className="">
                <button className="bg-[#c3002f] text-[#FFF0D1] p-1 lg:px-4 lg:py-2 rounded hover:bg-[#930123] transition duration-300 cursor-pointer">
                  Register Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feature;
