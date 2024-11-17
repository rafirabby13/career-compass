import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" max-w-[85%] mx-auto">
        <Banner />
      </section>
      <section className="min-h-screen max-w-[85%] mx-auto">Home Home</section>
      <Footer />
    </div>
  );
};

export default Home;
