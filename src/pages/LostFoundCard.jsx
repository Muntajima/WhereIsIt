
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const LostFoundCard = ({ item }) => {
    const { _id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = item;

    
    // console.log(_id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail)
    return (
        <div>
            <div className="max-w-sm h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
                <a href="#">
                    <img className="rounded-t-lg h-[200px] mx-auto" src={thumbnail} alt="" />
                </a>
                <div className="p-5">
                    <a href="#" className="flex gap-16 items-center">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <span
                            className={`badge w-24 font-semibold ${postType === "Lost"
                                ? "badge-error"
                                : "badge-success"
                                }`}
                        >
                            {postType}
                        </span>
                    </a>
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
                        <p className="pb-4">
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
                    <div>
                        <Link to={`/items/${_id}`} className= "hover:underline font-bold">See Details</Link>
                        
                    </div>

                </div>
            </div>
        </div>



    );
};
LostFoundCard.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        postType: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        dateLost: PropTypes.string.isRequired, 
        contactName: PropTypes.string.isRequired,
        contactEmail: PropTypes.string.isRequired,
    }).isRequired,
};
export default LostFoundCard;