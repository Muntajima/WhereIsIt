import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import AuthContext from "../../context/Authcontext/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

//import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
//import { storage } from "../../firebase/firebase.init";


const AddLostFound = () => {
    const { user } = useContext(AuthContext);
    //console.log(user.displayName)
    const [startDate, setStartDate] = useState(new Date());
    const [imageUrl, setImageUrl] = useState("");

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const postType = form.postType.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const thumbline = imageUrl;
        const date = startDate;
        const name = form.name.value;
        const email = form.email.value;

        // if(!thumblineFile){
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Please upload a thumbnail image',
        //         icon: 'error',
        //         confirmButtonText: 'OK',
        //     });
        //     return;

        const newPost = { title, postType, location, description, category, thumbline, date, name, email };
        //console.log(newPost);


        fetch('https://where-is-it-jet.vercel.app/addItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch((error) => {
                console.error('Error adding item:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    }
    // try{
    //     const storageRef = ref(storage, `lost-found/${thumblineFile.name}`);

    // const snapshot = await uploadBytes(storageRef, thumblineFile);
    // const thumblineURL = await getDownloadURL(snapshot.ref);



    return (
        <div>
            <Helmet>
                <title>WhereIsIt | Add lost & found</title>
            </Helmet>
            <section>
                <div className="w-full mb-8">
                    <div className="hero min-h-[500px] duration-700 ease-in-out place-items-end" data-carousel-item
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/0tx4dWW/happy.jpg)",
                        }}>

                        <div className="mb-64 mr-6">
                            <h1 className="text-5xl font-bold">We’ve created many happy losers!</h1>
                            <p className="pl-4">WhereIsIt reunites people with Lost & Found property</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-2/3 mx-auto">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-3xl font-bold mb-4 text-center">Create Lost/Found Post</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Post Type
                        </label>
                        <select
                            name="postType"
                            className="select select-bordered w-full"
                        >
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Thumbnail
                        </label>
                        <input
                            type="text"
                            name="thumbline"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            className="select select-bordered w-full"
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="pets">Pets</option>
                            <option value="documents">Documents</option>
                            <option value="documents">Accessories</option>
                            <option value="gadgets">Gadgets</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Date Lost/Found
                        </label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Contact Information
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            readOnly
                            className="input input-bordered w-full mb-2"
                        />
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-accent px-8 py-3">
                            Add Post
                        </button>
                        {/* <iframe width="853" height="480" src="https://www.youtube.com/embed/81iz8c-KDVY" title="Lost something? iLost is the solution!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLostFound;