/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Services from "./Services.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <section className=" max-w-[85%] mx-auto">
        <Banner />
      </section>
      <section className=" max-w-[85%] mx-auto">
        <Services/>
      </section> */}
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Home;
