/* eslint-disable react/no-unescaped-entities */
import coaching from "../assets/coaching.svg";
import skill from '../assets/skill.svg'
import interview from '../assets/interview.svg'
import career from '../assets/career.svg'
const Choose = () => {
  return (
    <div>
      <div className="text-center py-10 space-y-5">
        <h1 className="text-xl font-semibold text-red-500">Why Choose Us</h1>
        <p className="text-3xl font-semibold text-black">
          <em>"Your Career, Our Commitment"</em>
        </p>
        <p className="text-lg font-normal text-black">
          Discover the advantages of expert guidance and personalized support at
          every stage of your professional journey. Together, let’s unlock your
          potential and achieve your goals.
        </p>
      </div>

      <div className="cards-section grid grid-cols-4 gap-6 w-full">
        <div className="  space-y-3 shadow-lg p-5 rounded-lg">
          <img className="h-32 shadow-lg " src={coaching} alt="" />
          <div className="divider divider-end text-[#13131377] text-3xl ">01</div>
          <h1 className="text-2xl font-semibold text-black">Coaching Session</h1>
          <p>One-on-one personalized coaching to help you explore career options, set goals, and create actionable plans for success. 
          </p>
        </div>
        <div className="  space-y-3 shadow-lg p-5 rounded-lg">
          <img className="h-32 shadow-lg " src={skill} alt="" />
          <div className="divider divider-end text-[#13131377] text-3xl">02</div>
          <h1 className="text-2xl font-semibold text-black">Skill Development Workshop</h1>
          <p>
          Intensive workshops focused on enhancing key skills like communication, leadership, and technical expertise to boost your career.
          </p>
        </div>
        <div className="  space-y-3 shadow-lg p-5 rounded-lg">
          <img className="h-32 shadow-lg " src={career} alt="" />
          <div className="divider divider-end text-[#13131377] text-3xl">03</div>
          <h1 className="text-2xl font-semibold text-black">Career Mapping Consultation</h1>
          <p>
          Get expert insights into potential career paths tailored to your strengths, interests, and industry trends.
          </p>
        </div>
        <div className="  space-y-3 shadow-lg p-5 rounded-lg">
          <img className="h-32 shadow-lg " src={interview} alt="" />
          <div className="divider divider-end text-[#13131377] text-3xl">04</div>
          <h1 className="text-2xl font-semibold text-black">Interview Preparation Service</h1>
          <p>
          Master the art of interviewing with mock sessions, feedback, and strategies to leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
