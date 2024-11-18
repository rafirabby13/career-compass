/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Services from "./Services.jsx";
import CategoryNav from "./CategoryNav.jsx";
import Feature from "./Feature.jsx";
import Reviews from "./Reviews.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
     <section className="max-w-[85%] mx-auto">
     <Banner />
      <CategoryNav />
      <Services />
      <Feature/>
      <Reviews/>
     </section>
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
