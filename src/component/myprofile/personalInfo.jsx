import React from 'react'
import { Link } from 'react-router-dom';


const PersonalInfo = () => {

    return (
        <div className='add-user-form'>
            <form>
                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>First Name<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter the first name' />
                    </div>
                    <div className='input-main-data'>
                        <label>Last Name<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter the last name' />
                    </div>
                </div>
                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>Email<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='sample@fairbay.lk   ' />
                    </div>
                    <div className='input-main-data'>
                        <label>Phone Number<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Add phone number' />
                    </div>
                </div>
                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>City<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='sample@fairbay.lk   ' />
                    </div>
                    <div className='input-main-data'>
                        <label>Date of birth<span className='asterisk'>*</span></label>
                        <input type='date' placeholder='Add phone number' />
                    </div>
                </div>
                <Link
                    to="#/"
                    className="ml-auto  w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                    Save
                </Link>
            </form>
        </div>
    )
}

export default PersonalInfo;
