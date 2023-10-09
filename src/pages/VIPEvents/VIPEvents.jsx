import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";
import { Helmet } from "react-helmet-async";

const VIPEvents = () => {
    const vipEvents = useLoaderData();
    console.log(vipEvents);
  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto py-8">
      <Helmet>
        <title>EVENTA | VIP Events</title>
      </Helmet>
      <h2 className="text-3xl md:text-4xl text-[#0B0B0B] font-bold text-center mb-6 md:mb-0">
        Join Our VIP Events
      </h2>
      <p className="text-gray-700 leading-7 text-lg text-center mx-auto mt-3 md:max-w-2xl">
      Explore our exclusive VIP events, where luxury and exclusivity meet. Get access to high-profile gatherings, elite parties, and premium experiences that are reserved for a select few. Join the inner circle of our most prestigious events.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {vipEvents?.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default VIPEvents;
