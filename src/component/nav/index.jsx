import { Link, useLocation } from "react-router-dom";

export const menu = [
    { id: 1, href: "/arc-home", text: "ARC Home" },
];

export default function AcrNav() {
    const location = useLocation();  // Use `useLocation` to get the current pathname
    const isActiveParentMenu = (menus) => {
        return menus.some(
            (elm) => elm.href.split("/")[1] === location.pathname.split("/")[1]  // Compare with location.pathname
        );
    };

    return (
        <>
            <li className="js-nav-dropdown group relative">
                <Link
                    to="/arc-home"  // Use 'to' instead of 'href' for React Router links
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base 
             ${isActiveParentMenu(menu)
                            ? "text-accent dark:text-accent"
                            : "text-jacarta-700 dark:text-white"
                        } hover:text-accent focus:text-accent  dark:hover:text-accent dark:focus:text-accent lg:px-5`}
                    id="navDropdown-1"
                    aria-expanded="false"
                    role="button">
                    Home
                </Link>
                <ul
          className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-2 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
          aria-labelledby="navDropdown-1"
        >
            <li>
              <Link
                to="/home2"
                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                <span className="mr-4 font-display text-sm ">Home 2</span>
              </Link>
            </li>
            <li>
              <Link
                to="/coming-soon"
                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600">
                <span className="mr-4 font-display text-sm ">Coming Soon</span>
              </Link>
            </li>
        </ul>
            </li>

            <li className="group">
                <Link
                    to="/faq"  // Use 'to' instead of 'href'
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] === location.pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    FAQ
                </Link>
            </li>

            <li className="group">
                <Link
                    to="#"  // Use 'to' instead of 'href'
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] === location.pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    About Us
                </Link>
            </li>

            <li className="group">
                <Link
                    to="/create"  // Use 'to' instead of 'href'
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] === location.pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Client Area
                </Link>
            </li>

            <li className="group">
                <Link
                    to="#"  // Use 'to' instead of 'href'
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] === location.pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Free Trial
                </Link>
            </li>
        </>
    );
}
