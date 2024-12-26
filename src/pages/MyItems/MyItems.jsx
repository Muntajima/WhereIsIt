import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/Authcontext/AuthContext";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyItems = () => {
    const { user } = useContext(AuthContext);
    const items = useLoaderData();
    const [ myItems, setMyItems ] = useState([items])

    useEffect(() =>{
        if(user){
            const copyItems = [...items];
            const userItems = copyItems.filter(data => data.email === user.email)
            setMyItems(userItems);
        }
    }, [user, items])

    const handleDelete = (_id) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                          
              fetch(`http://localhost:5000/items/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your campaign has been deleted.",
                        icon: "success"
                      });
                      const remaining = myItems.filter(item => item._id !== _id);
                      setMyItems(remaining);
                }
              })
            }
          });
    }

    

    return (
        <div className="py-20">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Location</th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {myItems.map((item) => (
                        <tr key={item._id}>
                            <td className="border border-gray-300 px-4 py-2"><img src={item.thumbline} className="w-[200px]" /></td>
                            <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.location}</td>
                            <td className="border border-gray-300">
                                <div className="flex flex-col">
                                <Link to={`/updateItems/${item._id}`}
                                className="btn btn-ghost">Update</Link>
                                <button 
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-ghost">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
    );
};

export default MyItems;