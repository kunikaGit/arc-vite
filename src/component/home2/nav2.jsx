import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const menu = [{ id: 1, href: "/arc-home", text: "ARC Home" }];

export default function Nav2() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const isHome2 = location.pathname.includes("/home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Change color after scrolling 50px
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActiveParentMenu = (menus) => {
        return menus.some(
            (elm) => elm.href.split("/")[1] === location.pathname.split("/")[1]
        );
    };

    return (
        <>
            <li className="js-nav-dropdown group relative">
                <Link
                    to="/"
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base dark:text-white
                         ${isScrolled? "dark-text dark:text-white":""}
                        hover:text-accent focus:text-accent text-jacarta-700 dark:hover:text-accent dark:focus:text-accent lg:px-5`}
                    id="navDropdown-1"
                    aria-expanded="false"
                    role="button">
                    Home
                </Link>
            </li>

            <li className="group">
                <Link
                    to="/faq"
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base dark:text-white
                   ${isScrolled? "dark-text dark:text-white":""}
                hover:text-accent focus:text-accent text-jacarta-700 dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    FAQ
                </Link>
            </li>

            <li className="group">
                <Link
                    to="/about-us"
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base dark:text-white
                       ${isScrolled? "dark-text dark:text-white":""} 
                hover:text-accent focus:text-accent text-jacarta-700 dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    About Us
                </Link>
            </li>

            <li className="group">
                <Link
                    to="/create"
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base dark:text-white
                    ${isScrolled? "dark-text dark:text-white":""}  
                hover:text-accent focus:text-accent text-jacarta-700 dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Client Area
                </Link>
            </li>

            <li className="group">
                <Link
                    to="#"
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base dark:text-white
                  ${isScrolled? "dark-text dark:text-white":""} 
                hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Free Trial
                </Link>
            </li>
        </>
    );
}
