/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { auth, AuthContext } from "../Providers/AuthProvider.jsx";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user, updateUserPRofile , setUser} = useContext(AuthContext);

  const { displayName, email, photoURL, uid } = user;

  const navigate = useNavigate();

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    await updateUserPRofile(displayName, photoURL)
      .then((res) => {
        navigate("/");
        console.log("updated");
        auth.currentUser.reload()
        const updatedUser = auth.currentUser;
        console.log(updatedUser);
        setUser(updatedUser)
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen max-w-[80%] mx-auto pb-20">
      <Helmet>
        <title>Profile | Career Compass</title>
      </Helmet>
      <div className="text-center space-y-4">
        <h2 className="font-semibold text-3xl">Welcome, {displayName}!</h2>
        <img
          src={photoURL}
          alt="User Profile"
          className="rounded-full mx-auto h-[300px]"
        />
        <p>Email: {user.email}</p>

        <h3 className="font-semibold text-3xl">Edit Your Profile</h3>
        <div className="card bg-base-100 w-full max-w-md mx-auto my-10 shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleProfileUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Save The Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
