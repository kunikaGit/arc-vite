import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useApiRequest from "../../hook/useApiRequest";
import { successMsg, errorMsg } from "../../utlis/customFn";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { useNavigate } from 'react-router-dom';
import OverlayLoading from "../../component/common/overlayLoader";

const ChangePassword = () => {
    const { fetchData } = useApiRequest()
    const navigate = useNavigate();

    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [currentPassVisible, setCurrentPassVisible] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true)
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            setLoading(false)

            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            setLoading(false)

            return;
        }

        try {
            const changePasswordRes = await fetchData(API_ENDPOINTS.changePassowrd, navigate, "PUT", { "current_password": currentPassword, "new_password": newPassword, "confirm_password": confirmPassword });
            if (changePasswordRes?.success) successMsg(changePasswordRes.message)
            else errorMsg(changePasswordRes.message);
            setLoading(false)
            // Success response
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            setLoading(false)

            errorMsg(err);
            setError('Failed to change password. Please try again.');
        }
    };

    return (
        <OverlayLoading isLoading={loading}>
            <div className='add-user-form change-password'>
                <form onSubmit={handleSubmit}>
                    <div className='input-main-data'>
                        <label>Current Password<span className='asterisk'>*</span></label>
                        <div className={!currentPassVisible ? 'password-style' : ''}>
                            <input
                                type={currentPassVisible ? 'text' : 'password'}
                                placeholder='Enter current password'
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </div>
                        <button type='button' className='eyeicon' onClick={() => setCurrentPassVisible(!currentPassVisible)}>
                            {currentPassVisible ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    </div>

                    <div className='input-main-data'>
                        <label>New Password<span className='asterisk'>*</span></label>
                        <div className={!showPass ? 'password-style' : ''}>
                            <input
                                type={showPass ? 'text' : 'password'}
                                placeholder='Enter new password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <button type='button' className='eyeicon' onClick={() => setShowPass(!showPass)}>
                            {showPass ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    </div>

                    <div className='input-main-data'>
                        <label>Confirm Password<span className='asterisk'>*</span></label>
                        <div className={!showConfirmPass ? 'password-style' : ''}>
                            <input
                                type={showConfirmPass ? 'text' : 'password'}
                                placeholder='Confirm new password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button type='button' className='eyeicon' onClick={() => setShowConfirmPass(!showConfirmPass)}>
                            {showConfirmPass ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="purple_bordered ml-auto">
                        Save
                    </button>
                </form>
            </div>
        </OverlayLoading>
    );
};

export default ChangePassword;
