/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const MyProfile = () => {
  const { user, updateUserPRofile } = useContext(AuthContext);

  const { displayName, email, photoURL, uid } = user;
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateUserPRofile(name, photoURL)
      .then(() => {
        console.log("updated");
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen max-w-[80%] mx-auto">
      <div className="text-center space-y-4">
        <h2 className="font-semibold text-3xl">Welcome, {displayName}!</h2>
        <img
          src={photoURL}
          alt="User Profile"
          className="rounded-full mx-auto"
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
