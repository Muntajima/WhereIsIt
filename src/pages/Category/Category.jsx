import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { SiEngadget } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import AllItemsCard from "../AllItems/AllItemsCard";


const Category = () => {
    const items = useLoaderData();
    const [search, setSearch] = useState("");
    const [filteredItem, setFilteredItem] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.value.toLowerCase();
        setSearch(query)

        if (query.trim() === "") {
            setFilteredItem([]);
        }
        else {
            const filtered = items.filter((item) =>
                item.category && item.category.toLowerCase().includes(query))
            setFilteredItem(filtered);
        }



    }
    return (
        <div>
            <div className="container pt-12">
                <p className="text-2xl font-semibold mb-24 text-center px-2">
                    Managing lost items no longer a million-dollar headache with <br /><span className="text-[#d11818]">WhereIsIt</span> Lost and Found Page
                </p>

            </div>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-6 text-center">Lost & Found Item's Category</h1>
                <div className="mb-4 ml-2">
                    <input
                        type="text"
                        placeholder="Search by category"
                        value={search}
                        onChange={handleSearch}
                        className="w-full p-2 border rounded"
                    />

                </div>
                <div className="flex gap-8 justify-center my-24 ml-2">
                    <div className="border border-2 w-32 text-center border-black font-semibold py-6 rounded-xl">
                        <MdOutlinePets className="ml-10 lg:ml-14" />
                        <h3 value='pets' >Pets</h3>
                    </div>
                    <div className="border border-2 w-32 text-center border-black font-semibold py-6 rounded-xl">
                        <SiEngadget className="ml-10 lg:ml-14" />
                        <h3 value='gadgets'>Gadgets</h3>
                    </div>
                    <div className="border border-2 w-32 text-center border-black font-semibold py-6 rounded-xl">
                        <IoMdDocument className="ml-10 lg:ml-14" />
                        <h3 value='documents'>Documents</h3>
                    </div>
                    <div className="border border-2 w-32 text-center border-black font-semibold py-6 rounded-xl">
                        <AiFillProduct className="ml-10 lg:ml-14" />
                        <h3 value='accessories'>Accessories</h3>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    filteredItem.map((item) => <AllItemsCard key={item._id} item={item} />)
                }
            </div>
        </div >
    );
};

export default Category;