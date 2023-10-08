import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const ServiceCard = ({ service }) => {
  const { title, image, price, description } = service || {};
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow"
      data-aos="flip-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#0B0B0B]">
          {title}
        </h5>
        {description.length > 120 ? (
          <p className="mb-5 font-normal text-gray-700 text-justify">
            {description.slice(0, 120)}...
          </p>
        ) : (
          <p className="mb-5 font-normal text-gray-700 text-justify">
            {description}
          </p>
        )}
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-500">{price}</p>
          <Link to={`/service/${title}`}>
            <button className="btn bg-gradient-to-r from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
