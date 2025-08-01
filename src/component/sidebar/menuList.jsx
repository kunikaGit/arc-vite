import React from "react";
import { Menu, SubMenu } from "react-pro-sidebar";
// import { CampaignsIcon, CustomerIcon, FinanceIcon, HelpIcon, InsightIcon, LockIcon, LogisticIcon, NotificationsIcon, OrdersIcon, ProductsIcon, ReviewsIcon } from "../../../icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { BarchartIcon, FileIcon, HomeIcon, Logout, SettingIcon, UserIcon } from "../../icons/icons";
import { logout } from "../../redux/slice/authSlice";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux'

const MenuItems = () => {
        const dispatch = useDispatch()
    
    const navigate = useNavigate()


        const handleLogout = (e) => {
            e.preventDefault()
            dispatch(logout());
            navigate("/");
        };

    const SidebarItems = [
        {
            name: 'Account Overview',
            link: '/dashboard/account-overview',
            imgagepath: <UserIcon />
        },
        {
            name: 'Funded Longue',
            link: '/dashboard/withdrawal',
            imgagepath: <FileIcon />
        },
        {
            name: 'Billing',
            link: '/dashboard/billing',
            imgagepath: <FileIcon />
        },
        // {
        //     name: 'Setting',
        //     link: '#/',
        //     imgagepath: <SettingIcon />
        // },
        {
            name: 'Leaderboard',
            link: '/dashboard/leaderboard',
            imgagepath: <BarchartIcon />
        },

        {
            name: 'Merchandise',
            link: '/dashboard/merchandise',
            imgagepath: <UserIcon />
        },


    ]
    return (
        <div className="sidebar-menus">
            <div className="sidebarlogo">
                <Link to="/" className="w-full">
                    <h2 className="animate-gradient text-left font-extrabold">ARC</h2>
                </Link>
            </div>

            <Menu className="sidebar_icon_list ">
                {SidebarItems.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <>
                            <SubMenu key={index} onClick={() => navigate(item.link)}
                                className={`sidebar_label ${isActive ? "active" : ""}`}
                                label={
                                    <div className="sidebar_label">
                                        <div className="icon">
                                            {item.imgagepath}
                                        </div>
                                        <div className="name">
                                            {item.name}
                                        </div>
                                    </div>
                                }>
                            </SubMenu>

                        </>
                    )
                })}
                <SubMenu onClick={() => window.open("https://arc-partner-portal.vercel.app/")}
                    className={`sidebar_label`}
                    label={
                        <div className="sidebar_label">
                            <div className="icon">
                                <UserIcon />
                            </div>
                            <div className="name">
                                Partners
                            </div>
                        </div>
                    }>
                </SubMenu>
                  <SubMenu onClick={(e) => handleLogout(e)}
                    className={`sidebar_label`}
                    label={
                        <div className="sidebar_label">
                            <div className="icon">
                                <Logout />
                            </div>
                            <div className="name">
                                Logout
                            </div>
                        </div>
                    }>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default MenuItems;
