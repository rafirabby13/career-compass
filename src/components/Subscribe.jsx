const Subscribe = () => {
  return (
    <div className="flex items-center justify-between py-20 bg-[#c3002f] text-white
    px-4 mb-20">
      <div >
        <p className="text-xl font-semibold">keep up to date with advantage</p>
        <p className="text-4xl font-bold">Subscribe to Our Newsletter</p>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs rounded-none bg-[#fffffffb] placeholder:text-xl placeholder:font-medium text-black"
        />
        <button className="btn bg-black border-none text-[#ffffffca] rounded-none">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
