import Lottie from "lottie-react";
import errorLottie from '../../../assets/Lottie/error404.json'


const Error = () => {
    const style = {
        height: 300,
    };
    return (
        <div className="mt-12">
            <Lottie 
            animationData={errorLottie}
            style={style}
            autoPlay
            loop
            ></Lottie>
            <p className="text-center font-bold text-3xl">Page not Found</p>
        </div>
    );
};

export default Error;