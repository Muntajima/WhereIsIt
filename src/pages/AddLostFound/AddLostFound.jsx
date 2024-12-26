import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import AuthContext from "../../context/Authcontext/AuthContext";
import Swal from "sweetalert2";

const AddLostFound = () => {
    const { user } = useContext(AuthContext);
    //console.log(user.displayName)
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const postType = form.postType.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const thumbline = form.thumbline.value;
        const date = startDate;
        // const name = form.name.value;
        // const email = form.email.value;

        const newPost = { title, postType, location, description, thumbline, date };
        console.log(newPost);

        fetch('http://localhost:5000/addLostFound', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your campaign added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="w-2/3 mx-auto">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4">Create Lost/Found Post</h2>

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
                        type="file"
                        name="thumbline"
                        className="file-input file-input-bordered w-full"
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
                        Date Lost
                    </label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Contact Information
                    </label>
                    <input
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-bordered w-full mb-2"
                    />
                    <input
                        type="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddLostFound;