import { useContext, useState } from "react";
import AuthContext from "../../context/Authcontext/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";


const Updated = () => {
    const { user } =useContext(AuthContext);
    const navigate = useNavigate();
    const items = useLoaderData();
    const { _id, postType, thumbnail, title, description, category, location } = items || {};

    const [startDate, setStartDate] = useState(new Date());
        const [imageUrl, setImageUrl] = useState("");
    
        const handleImageUrlChange = (e) => {
            setImageUrl(e.target.value);
        };
    const handleUpdatePost = (e) =>{
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const postType = form.postType.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const thumbnail = imageUrl;
        const dateLost = startDate.toISOString();
        const contactName = form.name.value;
        const contactEmail = form.email.value;

        const updatedItem = { _id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail };
        //console.log(updatedItem);

        fetch( `https://where-is-it-jet.vercel.app/items/${items._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your post updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Perfect'
                  })
                  .then(() => navigate('/myItems'));
                }
        })
    }

    

    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='font-bold text-2xl text-center'>Update your post</h2>
            
            <div className="w-2/3 mx-auto">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleUpdatePost}
                    >
                        <h2 className="text-2xl font-bold mb-4">Update Lost/Found Post</h2>
            
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Post Type
                            </label>
                            <select
                                name="postType"
                                defaultValue={postType}
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
                                    defaultValue={thumbnail}
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
                                defaultValue={title}
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
                                defaultValue={description}
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
                                defaultValue={ category || ""}
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="pets">Pets</option>
                                <option value="documents">Documents</option>
                                <option value="accessories">Accessories</option>
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
                                defaultValue={location}
                                placeholder="Enter location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
            
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Date Lost/Found
                            </label>
                            <DatePicker selected={startDate || new Date()} onChange={(date) => setStartDate(date)} 
                        />
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
                        <input type="submit" value="Update Post" className='btn btn-block bg-gray-700 text-white' />
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Updated;