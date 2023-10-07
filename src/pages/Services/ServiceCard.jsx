const ServiceCard = ({ service }) => {
  const { id, title, image, price, description } = service || {};
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        {description.length > 120 ? (
          <p className="mb-3 font-normal text-gray-700">
            {description.slice(0, 120)}...
          </p>
        ) : (
          <p className="mb-3 font-normal text-gray-700">{description}</p>
        )}
        <div className="flex justify-between items-center">
          <p>{price}</p>
          <button className="btn btn-neutral text-white capitalize font-semibold text-lg">
            View Details
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
