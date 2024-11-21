/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { useLocation, useNavigate } from "react-router-dom";





const ForgetPassword = () => {
    const {email, setEmail, forgetPassword} = useContext(AuthContext)
    

    const navigate = useNavigate()
    const location = useLocation()

    
    const handleReset=(e)=>{
        e.preventDefault()
        console.log(email);
        forgetPassword(email)
        .then(() => {
            // Password reset email sent!
            // ..
            window.location.replace('https://mail.google.com/mail/u/2/#inbox')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ..
          });
    }

   
  return (
    <div className="min-h-screen py-20">
      <div className="card bg-base-100 w-full max-w-md py-10 mx-auto  shrink-0 shadow-2xl">
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email || ''}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button onClick={handleReset} className="btn btn-primary bg-[#c3002f] text-white">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
