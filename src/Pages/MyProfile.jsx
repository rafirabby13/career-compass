/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init.js";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, updateUserPRofile, setUser, loading, setUpdating } =
    useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center gap-10">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const { displayName, email, photoURL, uid } = user;

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then((res) => {
        navigate("/");
        setUpdating((prev) => !prev);
        e.target.reset();
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen lg:max-w-[80%] mx-auto pb-20">
      <Helmet>
        <title>Profile | Career Compass</title>
      </Helmet>

      <div className="text-center space-y-6 lg:px-6 py-4 lg:py-16 bg-[#FAF6E3] rounded-lg shadow-lg">
        {/* Welcome Section */}
        <h2 className="font-bold text-xl lg:text-4xl text-[#c3002f]">
          Welcome, {displayName}!
        </h2>
        <img
          src={photoURL}
          alt="User Profile"
          className="rounded-full w-48 h-48 border-4 border-indigo-500 mx-auto"
        />
        <p className="text-xl lg:text-3xl text-[#c3002f] font-medium">
          Email: {user.email}
        </p>
        <p className="text-xl lg:text-2xl text-[#c3002e94] font-medium">
          photoURL: {user.photoURL}
        </p>

        {/* Edit Profile Section */}
        <h3 className="font-bold text-2xl lg:text-4xl text-black mt-6">
          Edit Your Profile
        </h3>
         <div className="card bg-white shadow-md w-full max-w-md mx-auto my-10 rounded-lg">
          <form className="card-body space-y-4" onSubmit={handleProfileUpdate}>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Your Photo URL"
                className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
           
            <div className="form-control mt-6">
              <button className="btn bg-[#c3002f] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#da2b53] focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Save The Changes
              </button>
            </div>
          </form>
        </div> 
     
     

      </div>
    </div>
  );
};

export default MyProfile;
