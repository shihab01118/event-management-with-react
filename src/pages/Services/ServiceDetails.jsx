import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";


const ServiceDetails = () => {
    const [service, setService] = useState({})
    const {title} = useParams()
    const services = useLoaderData();

    useEffect(() => {
        const matchedService = services?.find(service => service.title === title)
        setService(matchedService)
    }, [services, title])

    return (
        <div>
            <ServiceDetailsCard service={service}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;