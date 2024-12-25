import { useEffect, useState } from "react";
import LostFoundCard from "../LostFoundCard";
import { useLoaderData } from "react-router-dom";



const LostFoundItems = () => {

    const [ items, setItems ] = useState([]);

    const products = useLoaderData() || {};
    console.log(products)

    useEffect(() =>{
        fetch('https://where-is-it-jet.vercel.app/items')
        .then(res => res.json())
        .then(data =>{
            const copyData = [...data];
            setItems(copyData.slice(0, 6));

        } )
    }, [])

    const handleSeeAll = () =>{
        if(items.length < products.length){
            setItems(products)
        }
    }
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
                items.map(item => <LostFoundCard
                key={item._id}
                item={item}
                />)
            }
            <div><button onClick={handleSeeAll} className="btn btn-accent px-8 py-2">See All</button></div>
        </div>
    );
};

export default LostFoundItems;