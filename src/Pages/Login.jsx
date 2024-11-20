/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import ForgetPassword from "./ForgetPassword.jsx";
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithEmailPass, loginWithGoogle, setEmail, setUser, setUpdating } = useContext(AuthContext);
  const [hide, setHide] = useState(true);
  const [err, setErr] = useState("");
  


  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    

    loginWithEmailPass(email, password)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user)
        Swal.fire({
          icon: "success",
          title: "Success..",
          text: "Logged in!",
        });
        navigate(location?.state  ? location.state : '/')
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Incorrect password!",
          text: `${err.message}, `,
        });
        setErr(err.message);
      });
  };

  const handleGoogleSignUp = () => {
    loginWithGoogle()
      .then((res) => {
        setUpdating((prev)=>!prev)
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          icon: "success",
          title: "Yess...",
          text: "Logged in!",
        });
          // console.log(res.user);
          setUser(res.user)
      })
      .catch((err) => {
        setErr(err.message);
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: `${err.message}`,
        });
      });
  };
  const handlePassShow = () => {
    setHide(!hide);
    // console.log(email);
  };
  return (
    <div className="max-w-lg mx-auto py-20">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl ">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

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
          {/* <p className="text-2xl text-red-500 font-bold">{err}</p> */}
          <label className="label">
            <Link to='/forgetPassword' href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="py-2">
            Don't have a account?{" "}
            <Link className="text-lg text-green-600 underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="">
        <div className="divider divider-accent py-10">Or</div>
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

export default Login;
