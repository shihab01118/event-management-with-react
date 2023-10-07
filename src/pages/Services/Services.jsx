import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3">
                <div className="flex items-center justify-center"><h2>Explore Services</h2></div>
                <div className="col-span-2">
                    <p className="text-justify">At EVENTA, we are dedicated to turning your special moments into unforgettable experiences. Our team of expert event planners is here to cater to all your event needs, ensuring every detail is meticulously planned and executed.
                     Whether it{"'"}s a joyous wedding celebration, a fun-filled birthday party, a heartwarming anniversary, a sweet engagement party, a well-deserved retirement bash, or a charming baby shower, we{"'"}ve got you covered.
                     </p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8">
                {
                    services?.map(service => <ServiceCard key={service?.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;