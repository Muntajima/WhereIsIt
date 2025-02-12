import { Link } from "react-router-dom";
import { AiFillBug } from "react-icons/ai";
import { AiOutlineQq } from "react-icons/ai";
import { AiFillTruck } from "react-icons/ai";


const HelpLine = () => {
   
    return (
        <div>   
            <div className="bg-[#9538E2] pt-12 pb-12 w-full">
                
                <div className="flex flex-col justify-center items-center mt-12 text-white">
                    <p className="text-5xl">Help Line</p>
                    <AiFillTruck className="text-9xl"></AiFillTruck></div>
                
            </div>
            
            <div className="lg:flex gap-32 items-center mx-24">
            <div className='flex gap-4 mt-24'>
                <div className="card bg-purple-300 text-black w-96">
                    <div className="card-body items-center text-center">
                        <div className="text-2xl"><AiFillBug></AiFillBug></div>
                        <h2 className="card-title">For Lost Items!</h2>
                        
                        <div className="card-actions justify-end">
                            <Link to='/contact-us' className="btn btn-sm bg-purple-600 text-white rounded-full text-sm">Contact Us</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="card bg-purple-300 text-black w-96">
                    <div className="card-body items-center text-center">
                        <div className="text-2xl"><AiOutlineQq></AiOutlineQq></div>
                        <h2 className="card-title">For Founder</h2>
                        
                        <div className="card-actions justify-end">
                            <Link to='/contact-us' className="btn btn-sm bg-purple-600 text-white rounded-full text-sm">Contact Us</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col list-decimal mt-24 lg:ml-0 ml-2">
                <li><a href="/addItems" className="hover:underline">Open a form</a></li>
                <li><a href="/allItems" className="hover:underline">Found your lost one</a></li>
                <li><a href="/contact-us" className="hover:underline">Report us</a></li>
                <li><a href="/contact-us" className="hover:underline">Report abuse</a></li>
            </div>
            </div>
        </div>
    );
};

export default HelpLine;