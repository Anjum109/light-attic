import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin/useAdmin';
import useSeller from '../hooks/useSeller/useSeller';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayOut = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile max-w-screen-xl mx-auto">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content mt-16">
                        {
                            !isAdmin && !isSeller && <li className='mt-2 border border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:p-1  rounded'><Link to='/dashboard/myorders'>My Orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li className='mt-2 border border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:p-1  rounded'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='mt-2 border border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:p-1  rounded'><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li className='mt-2 border border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:p-1  rounded'><Link to='/dashboard/reportitems'>Report Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='mt-2 border border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:p-1  rounded'><Link to='/dashboard/addproducts'>Add a Product</Link></li>
                                <li className='mt-2 border border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:p-1  rounded'><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayOut;