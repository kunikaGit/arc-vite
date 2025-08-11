
import React, { useEffect, useState } from "react";
import {
  addMobileMenuToggle,
  removeMenuActive,
} from "../../utlis/mobileMenuToggle"
import { Link } from "react-router-dom";
import Nav2 from "./nav2";

export default function Header2() {

  useEffect(() => {
    addMobileMenuToggle();
    return () => {
      removeMenuActive();
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`js-page-header  main-header fixed top-0 z-20 w-full backdrop-blur transition-colors  ${scrolled ? "js-page-header--is-sticky sticky-header" : ""
          }`}
      >
        <div className="flex items-center px-6 xl:px-24" >
          {/* Logo */}
          <Link to="/" style={{ width: '200px' }}>
            <h2 className="logo-text animate-gradient ">ARC</h2>
          </Link>
          {/* Search */}
          {/* Menu / Actions */}
          <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center  opacity-0 lg:relative lg:inset-auto lg:flex lg:opacity-100 lg:bg-transparent ">
            {/* Mobile Logo / Menu Close */}
            <div className="t-0 left-0 z-10 flex w-full items-center justify-between  p-6 pl-0 dark:bg-jacarta-800 lg:hidden mobile-menu">
              {/* Mobile Logo */}
              <Link to="/" >
                <h2 className="logo-text animate-gradient ">ARC</h2>
              </Link>

              {/* Mobile Menu Close */}
              <button
                className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                aria-label="close mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>


            {/* Primary Nav */}
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                <Nav2 />
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Actions */}
          <div className="ml-auto flex lg:hidden">
            {/* Mobile Menu Toggle */}
            <button
              className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
              aria-label="open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
