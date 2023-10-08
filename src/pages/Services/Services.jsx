import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="grid grid-cols-3">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold">Explore Services</h2>
        </div>
        <div className="col-span-2">
          <p className="text-justify pl-4">
            At EVENTA, we are dedicated to turning your special moments into
            unforgettable experiences. Our team of expert event planners is here
            to cater to all your event needs, ensuring every detail is
            meticulously planned and executed. Whether it{"'"}s any type of social event, we{"'"}ve got you covered.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {services?.map((service) => (
          <ServiceCard key={service?.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
