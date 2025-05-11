import React, { useState } from 'react'
import imageMap from '../../utlis/helper'
import { DownIcon, Logout, MenuIcon, UserIcon } from '../../icons/icons'
import { Link } from 'react-router-dom'
import Drawer from "react-modern-drawer";
import MenuItems from '../sidebar/menuList';
import { logout } from '../../redux/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ title }) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isloginSuccess);
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
                <ul className='flex gap-5 items-center'>
                    <li><Link to="/" className='flex items-center gap-x-2 text-sm rounded-full bg-accent py-3 px-4 text-center font-medium  shadow-accent-volume transition-all hover:bg-accent-dark'
                     onClick={handleLogout}>
                     Logout <Logout />
                     </Link>
                    </li>
                    <li>
                        <div className='profile flex item' onClick={handleShowDropDown} onBlur={() => setShowMenu(false)}>
                            <div>
                                <img src={imageMap['man1.jpg']} alt='img2' />
                                <h3 className=' md:text-base text-sm'>Verified</h3>
                            </div>
                        </div>
                    </li>
                </ul>
                {showMenu &&
                    <div className='dropdown'>
                        <ul>
                            <li><Link to="/dashboard/myprofile" className='flex items-center gap-2'><UserIcon />Profile</Link></li>
                        </ul>
                    </div>
                }
            </div>
            <Drawer
                open={showMToggle}
                onClose={toggleMenu}
                direction='left'
                className='mobile-menu'
                style={{ width: "200px", backgroundColor: '#2b2a33' }}>
                <MenuItems />
            </Drawer>
        </>
    )
}

export default DashboardHeader