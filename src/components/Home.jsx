/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Services from "./Services.jsx";
import CategoryNav from "./CategoryNav.jsx";
import Feature from "./Feature.jsx";
import Reviews from "./Reviews.jsx";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home | Career Compass</title>
      </Helmet>
      <section className="lg:max-w-[85%] mx-auto">
        <Banner />
      </section>
      <section className="bg-gradient-to-br from-[#fff] via-[#c3002e19] to-purple-100 rounded-lg shadow-lg">
        <Services />
      </section>

      <section className="lg:max-w-[85%] mx-auto mt-10 lg:mt-0">
        <Feature />
        <Reviews />
      </section>

      <Outlet />
    </div>
  );
};

export default Home;
