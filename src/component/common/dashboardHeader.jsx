import React from 'react'
import imageMap from '../../utlis/helper'

const DashboardHeader = ({title}) => {
    return (
        <div className='dahboard-header flex justify-between'>
            <h2 className="dashboard-title">
                {title}
            </h2>
            <div className='profile'>
                <img src={imageMap['man1.jpg']} alt='img'/>
                <h3 className='text-white text-base'>Verified</h3>
            </div>
        </div>
    )
}

export default DashboardHeader