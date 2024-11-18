import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Link } from "react-router-dom";

const Login = () => {
    const { loginWithEmailPass, loginWithGoogle } = useContext(AuthContext);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("object");
      const email = e.target.email.value;
      const password = e.target.password.value;
      loginWithEmailPass(email, password)
        .then((res) => {
          console.log(res.user);
         
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    const handleGoogleSignUp=()=>{
      loginWithGoogle()
      .then(res=>{
          console.log(res.user);
      })
      .catch(err=>{
          console.log(err.message);
      })
    }
    return (
        <div className="max-w-lg mx-auto ">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl ">
          <form className="card-body" onSubmit={handleSubmit}>
           
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
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="py-2">Don't have a account? <Link className="text-lg text-green-600 underline" to='/register'>Register</Link></p>
          </form>
        </div>
        <div className="">
          <div className="divider divider-accent py-10">Or</div>
          <button onClick={handleGoogleSignUp} className="border-2 p-4 w-full font-bold text-lg rounded-lg bg-slate-100 border-green-600">Sign Up With Google</button>
        </div>
      </div>
    );
};

export default Login;