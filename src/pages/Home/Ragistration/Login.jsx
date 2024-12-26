import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottie from '../../../assets/Lottie/login.json'
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/Authcontext/AuthContext";
import Swal from "sweetalert2";
const Login = () => {
    const lottieStyle = {
        height: 500,
    }

    const { googleLogin,userLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state || '/'

    useEffect(() =>{
        document.title = "WhereIsIt || Login"
    }, [])
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then(result =>{
            setUser(result.user)
            console.log(result.user)
            navigate(from)
            Swal.fire({
                title: "Sweet!",
                text: "You are our authorized user",
                icon: "success"
              });
        })
        .catch(error =>{
            Swal.fire({
                title: "Ooops!",
                text: "Invalid email and password.",
                icon: "error"
              });
              console.log(error.message)
        })

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
                    <p className="text-blue-600 text-sm text-center mt-12">Welcome back!</p>
                <h1 className="ml-20 text-4xl mt-2 font-bold">Member Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email" placeholder="email" 
                            name='email'
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password" placeholder="password" 
                            name='password'
                            className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-300">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">Do not Have An Account ?{" "}
                                <Link className="text-blue-600" to="/register">
                                    Register
                                </Link>
                            </p>
                            <Link onClick={googleLogin} className='btn btn-outline bg-blue-300 text-black w-36 mx-auto my-8 font-semibold'> Google only</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;