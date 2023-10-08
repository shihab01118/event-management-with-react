import PropTypes from 'prop-types';

const ServiceDetailsCard = ({service}) => {
    const {title, image, description, price} = service || {};
    return (
        <div className='max-w-6xl mx-auto my-10 flex gap-6'>
            <img src={image} className='w-1/2' />
            <div className='w-1/2'>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p className='my-3 text-justify'>{description}</p>
            <p className='text-xl font-medium'>{price}</p>
            <button className="btn btn-neutral mt-4">Book Now</button>
            </div>
        </div>
    );
};

ServiceDetailsCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceDetailsCard;