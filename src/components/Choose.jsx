import img from '../assets/df.png'
const Choose = () => {
  return (
    <div className='max-w-[80%] mx-auto'>
      <div className=''>
        <h1>Why Choose Us</h1>
        <p>Your Career, Our Commitment</p>
        <p>
          Discover the advantages of expert guidance and personalized support at
          every stage of your professional journey. Together, let’s unlock your
          potential and achieve your goals.
        </p>
      </div>

      <div className="cards-section grid grid-cols-4 gap-10 w-full">
        <div>
        <img className='h-60 mx-auto w-full' src={img} alt="" />
        <div className="divider divider-end">End</div>
          <h1>Personalized Career Coaching</h1>
          <p>
            Receive one-on-one guidance tailored to your strengths, passions,
            and goals. Chart a clear career path that fits your unique
            aspirations.
          </p>
        </div>
        <div>
        <img className='h-60 mx-auto' src={img} alt="" />
        <div className="divider divider-end">End</div>
          <h1>Personalized Career Coaching</h1>
          <p>
            Receive one-on-one guidance tailored to your strengths, passions,
            and goals. Chart a clear career path that fits your unique
            aspirations.
          </p>
        </div>
        <div>
        <img className='h-60 mx-auto' src={img} alt="" />
        <div className="divider divider-end">End</div>
          <h1>Personalized Career Coaching</h1>
          <p>
            Receive one-on-one guidance tailored to your strengths, passions,
            and goals. Chart a clear career path that fits your unique
            aspirations.
          </p>
        </div>
        <div>
        <img className='h-60 mx-auto' src={img} alt="" />
        <div className="divider divider-end">End</div>
          <h1>Personalized Career Coaching</h1>
          <p>
            Receive one-on-one guidance tailored to your strengths, passions,
            and goals. Chart a clear career path that fits your unique
            aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
