import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerLottie from '../../../assets/Lottie/register.json'

const Register = () => {
    const style = {
        height: 500,
    }

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    }

    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <p className="py-6">
                    <Lottie 
                    animationData={registerLottie}
                    style={style}
                    loop={false}
                    ></Lottie>
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-14 mt-12 text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  
                                    placeholder="your name"
                                    name='name'
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" 
                                    placeholder="email" 
                                    name='email'
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="photo-url"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" 
                                    placeholder="password" 
                                    name='password'
                                    className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Register</button>
                                </div>
                </form>
                <p className="text-center font-semibold">
                            Already Have An Account ?{" "}
                            <Link className="text-red-800" to="/login">
                                Login
                            </Link>
                        </p>
                        <Link className='btn btn-outline bg-rose-900 text-white w-36 mx-auto my-8 font-semibold'> Google only</Link>
            </div>
        </div>
    </div>
    );
};

export default Register;
