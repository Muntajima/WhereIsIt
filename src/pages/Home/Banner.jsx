import Lottie from "lottie-react";
import lostLottie1 from '../../assets/Lottie/lostLotti1.json';
import lostLottie2 from '../../assets/Lottie/lostLotti2.json';
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <>
            <div id="default-carousel"  data-carousal="slide" className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero bg-base-200 min-h-[500px] duration-700 ease-in-out" data-carousel-item
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/rynJ4N8/lost1.jpg)",
                        }}>

                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="flex-1 relative">
                                <Slide direction="right"
                                    duration={2000}
                                >
                                    <Lottie animationData={lostLottie1}
                                        className="absolute w-1/3 rounded-lg shadow-2xl -top-40 right-10"
                                    ></Lottie>
                                </Slide>
                                <Slide direction="left"
                                    duration={2000}
                                >
                                    <Lottie animationData={lostLottie2}
                                        className="w-1/3 rounded-lg shadow-2xl absolute -top-20 left-56"
                                    ></Lottie>
                                </Slide>
                            </div>


                            <div className="flex-1">
                                <h1 className="text-3xl font-bold pl-24">Managing lost items no longer a million-dollar headache with <span className="text-red-600">WhereIsIt</span> Lost and Found Page</h1>
                                <Link to='/lost-found-items'>
                                <button className="btn ml-24 mt-4">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                <div className="hero bg-base-200 min-h-[500px] duration-700 ease-in-out" data-carousel-item
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/gvpDM7X/lost2.jpg)",
                        }}>

                        <div className="hero-content">
                        <div className="">
                                <h1 className="text-2xl lg:text-3xl font-bold lg:pl-96 text-blue-500 pl-12 ">Our Online Lost & Found <br />can Help you Find what you are Looking For!</h1>
                                <Link to='/lost-found-items'>
                                <button className="btn bg-blue-500 lg:ml-96 mt-4 ml-12">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="item3" className="carousel-item w-full">
                <div className="hero bg-base-200 min-h-[500px] duration-700 ease-in-out" data-carousel-item
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/WGXBkff/lost3.jpg)",
                        }}>

                        <div className="hero-content flex-col lg:flex-row-reverse">
                            


                            <div className="text-left">
                                <h1 className="text-3xl font-bold pr-8 w-2/3">IF YOU LOST SOMEONE OR SOMETHING BUT FOUND YOURSELF... <br /> YOU'VE WON</h1>
                                <Link to='/lost-found-items'>
                                <button className="btn lg:ml-24 mt-4">Get Started</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </>

    );
};

export default Banner;
