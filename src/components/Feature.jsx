import lady from "../assets/lady.jpg";
import success from "../assets/11_Success-1.jpg";
import career from "../assets/career-58 (1)-min.png";
import guide from "../assets/icons8-guidance-64.png";
import meeting from "../assets/icons8-meeting-80.png";import 'animate.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";


const Feature = () => {


    const {user} = useContext(AuthContext)



  return (
    <div className="py-40">
        <h1 className="text-5xl font-bold border-b-[5px] border-green-400 mb-5 w-fit  ">Feature</h1>
        <div className="flex gap-20 items-center justify-between  ">
      <div className="w-1/2 relative">
        <img  src={lady} alt="Career Guidance Icon" />
        <img className="hidden lg:flex absolute -bottom-20 -left-20 shadow-2xl rounded-xl  h-60 animate__animated animate__pulse animate__fast animate__delay-3s animate__infinite"  src={career} alt="Career Growth Icon" />
        <img className=" hidden lg:flex absolute -top-20 -right-10  shadow-2xl rounded-xl   h-60 animate__animated animate__pulse animate__fast animate__delay-3s animate__infinite"   src={success} alt="Success Icon" />
      </div>
      <div className="w-1/2 space-y-4">
        <h1 className="text-6xl font-semibold"><span className="text-green-400">Empower Your Career</span> with Expert Guidance</h1>
        <p className="text-xl">
          Take charge of your professional journey with personalized counseling,
          in-demand courses, and proven strategies to achieve your career goals.
        </p>

        <div className="flex items-center gap-5 bg-slate-100 p-7 rounded-lg">
          <img className="h-24" src={meeting} alt="" />
          <div>
            <h1 className="font-bold text-xl mb-1
            ">500+ Tailored Career Counseling Sessions</h1>
            <p className=" font-normal">
              From resume building to interview preparation, access resources
              designed to elevate your career and land your dream job.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 bg-slate-100 p-7 rounded-lg">
          <img className="h-24" src={guide} alt="" />

          <div>
            <h1 className="font-bold text-xl mb-1
            ">1900+ Successful Career Transformations</h1>
            <p className=" font-normal">
              Join a growing community of professionals who’ve unlocked their
              potential through our expert guidance and proven methodologies.
            </p>
          </div>
        </div>

        {
            user ? ''
            :

        <Link to="/register">
          <button className="border-2 px-8 py-3 mt-4 bg-slate-100 cursor-pointer">Register Now</button>
        </Link>
        }
      </div>
    </div>
    </div>
  );
};

export default Feature;
