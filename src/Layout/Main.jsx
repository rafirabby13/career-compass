import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Main = () => {
    return (
        <div>
            <section className="bg-[#dff2eb2f]">
           <Navbar />
           </section>
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Main;