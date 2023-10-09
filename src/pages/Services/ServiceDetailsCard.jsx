import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const ServiceDetailsCard = ({ service }) => {
  const { title, image, description, price } = service || {};
  return (
    <div>
      <Helmet>
        <title>EVENTA | service</title>
      </Helmet>
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto py-5  md:py-10 md:flex gap-6">
        <img src={image} className="md:w-1/2 rounded-lg" />
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-4xl font-semibold text-[#0b0b0b]">{title}</h2>
          <p className="my-3 text-justify text-gray-700">{description}</p>
          <div className="flex md:block justify-between items-center">
            <p className="text-xl font-medium text-gray-700">{price}</p>
            <button className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize md:mt-4">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceDetailsCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceDetailsCard;
