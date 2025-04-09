import React from "react";
import { Menu, SubMenu } from "react-pro-sidebar";
// import { CampaignsIcon, CustomerIcon, FinanceIcon, HelpIcon, InsightIcon, LockIcon, LogisticIcon, NotificationsIcon, OrdersIcon, ProductsIcon, ReviewsIcon } from "../../../icons/icons";
import { Link } from "react-router-dom";
import { DoubleUp } from "../../icons/icons";
import imageMap from "../../utlis/helper";

const MenuItems = () => {
    const SidebarItems = [
        {
            name: 'Accounts',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Funded Longue',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Account',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Billing',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Setting',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Leaderboard',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Insight',
            link: '/',
            imgagepath: <DoubleUp />
        },
        {
            name: 'Merchandise',
            link: '/',
            imgagepath: <DoubleUp />
        },

    ]
    return (
        <div className="sidebar-menus">
            <Link to="/">
                <div className="sidebarlogo">
                    <Link to="/" className="shrink-0">
                        <h2 className="logo-text animate-gradient text-left">ARC</h2>
                    </Link>
                </div>
            </Link>

            <Menu className="sidebar_icon_list ">
                {SidebarItems.map((item, index) => (
                    <SubMenu key={index}
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
                ))}
            </Menu>
        </div>
    );
};

export default MenuItems;
