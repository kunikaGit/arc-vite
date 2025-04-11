import React from "react";
import { Menu, SubMenu } from "react-pro-sidebar";
// import { CampaignsIcon, CustomerIcon, FinanceIcon, HelpIcon, InsightIcon, LockIcon, LogisticIcon, NotificationsIcon, OrdersIcon, ProductsIcon, ReviewsIcon } from "../../../icons/icons";
import { Link } from "react-router-dom";
import { BarchartIcon, FileIcon, HomeIcon, SettingIcon, UserIcon } from "../../icons/icons";

const MenuItems = () => {
    const SidebarItems = [
        {
            name: 'Accounts',
            link: '/',
            imgagepath: <HomeIcon />
        },
        {
            name: 'Funded Longue',
            link: '/',
            imgagepath: <FileIcon />
        },
        {
            name: 'Account',
            link: '/',
            imgagepath: <UserIcon />
        },
        {
            name: 'Billing',
            link: '/',
            imgagepath: <FileIcon />
        },
        {
            name: 'Setting',
            link: '/',
            imgagepath: <SettingIcon/>
        },
        {
            name: 'Leaderboard',
            link: '/',
            imgagepath: <BarchartIcon />
        },
        {
            name: 'Insight',
            link: '/',
            imgagepath: <BarchartIcon />
        },
        {
            name: 'Merchandise',
            link: '/',
            imgagepath: <UserIcon />
        },

    ]
    return (
        <div className="sidebar-menus ">
                <div className="sidebarlogo">
                    <Link to="/" className="shrink-0">
                        <h2 className="logo-text animate-gradient text-left">ARC</h2>
                    </Link>
                </div>

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
