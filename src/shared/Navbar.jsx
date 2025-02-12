import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/Authcontext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import logo from '../../public/lostproperty.png'


const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [theme, setTheme] = useState('light')
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])

    const handleLogout = () => {
        userLogout()
            .then(() => {
                toast.success("Successfully sign out.");
            })
            .catch(error => {
                toast("Failed to logout. Stay with us.")
                console.log(error)
            })
    }
    const links = <>
        <li><NavLink to='/' className='btn mr-2 hover:bg-red-600 hover:text-white'>Home</NavLink></li>
        <li><NavLink to='/allItems' className='btn mr-2 hover:bg-red-600 hover:text-white'>Lost & Found Items Page</NavLink></li>
        <NavLink to={'/addItems'} className='btn mr-2 hover:bg-red-600 hover:text-white'>Add Lost & Found Item</NavLink>
        <NavLink to={'/category'} className='btn mr-2 hover:bg-red-600 hover:text-white'>Category</NavLink>
        <NavLink to={'/contact-us'} className='btn mr-2 hover:bg-red-600 hover:text-white'>Contact us</NavLink>

         {
            user && <NavLink to={'/allRecovered '} className='btn hover:bg-red-600 hover:text-white'>All Recovered Items</NavLink>
        }
         {
            user && <NavLink to={'/myItems'} className='btn hover:bg-red-600 hover:text-white'>Manage My Items</NavLink>
        }

    </>
    return (
        <div className="navbar bg-base-100 fixed z-20 top-0 start-4 border-b px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={logo} className="w-12 h-9" />
                    <Link to='/'>
                    <a className="font-bold text-red-600 hover:text-black text-3xl">WhereIsIt</a>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div>
                    {
                        user &&
                        <div className="dropdown">
                            <div className="relative group">
                                <img src={user?.photoURL}
                                    tabIndex={0} role="button"
                                    className="w-10 h-10 rounded-full mr-4"
                                />

                                <div className="absolute bottom-1 right-16 bg-gray-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    {user?.displayName || "No Display Name"}
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link to='/addItems'>Add Lost & Found Item</Link></li>
                                <li><Link>All recover Items</Link></li>
                                <li><Link>Manage My Items</Link></li>
                            </ul>
                        </div>

                    }
                </div>

                {
                    user ? <>
                        <button onClick={handleLogout} className="btn mr-6 hover:bg-red-600 hover:text-white">Logout</button>
                    </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn mr-8 hover:bg-red-600 hover:text-white">Login</button>
                            </Link>
                        </>
                }

                <div>
                    <input onClick={handleTheme} type="checkbox" className="toggle mr-8" defaultChecked />
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Navbar;