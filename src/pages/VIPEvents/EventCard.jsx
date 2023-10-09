import PropTypes from "prop-types";

const EventCard = ({ event }) => {
  const { eventName, date, time, venue, description, ticketPrice, cover } =
    event || {};
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow"
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <img className="rounded-t-lg" src={cover} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#0B0B0B]">
          {eventName}
        </h5>
        <p className="my-2 font-normal text-gray-700 text-justify">
          {description}
        </p>
        <p className="text-lg font-medium text-gray-700">Venue: {venue}</p>
        <div className="flex justify-between mb-3 text-gray-500 font-medium">
            <p>Date: {date}</p>
            <p>{time}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-500">
            Ticket Price: {ticketPrice}
          </p>
          <button className="btn bg-gradient-to-r from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
};

export default EventCard;
