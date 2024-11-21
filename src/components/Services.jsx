import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('../data.json')
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setServices(data)
        })
    },[])
    return (
        <div className=" pb-20 mt-10  lg:py-20 lg:max-w-[85%] mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold border-b-[3px] lg:border-b-[5px] border-[#c3002f] shadow-md  lg:shadow-2xl p-2 lg:p-8 mb-20 text-center lg:text-start">Our Services</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-1   md:gap-5 ">
                {
                    services.map(service=><ServiceCard
                    key={service.id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;