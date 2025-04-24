import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ChangePassword = () => {
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const [currentPass, setCurrentPass] = useState(false)


    const toggleShowPass = () => {
        setShowPass(!showPass)
    }
    const toggleConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }
    const toggleCurrentPass = () => {
        setCurrentPass(!currentPass)
    }
    return (
        <div className='add-user-form change-password'>
            <form>
                <div className='input-main-data'>
                    <label>Current Password<span className='asterisk'>*</span></label>
                    <div className={!currentPass ? 'password-style' : ''}>
                        <input type={currentPass ? 'text' : 'password'} placeholder='Enter password' />
                    </div>
                    <button type='button' className='eyeicon' onClick={toggleCurrentPass}>
                        {currentPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                </div>
                <div className='input-main-data'>
                    <label>New Password<span className='asterisk'>*</span></label>
                    <div className={!showPass ? 'password-style' : ''}>
                        <input type={showPass ? 'text' : 'password'} placeholder='Enter password' />
                    </div>
                    <button type='button' className='eyeicon' onClick={toggleShowPass}>
                        {showPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                </div>
                <div className='input-main-data'>
                    <label>Confirm Password<span className='asterisk'>*</span></label>
                    <div className={!showConfirmPass ? 'password-style' : ''}>
                        <input type={showConfirmPass ? 'text' : 'password'} placeholder='Enter password' />
                    </div>
                    <button type='button' className='eyeicon' onClick={toggleConfirmPass}>
                        {showConfirmPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
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

export default ChangePassword;
