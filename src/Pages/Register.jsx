/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState('')
  const { registerUser, updateUserPRofile, loginWithGoogle } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    setErr('')
    registerUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUserPRofile(name, photoURL)
          .then((res) => {
            console.log("res");
          })
          .catch((err) => {
            console.log(err.message);
            setErr(err.message)
          });
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message)

      });
  };

  const handleGoogleSignUp=()=>{
    loginWithGoogle()
    .then(res=>{
        console.log(res.user);
    })
    .catch(err=>{
        console.log(err.message);
        setErr(err.message)

    })
  }
  return (
    <div className="max-w-lg mx-auto ">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl ">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name .."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL ..."
              name="photoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="py-2">Already have a account? <Link className="text-lg text-green-600 underline" to='/login'>Login</Link></p>
        </form>
      </div>
      <div className="">
        <div className="divider divider-accent py-10">Or</div>
        <button onClick={handleGoogleSignUp} className="border-2 p-4 w-full font-bold text-lg rounded-lg bg-slate-100 border-green-600">Sign Up With Google</button>
      </div>
    </div>
  );
};

export default Register;
