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
    <div>
      <form
        onSubmit={handleAddComment}
        className="flex items-center gap-5 justify-center py-20 w-2/4 mx-auto"
      >
        <img className="h-20 p-3 w-20 border-[7px]  rounded-full" src={user2} alt="" />
        <input
          type="text"
          name="comment"
          placeholder="Comment here"
          className="input input-bordered w-full "
        />
        <button className="btn bg-[#c3002f] text-gray-100">Comment</button>
      </form>
      <div>
        <div className=" py-20 w-2/4 mx-auto">
          <h1 className="text-3xl font-bold mb-5">Comments....</h1>

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
                <p>
                   {comment}
                </p>
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
