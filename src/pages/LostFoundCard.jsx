import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LostFoundCard = ({ item }) => {
    const { id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = item;

    
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
                <a href="#">
                    <img className="rounded-t-lg h-[200px] mx-auto" src={thumbnail} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
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
                        <Link className= "hover:font-bold pt-1">See Details</Link>
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



    );
};

export default LostFoundCard;