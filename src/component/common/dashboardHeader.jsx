import React, { useState } from 'react'
import imageMap from '../../utlis/helper'
import { DownIcon, Logout, UserIcon } from '../../icons/icons'
import { Link } from 'react-router-dom'

const DashboardHeader = ({ title }) => {

    const [showMenu, setShowMenu] = useState(false)
    const handleShowDropDown = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className='dahboard-header flex justify-between'>
            <h2 className="dashboard-title">
                {title}
            </h2>
            <div className='profile flex item' onClick={handleShowDropDown} onBlur={()=>setShowMenu(false)}>
                <div>
                    <img src={imageMap['man1.jpg']} alt='img' />
                    <h3 className='text-white text-base'>Verified</h3>
                </div>
                <div className='mt-5'>
                <DownIcon/>
                </div>
            </div>
            {showMenu &&
            <div className='dropdown'>
                <ul>
                    <li><Link to="#" className='flex items-center gap-2'><UserIcon />Profile</Link></li>
                    <li><Link to="#" className='flex items-center gap-2'><Logout/>Logout</Link></li>
                </ul>
            </div>
}
        </div>
    )
}

export default DashboardHeader