import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../../context/Authcontext/AuthContext";
import Swal from "sweetalert2";


const Detailes = () => {
    const data = useLoaderData() || {};
    const { _id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = data;
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    //console.log(data)

    useEffect(() =>{
        document.title = 'WhereIsIt || Details'
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const date = startDate;
        console.log(location, date);
        const recoveredData = {
            location, date
        };

        fetch('https://where-is-it-jet.vercel.app/recovered-data', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recoveredData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        fetch(`https://where-is-it-jet.vercel.app/items/${data._id}/recover`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                if (!res.ok) {
                    Swal.fire({
                        title: "Oops!",
                        text: 'Item is already recoveredData.'
                    })
                }
                return res.json();
            })


        document.getElementById('my_modal_5').close();
    }
    return (
        <div className="flex justify-between gap-20 items-center ml-36 mb-24">
            
           <div>
           <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={thumbnail} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
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
                        <Link to={`/items/${_id}`} className="underline font-semibold hover:text-red-700 pt-5">See Details</Link>
                        <button
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                            className={`mt-6 px-4 py-2 rounded text-white ${data.postType === "Lost" ? "bg-red-500" : "bg-green-500"
                                }`}

                        >
                            {data.postType === "Lost" ? "Found This!" : "This is Mine!"}
                        </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div>
                                    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-md w-full">
                                        <h2 className="text-xl font-bold mb-4">Recovery Details</h2>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-medium">Recovered Location</label>
                                            <input
                                                type="text"
                                                className="w-full p-2 border rounded"
                                                name="location"
                                                placeholder="Enter location"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-medium">Recovered Date</label>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                                name="date" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-medium">Recovered By</label>
                                            <div className="flex items-center gap-4">
                                                {/* <img src={user.email} alt={user.name} className="w-12 h-12 rounded-full" /> */}
                                                <div>
                                                    <img src={user.photoURL} className="w-20 h-20" />
                                                    <p><strong>Name: </strong>{user.displayName}</p>
                                                    <p className="text-sm text-gray-600"><strong>Email:  </strong>{user.email}</p>
                                                </div>
                                                <div className="modal-action">
                                                    <div method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button type="submit" className="btn mt-20 ml-24">Submit</button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                </div>
            </a>
           </div>
           
        </div>
    );
};

export default Detailes;
