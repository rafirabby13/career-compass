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
        <div className="py-40 max-w-[85%] mx-auto">
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