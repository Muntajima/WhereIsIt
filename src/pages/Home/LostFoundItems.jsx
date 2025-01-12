import { useEffect, useState } from "react";
import LostFoundCard from "../LostFoundCard";




const LostFoundItems = () => {

    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    //const products = useLoaderData() || {};

    useEffect(() => {
        fetch('https://where-is-it-jet.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAllItems(sortedData); // Store all items
                setItems(sortedData.slice(0, 6));

            })
    }, [])

    const handleSeeAll = () => {
        setItems(allItems);
    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-6">Latest Lost & Found Items</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 ml-12 lg:ml-0">
                {items.map((item) => (
                    <LostFoundCard key={item._id} item={item} />
                ))}
            </div>
            {items.length < allItems.length && (
                <div className="text-center py-6">
                    <button onClick={handleSeeAll} className="btn btn-accent px-8 py-2">
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default LostFoundItems;