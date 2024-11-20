import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import logo from "../assets/logo.jpg";
import Swal from "sweetalert2";



const Navbar = () => {
  const { user, logoutUser,loading } = useContext(AuthContext);
  // console.log(user);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center gap-10">
        
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // console.log('success');
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Logged Out!",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
          text: "Something went wrong!",
        });
        console.log(err.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className={({isActive})=> isActive ? 'bg-[#c3002f] text-[#FFF0D1] font-bold' : ''}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({isActive})=> isActive ? 'bg-[#ee0c40] text-[#FFF0D1] font-bold' : ''}>My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({isActive})=> isActive ? 'bg-[#c3002f] text-[#FFF0D1] font-bold' : ''}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-[#dff2eb2f] max-w-[85%] mx-auto py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 animate__animated animate__flip animate__slow animate__delay-3s animate__infinite rounded-full"
            src={logo}
            alt=""
          />
          <Link to="/" className="font-bold text-2xl ">
            Career Compass
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center gap-5">
            <Link onClick={handleLogout} className="btn bg-[#c3002f] text-[#FFF0D1]">
              Logout
            </Link>
            <img
              className={`h-16 w-16 rounded-full `}
              src={`${user?.photoURL}`}
              title={user?.displayName}
              alt={user?.displayName}
            />
          </div>
        ) : (
          <Link to="/login" className="btn bg-[#c3002f] text-[#FFF0D1]">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
