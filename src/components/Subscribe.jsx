const Subscribe = () => {
  return (
    <div className="py-20 lg:py-0">
      <h1 className="text-xl lg:text-4xl font-bold border-b-[3px] lg:border-b-[5px] border-[#c3002f] shadow-md  lg:shadow-2xl p-2 lg:p-8 lg:mb-20 mb-10 text-center lg:text-start ">
        Join With Us..
      </h1>
      <div
        className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-20 text-[#000000c2] bg-[#FFF7D1] 
    lg:px-10 px-1 mb-20 shadow-lg border-2 p-0 gap-10 md:py-10"
      >
        <div className="text-center lg:text-start mb-5 lg:mb-0 ">
          <p className="text-xl lg:text-2xl font-semibold">
            keep up to date with advantage
          </p>
          <p className="text-2xl lg:text-5xl font-bold">
            Subscribe to Our Newsletter
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2  w-full ">
          <div className="w-2/3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full   lg:max-w-xs rounded-none bg-[#fffffffb] placeholder:text-xl placeholder:font-medium text-black outline-none"
            />
          </div>
          <div className="w-1/3">
          <button className="btn bg-[#c3002f] border-none text-[#ffffffca] rounded-none text-xl w-full lg:w-fit">
            Subscribe
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
