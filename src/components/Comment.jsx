import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import user2 from "../assets/user.png";

const Comment = () => {
  const { comment, setComment, user } = useContext(AuthContext);
  const handleAddComment = (e) => {
    e.preventDefault();
    if (e.target.comment.value.length > 0) {
      setComment([...comment, e.target.comment.value]);
      e.target.comment.value = "";
    }
  };
  return (
    <div className="py-20 lg:py-0">
      <form
        onSubmit={handleAddComment}
        className="flex flex-col lg:flex-row items-center gap-5 justify-center py-8 lg:py-20 xl:w-3/4 mx-auto px-0 md:px-32 "
      >
        <img
          className="h-20 p-3 w-20 border-[7px]  rounded-full"
          src={user2}
          alt=""
        />
        <input
          type="text"
          name="comment"
          placeholder="Comment here"
          className="input input-bordered w-full "
        />
        <button className="btn bg-[#c3002f] text-gray-100 w-full lg:w-fit">
          Comment
        </button>
      </form>
      <div>
        <div className=" lg:py-20 xl:w-3/4  mx-auto px-0 md:px-32">
          <h1 className="text-xl lg:text-3xl font-bold mb-5">Comments....</h1>

          <div className="flex flex-col gap-5">
            {comment?.map((comment, index) => (
              <div key={index} className="flex items-center gap-4 border-2 p-4">
                <img
                  className="h-20 w-20 rounded-full border-[5px] p-1"
                  src={user.photoURL}
                  alt=""
                />
                <div className="text-xl">
                  <p className="font-bold ">{user.email}</p>
                  <p className="text-sm lg:text-xl">{comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
