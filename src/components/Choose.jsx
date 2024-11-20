/* eslint-disable react/no-unescaped-entities */
import coaching from "../assets/coaching.svg";
import skill from '../assets/skill.svg'
import interview from '../assets/interview.svg'
import career from '../assets/career.svg'
const Choose = () => {
  return (
    <div>
      <div className="text-center py-10 space-y-8">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold border-b-[3px] lg:border-b-[5px] border-[#c3002f] shadow-md  lg:shadow-2xl p-2 lg:p-8 lg:mb-20 text-center lg:text-start">Why Choose Us</h1>
        <p className="text-xl lg:text-4xl font-semibold text-[#c3002f]">
          <em>"Your Career, Our Commitment"</em>
        </p>
        <p className="text-sm lg:text-2xl font-normal text-black">
          Discover the advantages of expert guidance and personalized support at
          every stage of your professional journey. Together, let’s unlock your
          potential and achieve your goals.
        </p>
      </div>

      <div className="cards-section grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <div className="  space-y-3 shadow-lg p-5 rounded-lg bg-slate-100">
          <img className="h-20  lg:h-32 shadow-lg " src={coaching} alt="" />
          <div className="divider divider-end text-[#13131377] text-5xl font-bold py-6">01</div>
          <h1 className="text-xl lg:text-2xl font-semibold text-black">Coaching Session</h1>
          <p className="text-sm lg:text-xl">One-on-one personalized coaching to help you explore career options, set goals, and create actionable plans for success. 
          </p>
        </div>
        <div className="  space-y-3 shadow-lg p-5 rounded-lg bg-slate-100">
          <img className="h-20  lg:h-32 shadow-lg " src={skill} alt="" />
          <div className="divider divider-end text-[#13131377] text-5xl font-bold py-6">02</div>
          <h1 className="text-xl lg:text-2xl font-semibold text-black">Skill Development Workshop</h1>
          <p className="text-sm lg:text-xl">
          Intensive workshops focused on enhancing key skills like communication, leadership, and technical expertise to boost your career.
          </p>
        </div>
        <div className="  space-y-3 shadow-lg p-5 rounded-lg bg-slate-100">
          <img className="h-20  lg:h-32 shadow-lg " src={career} alt="" />
          <div className="divider divider-end text-[#13131377] text-5xl font-bold py-6">03</div>
          <h1 className="text-xl lg:text-2xl font-semibold text-black">Career Mapping Consultation</h1>
          <p className="text-sm lg:text-xl">
          Get expert insights into potential career paths tailored to your strengths, interests, and industry trends.
          </p>
        </div>
        <div className="  space-y-3 shadow-lg p-5 rounded-lg bg-slate-100">
          <img className="h-20  lg:h-32 shadow-lg " src={interview} alt="" />
          <div className="divider divider-end text-[#13131377] text-5xl font-bold py-6">04</div>
          <h1 className="text-xl lg:text-2xl font-semibold text-black">Interview Preparation Service</h1>
          <p className="text-sm lg:text-xl">
          Master the art of interviewing with mock sessions, feedback, and strategies to leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
