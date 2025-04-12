// src/layouts/DashboardLayout.jsx

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "react-pro-sidebar";
import MenuItems from "../../component/sidebar/menuList";
import { DoubleUp } from "../../icons/icons";

const DashboardLayout = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const togggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className="main-box bg-purple">
            <Sidebar collapsed={isCollapsed}  width="220px">
                <MenuItems />
            </Sidebar>
            <main className="flex-1 p-4 relative" style={{backgroundColor:'#1e1e1e'}}>
                <button className="toggle-button bg-accent" onClick={togggleSidebar}>
                    <DoubleUp />
                </button>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
