import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/Authcontext/AuthContext";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";



const AllRecoverdItems = () => {
    const { user } = useContext(AuthContext);
    const items = useLoaderData();
    const [recoverdItems, setRecoverdItems] = useState([items])
    const [isTableLayout, setIsTableLayout] = useState(false);

    useEffect(() => {
        if (user) {
            const copyItems = [...items];
            const userItems = copyItems.filter(data => data.email === user.email)
            setRecoverdItems(userItems);
        }
    }, [user, items])
    return (
        <div>
            <div className="py-4">
                <Fade>
                    <img src="https://i.ibb.co.com/xsQXyK5/found3.webp" className="w-full h-[500px] object-cover" />
                </Fade>

                <h2 className="text-2xl font-bold text-center py-12">ALL Recoverd Items of you</h2>

                <div className="flex justify-end mb-4">
                    <button
                        className="btn btn-outline"
                        onClick={() => setIsTableLayout(!isTableLayout)}
                    >
                        {isTableLayout ? "Switch to Card Layout" : "Switch to Table Layout"}
                    </button>
                </div>
                {
                    isTableLayout ?
                        <div>
                            <table className="table-auto border-collapse border border-gray-300 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-2 sm:px-4 py-2">Image</th>
                                        <th className="border border-gray-300 px-2 sm:px-4 py-2">Title</th>
                                        <th className="border border-gray-300 ppx-2 sm:px-4 py-2">Description</th>
                                        <th className="border border-gray-300 px-2 sm:px-4 py-2">Location</th>
                                        <th className="border border-gray-300 px-4 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recoverdItems.map((item) => (
                                        <tr key={item._id}>
                                            <td className="border border-gray-300 sm:px-4 py-2"><img src={item.thumbline} className="w-[200px]" /></td>
                                            <td className="border border-gray-300 sm:px-4 py-2">{item.title}</td>
                                            <td className="border border-gray-300 sm:px-4 py-2">{item.description}</td>
                                            <td className="border border-gray-300 sm:px-4 py-2">{item.location}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> :
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {recoverdItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className="card bg-base-100 shadow-md border border-gray-300"
                                    >
                                        <figure>
                                            <img src={item.thumbline} className="w-full h-[150px] sm:h-[200px] object-cover" alt={item.title} />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title sm:text-lg">{item.title}</h2>
                                            <p className="text-sm sm:text-base">{item.description}</p>
                                            <p className="text-xs sm:text-sm text-gray-600">
                                                Location: {item.location}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                }


            </div>
        </div>
    );
};

export default AllRecoverdItems;