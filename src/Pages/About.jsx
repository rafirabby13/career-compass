import Choose from "../components/Choose.jsx";
import Subscribe from "../components/subscribe.jsx";
import Team from "../components/Team.jsx";

const About = () => {
    return (
        <div  className='max-w-[80%] mx-auto'>
            <Choose/>
            <Team/>
            <Subscribe/>
        </div>
    );
};

export default About;