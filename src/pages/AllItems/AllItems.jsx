import { useLoaderData } from "react-router-dom";
import AllItemsCard from "./AllItemsCard";
import { useEffect, useState } from "react";



const AllItems = () => {
    const items = useLoaderData();
    const [search, setSearch] = useState("");
    const [filteredItem, setFilteredItem] = useState(items);

    useEffect(() =>{
            document.title = 'WhereIsIt || Lost & Found'
        }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.value.toLowerCase();
        setSearch(query)

        if (query.trim() === "") {
            setFilteredItem(items);
        }
        else {
            const filtered = items.filter((item) =>
                item.title.toLowerCase().includes(query) ||
                item.location.toLowerCase().includes(query)
            )
            setFilteredItem(filtered);
        }
    }

    console.log(items);
    return (
        <div>
            <div
                className="hero w-full h-[400px] object-cover"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/pWQKSw3/lost6.jpg)",
                }}>

                <div>

                    <p className="text-2xl font-semibold mb-44 text-white text-center">
                        Managing lost items no longer a million-dollar headache with <br /><span className="text-blue-500">WhereIsIt</span> Lost and Found Page
                    </p>

                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-6 text-center">Lost & Found Items</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by title or location"
                        value={search}
                        onChange={handleSearch}
                        className="w-96 ml-16 lg:w-full lg:ml-0 p-2 border rounded"
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-12 lg:ml-0 gap-6">
                    {filteredItem.length > 0 ? (
                        filteredItem.map((item) => <AllItemsCard key={item._id} item={item} />)
                    ) : (
                        <p className="text-gray-500">No items match your search.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default AllItems;