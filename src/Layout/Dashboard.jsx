import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, } from "react-icons/fa";

import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {
    const [cart] = useCart();


    // todo: 
    // const isAdmin = true;
    const [isAdmin] = useAdmin()


    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side  bg-amber-500">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}


                        {
                            isAdmin ? <>
                            
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
                                <li><NavLink to="/dashboard/manageclass">Manage Class</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/allusers">All Users</NavLink></li>

                            
                            </> : <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                                {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li> */}
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>MY Cart</NavLink></li>

                            </>
                        }


                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                        <li> <NavLink to="/classes">Classes</NavLink></li>
                        <li> <NavLink to="/instructors">Instructors</NavLink></li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;