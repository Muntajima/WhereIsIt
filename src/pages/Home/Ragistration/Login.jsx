import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import loginLottie from '../../../assets/Lottie/login.json'
const Login = () => {
    const lottieStyle = {
        height: 500,
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <p className="py-6">
                        <Lottie 
                        animationData={loginLottie}
                        style={lottieStyle}
                        ></Lottie>
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="ml-20 mt-12 text-5xl font-bold">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-300">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">
                                Don't Have An Account ?{" "}
                                <Link className="text-blue-600" to="/register">
                                    Register
                                </Link>
                            </p>
                            <Link className='btn btn-outline bg-blue-300 text-black w-36 mx-auto my-8 font-semibold'> Google only</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;