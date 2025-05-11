import React from 'react'
import { EyeIcon, EyeoffIcon } from '../../icons/icons'
import useForgetResetPasswordUtils from './forgetAndResetPasswordUtils'
import OverlayLoading from "../../component/common/overlayLoader";

const ResetPassword = () => {

    const {
        formDataReset,
        formErrorsReset,
        handleChangeReset,
        handleSubmitReset,
        setIsConfirmPasswordVisible,
        isConfirmPasswordVisible,
        isPasswordVisible,
        setIsPasswordVisible,
        loading
    } = useForgetResetPasswordUtils();

    return (
        <>
            <OverlayLoading isLoading={loading}>
                <div className='login'>
                    {/* <CommonBanner pagename="Login" bgimage={bgimage} breadcrumbdata={breadcrumbdata} /> */}
                    <div className='upper-body' >
                        <div className='form-box'>
                            <h2 className='main-heading'>Reset Password</h2>
                            <form onSubmit={handleSubmitReset}>
                                <div className='input-main-data'>
                                    <label>Password <span className="text-danger">*</span></label>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        onChange={handleChangeReset}
                                        name='newPassword'
                                        value={formDataReset.newPassword || ''}
                                    />
                                    <div className="eyeicon" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                        {isPasswordVisible ? <EyeoffIcon /> : <EyeIcon />}
                                    </div>
                                    {formErrorsReset?.newPassword && <div className="error-message text-danger">{formErrorsReset.newPassword}</div>}
                                </div>

                                <div className='input-main-data'>
                                    <label>Confirm password <span className="text-danger">*</span></label>
                                    <input
                                        type={isConfirmPasswordVisible ? 'text' : 'password'}
                                        onChange={handleChangeReset}
                                        name='confirmPassword'
                                        value={formDataReset.confirmPassword || ''}
                                    />
                                    <div className="eyeicon" onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                                        {isConfirmPasswordVisible ? <EyeoffIcon /> : <EyeIcon />}
                                    </div>
                                    {formErrorsReset?.confirmPassword && <div className="error-message text-danger">{formErrorsReset.confirmPassword}</div>}
                                </div>
                                <button type='submit' className='login-btn'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </OverlayLoading>
        </>
    )
}

export default ResetPassword
