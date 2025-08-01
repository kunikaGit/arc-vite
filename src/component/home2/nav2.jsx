import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

export const menu = [{ id: 1, href: "/arc-home", text: "ARC Home" }];

export default function Nav2() {
    const location = useLocation();
    const isLogin = useSelector((state) => state.auth.isAuthenticated); // adjust path as per your state

    return (
        <>
            <li className="js-nav-dropdown group relative">
                <Link
                    to="/"
                    className={`dropdown-toggle flex items-center justify-between py-3.5  uppercase text-base dark:text-white
                        hover:text-accent focus:text-accent text-white dark:hover:text-accent dark:focus:text-accent lg:px-5`}
                    id="navDropdown-1"
                    aria-expanded="false"
                    role="button">
                    Home
                </Link>
            </li>

            <li className="group">
                <Link
                    to="/faq"
                    className={`dropdown-toggle flex items-center justify-between py-3.5  uppercase text-base dark:text-white
                hover:text-accent focus:text-accent text-white dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    FAQ
                </Link>
            </li>

            <li className="group">
                <Link
                    to="/about-us"
                    className={`dropdown-toggle flex items-center justify-between py-3.5  uppercase text-base dark:text-white 
                hover:text-accent focus:text-accent text-white dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    About Us
                </Link>
            </li>
   <li className="group">
                <Link
                    to="/build-arc"
                    className={`dropdown-toggle flex items-center justify-between py-3.5  uppercase text-base dark:text-white 
                hover:text-accent focus:text-accent text-white dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Build Your ARC
                </Link>
            </li>
            <li className="group">
                {isLogin ? <Link
                    to="/dashboard/account-overview"
                    className={`dropdown-toggle flex items-center justify-between py-3.5  uppercase text-base dark:text-white  
                hover:text-accent focus:text-accent text-white dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Client Area
                </Link> :
                    <Link
                        to="/login"
                        className={`dropdown-toggle flex items-center justify-between py-3.5 uppercase text-base dark:text-white  
             hover:text-accent focus:text-accent text-white dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                        Client Area
                    </Link>}
            </li>
        </>
    );
}
