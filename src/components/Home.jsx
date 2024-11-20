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
      {/* <CategoryNav /> */}
      <Services />
      <Feature/>
      <Reviews/>
     </section>
      
      <Outlet />
      
    </div>
  );
};

export default Home;
