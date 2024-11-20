/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import {  AuthContext } from "../Providers/AuthProvider.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import Swal from "sweetalert2";
import auth from "../Firebase/Firebase.init.js";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [err, setErr] = useState("");
  const [hide, setHide] = useState(true);
  const { registerUser, updateUserPRofile, loginWithGoogle, setUser, setUpdating } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    setErr("");
    const lower = /[a-z]/;
    const upper = /[A-Z]/;
    if (password.length > 5) {
      if (upper.test(password)) {
        if (lower.test(password)) {
          registerUser(email, password)
            .then((res) => {
              console.log(res.user);

              // setUser(res.user);
              updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL,
              })
                .then((res) => {
                console.log(res);
                setUpdating((prev)=>!prev)

                  e.target.reset();
                  Swal.fire({
                    icon: "success",
                    title: "Yess...",
                    text: "Registered and logged in!",
                  });
                  navigate(location?.state ? location.state : "/");
                })
                .catch((err) => {
                  console.log(err.message);
                  Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: `${err.message}`,
                  });
                  setErr(err.message);
                });
            })
            .catch((err) => {
              console.log(err.message);
              Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: `${err.message}`,
              });
              setErr(err.message);
            });
        } else {
          setErr("Password must contain a lower case");
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: `Password must contain a lower case`,
          });
        }
      } else {
        setErr("Password Must contain An Uppercase");
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: `Password Must contain An Uppercase`,
        });
      }
    } else {
      setErr("Password Must be at least 6 characters");
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: `Password Must be at least 6 characters`,
      });
    }
  };

  const handleGoogleSignUp = () => {
    loginWithGoogle()
      .then((res) => {
        // console.log(res.user);
        setUpdating((prev)=>!prev)
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          icon: "success",
          title: "Yess...",
          text: "Registered and logged in!",
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: `${err.message}`,
        });
        setErr(err.message);
      });
  };
  const handlePassShow = () => {
    setHide(!hide);
    // console.log(hide);
  };
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
            <div className="flex items-center relative">
              <input
                type={hide ? "password" : "text"}
                name="password"
                placeholder="Your password"
                className="input input-bordered w-full"
                required
              />
              <div
                onClick={handlePassShow}
                className="text-2xl absolute right-3 cursor-pointer"
              >
                {hide ? <BsEyeSlash /> : <BsEyeFill />}
              </div>
            </div>
          </div>
          {/* <p className="text-2xl text-red-500 font-bold">{err}</p> */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="py-2">
            Already have a account?{" "}
            <Link className="text-lg text-green-600 underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="">
        <div className="divider divider-accent py-10">OR</div>
        <button
          onClick={handleGoogleSignUp}
          className="border-2 p-4 w-full font-bold text-lg rounded-lg bg-slate-100 border-green-600"
        >
          Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
