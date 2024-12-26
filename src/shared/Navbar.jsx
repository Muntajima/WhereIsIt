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
        <li><NavLink to='/' className='btn'>Home</NavLink></li>
        <li><NavLink to='/all-items' className='btn'>Lost & Found Items Page</NavLink></li>
        {
            user && <NavLink to={'/add-lost-found'} className='btn'>Add Lost & Found Item</NavLink>
        }
         {
            user && <NavLink className='btn'>All Recovered Items</NavLink>
        }
         {
            user && <NavLink className='btn'>Manage My Items</NavLink>
        }

    </>
    return (
        <div className="navbar bg-base-100 fixed z-20 top-0 start-4 border-b">
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
                    <a className="btn btn-ghost text-2xl">WhereIsIt</a>
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
                                <li><Link to='/add-lost-found'>Add Lost & Found Item</Link></li>
                                <li><Link>All recover Items</Link></li>
                                <li><Link>Manage My Items</Link></li>
                            </ul>
                        </div>

                    }
                </div>

                {
                    user ? <>
                        <button onClick={handleLogout} className="btn mr-6">Logout</button>
                    </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn mr-8">Login</button>
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