import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiFillBug } from "react-icons/ai";
import { AiOutlineQq } from "react-icons/ai";
import { AiFillTruck } from "react-icons/ai";


const HelpLine = () => {
    useEffect(() =>{
        document.title = 'Help Line';
    }, [])
    return (
        <div>   
            <div className="bg-[#9538E2] pt-12 pb-12">
                
                <div className="flex justify-center mt-12 text-9xl text-white"><AiFillTruck></AiFillTruck></div>
                
            </div>
            
            <div className="flex gap-32 items-center mx-24">
            <div className='flex gap-4 mt-24'>
                <div className="card bg-purple-300 text-black w-96">
                    <div className="card-body items-center text-center">
                        <div className="text-2xl"><AiFillBug></AiFillBug></div>
                        <h2 className="card-title">For Lost Items!</h2>
                        
                        <div className="card-actions justify-end">
                            <Link to='/footer' className="btn btn-sm bg-purple-600 text-white rounded-full text-sm">Contact Us</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="card bg-purple-300 text-black w-96">
                    <div className="card-body items-center text-center">
                        <div className="text-2xl"><AiOutlineQq></AiOutlineQq></div>
                        <h2 className="card-title">For Founder</h2>
                        
                        <div className="card-actions justify-end">
                            <Link to='/footer' className="btn btn-sm bg-purple-600 text-white rounded-full text-sm">Contact Us</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col list-decimal mt-24 ml-12">
                <li><a href="/">Open a dispute</a></li>
                <li><a href="/">Report IPR infringement</a></li>
                <li><a href="/">Report abuse</a></li>
            </div>
            </div>
        </div>
    );
};

export default HelpLine;