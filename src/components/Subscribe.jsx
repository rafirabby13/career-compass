const Subscribe = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p>keep up to date with advantag</p>
        <p>Subscribe to Our Newsletter</p>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
