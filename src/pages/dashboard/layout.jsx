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
        <div className="main-box bg-2b2a33">
            <div className="sidebar-wrapped">
            <Sidebar collapsed={isCollapsed} width="200">
                <MenuItems />
            </Sidebar>
            </div>
            <main className={`${isCollapsed ? 'width80' : 'width200'}`} style={{ backgroundColor: '#1e1e1e' }}>
                <button className="toggle-button bg-accent" onClick={togggleSidebar}>
                    <DoubleUp />
                </button>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
