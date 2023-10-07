import PropTypes from 'prop-types';

const ServiceDetailsCard = ({service}) => {
    const {title, image, description, price} = service || {};
    return (
        <div>
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

ServiceDetailsCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceDetailsCard;