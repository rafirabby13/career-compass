import img from '../assets/df.png'

const Team = () => {
    return (
        <div className='py-10'>
            <div>
                <h1>Our Experts</h1>
                <p>Dedicated Career Counseling Team</p>
            </div>

            <div className='grid grid-cols-4 gap-10'>
                <div>
                    <img className='h-60 mx-auto w-full' src={img} alt="" />
                    <p>Emily Carter</p>
                    <p>Career Strategy Architect</p>
                </div>
                <div>
                    <img className='h-60 mx-auto w-full' src={img} alt="" />
                    <p>James Harper</p>
                    <p>Leadership and Personal Development</p>
                </div>
                <div>
                    <img className='h-60 mx-auto w-full' src={img} alt="" />
                    <p>Priya Shah</p>
                    <p>Career Change Specialist</p>
                </div>
                <div>
                    <img className='h-60 mx-auto w-full' src={img} alt="" />
                    <p>Ethan Brooks</p>
                    <p>Youth Career Coach</p>
                </div>
            </div>
        </div>
    );
};

export default Team;