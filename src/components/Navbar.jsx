import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import logo from "../assets/logo (2).jpg";
import Swal from "sweetalert2";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [hide, setHide] = useState(true);
  const { user, logoutUser, loading } = useContext(AuthContext);
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#c3002f] text-[#FFF0D1] font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "bg-[#c3002f] text-[#FFF0D1] font-bold" : ""
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-[#c3002f] text-[#FFF0D1] font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  const handleHideShow = () => [setHide(!hide)];
  return (
    <div className="navbar  bg-[#dff2eb2f] lg:max-w-[85%] mx-auto py-3 lg:py-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="z-50 lg:hidden mr-3">
            <div onClick={handleHideShow} className="text-3xl">
              {hide ? (
                <div>
                  <HiBars3CenterLeft />
                </div>
              ) : (
                <div>
                  <RxCross1 />
                </div>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className={`   ${hide ? '' : 'bg-base-100 menu menu-sm dropdown-content  rounded-box  mt-3 w-52 p-2  z-50 shadow'}`}
          >
            {hide ? "" : links}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 animate__animated animate__flip animate__slow animate__delay-3s animate__infinite rounded-full hidden lg:flex"
            src={logo}
            alt=""
          />
          <Link to="/" className="font-bold text-sm lg:text-2xl ">
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
            <Link
              onClick={handleLogout}
              className="text-sm py-1 px-2 rounded-md lg:btn bg-[#c3002f] text-[#FFF0D1]"
            >
              Logout
            </Link>
            <img
              className={`h-10 w-10 lg:h-16 lg:w-16 rounded-full `}
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
