import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";

const Team = () => {
  return (
    <div className="py-20">
      <div className="text-center py-10 space-y-5">
        <h1 className="text-5xl text-start font-bold border-b-[5px] border-[#DE7C7D]  shadow-2xl p-8 mb-20">
          Our Experts
        </h1>
        <p className="text-4xl font-bold text-black border-b-[5px] border-[#DE7C7D] w-fit mx-auto my-10">
          Dedicated Career Counseling Team
        </p>
      </div>

      <div className="grid grid-cols-4 gap-10 py-10">
        <div className="space-y-3 pb-5 text-center bg-slate-100">
          <img className="h-80 mx-auto w-full hover:scale-125 transition-all duration-500" src={w1} alt="" />
          <p className="text-red-500 font-bold text-xl">Emily Carter</p>
          <p className="text-lg">Career Strategy Architect</p>
        </div>
        <div className="space-y-3 pb-5 text-center bg-slate-100">
          <img className="h-80 mx-auto w-full hover:scale-125 transition-all duration-500" src={m1} alt="" />
          <p className="text-red-500 font-bold text-xl">James Harper</p>
          <p className="text-lg">Leadership and Personal Development</p>
        </div>
        <div className="space-y-3 pb-5 text-center bg-slate-100">
          <img className="h-80 mx-auto w-full hover:scale-125 transition-all duration-500" src={w2} alt="" />
          <p className="text-red-500 font-bold text-xl">Priya Shah</p>
          <p className="text-lg">Career Change Specialist</p>
        </div>
        <div className="space-y-3 pb-5 text-center bg-slate-100">
          <img className="h-80 mx-auto w-full hover:scale-125 transition-all duration-500" src={m2} alt="" />
          <p className="text-red-500 font-bold text-xl">Ethan Brooks</p>
          <p className="text-lg">Youth Career Coach</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
