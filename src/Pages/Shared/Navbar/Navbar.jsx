import { Link, NavLink } from "react-router-dom";
import { GiFamilyHouse } from "react-icons/gi";
import UseAuth from "../../../Hooks/UseAuth";
// import { FaUserLarge } from "react-icons/fa6";
// import { useState } from "react";




const Navbar = () => {

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        {/* <li><NavLink>Home</NavLink></li>
        <li><NavLink>Home</NavLink></li> */}

    </>



    const { logout, user } = UseAuth()

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}

                        </ul>
                    </div>
                    <div className="flex">
                        <a className="btn btn-ghost text-3xl"><GiFamilyHouse />MyHome</a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">
                                <div className="w-10 rounded-full">
                                    {/* <FaUserLarge /> */}
                                    <button onClick={logout} className="btn btn-ghost hover:bg-slate-500 bg-slate-500">Logout</button>

                                    {/* <img className="rounded-full" src={user.photoURL} alt="" /> */}

                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                <img className="rounded-full" src={user.photoURL} alt="" />

                                </li>
                                <li>
                                <button className="btn btn-ghost">{user.displayName}</button>
                                <button className="btn btn-ghost">{user.email}</button>

                                    {/* <button onClick={logout} className="btn btn-ghost">Logout</button> */}
                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'><button className="btn btn-active hover:bg-slate-800 hover:text-white">Login</button></Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;