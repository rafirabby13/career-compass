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
        <div className=" py-20">
            <h1 className="text-4xl font-bold  border-b-[5px] border-[#c3002f]   shadow-2xl p-8 mb-20">Our Services</h1>
            <div className="grid grid-cols-3 gap-5">
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