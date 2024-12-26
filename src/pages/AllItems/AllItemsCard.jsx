import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllItemsCard = ({ item }) => {
    const { _id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = item;
    return (
        <div>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="#">
        <img className="rounded-t-lg w-full h-[300px] object-cover" src={thumbnail} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="p-5">
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <div className="flex flex-col text-sm mt-3">
                        <p>
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p>
                            <span className="font-semibold">Location:</span> {location}
                        </p>
                        <p>
                            <span className="font-semibold">Date:</span>{" "}
                            {new Date(dateLost).toLocaleDateString()}
                        </p>
                        <p>
                            <span className="font-semibold">Contact:</span> {contactName} (
                            <a
                                href={`mailto:${contactEmail}`}
                                className="text-blue-500 underline"
                            >
                                {contactEmail}
                            </a>
                            )
                        </p>
                    </div>
                    <div className="card-actions justify-between items-center pt-4">
                        <Link to={`/items/${_id}`} className= "hover:font-bold pt-1">View Details</Link>
                        <span
                            className={`badge w-24 ${postType === "Lost"
                                ? "badge-error"
                                : "badge-success"
                                }`}
                        >
                            {postType}
                        </span>
                    </div>

                </div>
    </div>
</div>

        </div>
    );
};

AllItemsCard.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        postType: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        dateLost: PropTypes.string.isRequired, // or `PropTypes.instanceOf(Date)` if it's a Date object
        contactName: PropTypes.string.isRequired,
        contactEmail: PropTypes.string.isRequired,
    }).isRequired,
};
export default AllItemsCard;