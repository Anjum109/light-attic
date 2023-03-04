import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import img from '../../assets/Logo/21378450-removebg-preview.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const menuItems = <React.Fragment>
        <li className='navbar-text border border-1 border-blue-800 mr-1 font-bold bg-blue-900 text-white'><Link to="/">Home</Link></li>
        <li className='navbar-text border border-1 border-blue-800 mr-1 font-bold bg-blue-900 text-white'><Link to="/blog">Blog</Link></li>
        {user?.uid ?
            <>
                <li className='navbar-text border border-1 border-blue-800 mr-1 font-bold bg-blue-900 text-white'><Link to="/dashboard">Dashboard</Link></li>
                <li className='navbar-text border border-1 border-blue-800 mr-1 font-bold bg-blue-900 text-white'><Link to="/categories">Categories</Link></li>

                <li className='navbar-text border border-1 border-blue-800 mr-1 font-bold bg-blue-900 text-white'><Link onClick={handleLogOut}>Sign Out</Link></li>
            </>
            :
            <>
                <li className='navbar-text border border-1 border-blue-800 mr-1 font-bold bg-blue-900 text-white'><Link to="/login">Login</Link></li>

            </>}
    </React.Fragment>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case login-bg font-bold text-3xl  hover:bg-blue-900 hover:text-blue-100"><img src={img} className='w-12' alt="" /> Light Attic</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal login-bg">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='connectus' className="login-bg py-2 px-3 font-bold font-bold hover:bg-blue-900 hover:text-blue-100 hidden lg:block">Connect With US</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;