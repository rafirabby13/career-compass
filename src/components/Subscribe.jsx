const Subscribe = () => {
  return (
   <div>
    <h1 className="text-5xl text-start font-bold border-b-[5px] border-[#DE7C7D]  shadow-2xl p-8 mb-20">
          Join With Us..
        </h1>
     <div className="flex items-center justify-between py-20 text-[#000000c2] bg-[#FFF7D1] 
    px-10 mb-20 shadow-lg">
      
      <div >
        <p className="text-2xl font-semibold">keep up to date with advantage</p>
        <p className="text-5xl font-bold">Subscribe to Our Newsletter</p>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs rounded-none bg-[#fffffffb] placeholder:text-xl placeholder:font-medium text-black outline-none"
        />
        <button className="btn bg-[#c3002f] border-none text-[#ffffffca] rounded-none text-xl">Subscribe</button>
      </div>
    </div>
   </div>
  );
};

export default Subscribe;
