import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const TeamMember = ({ member }) => {
  const { image, name, position } = member || {};
  return (
    <div
      className="bg-white p-5 rounded-lg shadow-xl"
      data-aos="fade-up"
      data-aos-duration="1000"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
    >
      <img src={image} alt={`image of ${name}`} className="" />
      <div className="text-center p-5 space-y-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="uppercase tracking-widest font-medium text-lg">
          {position}
        </p>
        <div className="flex justify-center gap-3">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.object,
};

export default TeamMember;
