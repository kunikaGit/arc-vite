import React, { useState } from 'react'
import imageMap from '../../utlis/helper'
import { DownIcon, Logout, MenuIcon, UserIcon } from '../../icons/icons'
import { Link } from 'react-router-dom'
import Drawer from "react-modern-drawer";
import MenuItems from '../sidebar/menuList';
import { logout } from '../../redux/slice/authSlice'
import { useDispatch } from 'react-redux'

const DashboardHeader = ({ title }) => {

    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()
    const handleShowDropDown = () => {
        setShowMenu(!showMenu)
    }
    const [showMToggle, setShowMToggle] = useState(false);
    const toggleMenu = () => {
        setShowMToggle((prevState) => !prevState)
    }
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };
    return (
        <>
            <div className='dahboard-header flex justify-between'>
                <div className='flex items-center gap-x-2'>
                    <button className="mobile-toggle" onClick={toggleMenu}>
                        <MenuIcon />
                    </button>
                    <h2 className="dashboard-title">
                        {title}
                    </h2>
                </div>
                <div className='profile flex item' onClick={handleShowDropDown} onBlur={() => setShowMenu(false)}>
                    <div>
                        <img src={imageMap['man1.jpg']} alt='img2' />
                        <h3 className='text-white md:text-base text-sm'>Verified</h3>
                    </div>
                    <div className='mt-5'>
                        <DownIcon />
                    </div>
                </div>
                {showMenu &&
                    <div className='dropdown'>
                        <ul>
                            <li><Link to="/dashboard/myprofile" className='flex items-center gap-2'><UserIcon />Profile</Link></li>
                            <li><Link  className='flex items-center gap-2' onClick={handleLogout}><Logout />Logout</Link></li>
                        </ul>
                    </div>
                }
            </div>
            <Drawer
                open={showMToggle}
                onClose={toggleMenu}
                direction='left'
                className='mobile-menu'
                style={{ width: "200px" ,backgroundColor:'#2b2a33'}}>
                <MenuItems />
            </Drawer>
        </>
    )
}

export default DashboardHeader