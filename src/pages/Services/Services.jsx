import { useLoaderData, useLocation } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = useLoaderData();
  const location = useLocation();
  
  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10">
      <Helmet>
        {
          location.pathname === "/services" && <title>EVENTA | Services</title>
        }
      </Helmet>
      <div className="md:grid md:grid-cols-3">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl text-[#0B0B0B] md:text-4xl font-bold mb-4 md:mb-0">
            Explore Services
          </h2>
        </div>
        <div className="col-span-2">
          <p className="text-justify md:pl-4 text-gray-700 leading-7 text-lg">
            At EVENTA, we are dedicated to turning your special moments into
            unforgettable experiences. Our team of expert event planners is here
            to cater to all your event needs, ensuring every detail is
            meticulously planned and executed. Whether it{"'"}s any type of
            social event, we{"'"}ve got you covered.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {services?.map((service) => (
          <ServiceCard key={service?.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
