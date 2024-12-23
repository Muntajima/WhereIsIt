import { useEffect, useState } from "react";
import LostFoundCard from "../LostFoundCard";


const LostFoundItems = () => {

    const [ items, setItems ] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(data =>{
            const copyData = [...data];
            setItems(copyData.slice(0, 6));
        } )
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
                items.map(item => <LostFoundCard
                key={item._id}
                item={item}
                />)
            }
        </div>
    );
};

export default LostFoundItems;