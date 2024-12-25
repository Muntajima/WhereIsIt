import { useLoaderData } from "react-router-dom";
import AllItemsCard from "./AllItemsCard";


const AllItems = () => {
    const items = useLoaderData()
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
            {/* <img src="https://i.ibb.co.com/pWQKSw3/lost6.jpg" className="w-full h-[400px] object-cover" />
            <h2>Managing lost items on aircraft no longer a million-dollar headache with WorldTracer® Lost and Found Property</h2> */}
           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
           {
                items.map(item => <AllItemsCard
                    key={item._id}
                    item={item}
                />)
            }
           </div>
        </div>
    );
};

export default AllItems;