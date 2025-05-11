import React from 'react'
import useLoginUtils from './forgetAndResetPasswordUtils'
import OverlayLoading from "../../component/common/overlayLoader";
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

    const {
        emailForget, setEmailForget,
        handleSubmitForget,
        emailForgetError,
        loading
    } = useLoginUtils();

    return (
        <>
            <OverlayLoading isLoading={loading}>
                <div className='login'>
                    <div className='upper-body' >
                        <div className='form-box'>
                            <div className='logo-box'>
                            <Link to='/' className='logo-text animate-gradient mb-5 block text-center'>
                                ARC
                            </Link>
                            </div>
                            <h2 className='main-heading'>Forget Password</h2>
                            <form onSubmit={handleSubmitForget}>
                                <div className='input-main-data'>
                                    <label>Email</label>
                                    <input type='text'
                                        name='email'
                                        value={emailForget}
                                        onChange={(e) => setEmailForget(e.target.value)}
                                    />
                                    {emailForgetError && (
                                        <div className="error-message text-danger">{emailForgetError}</div>
                                    )}
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

export default ForgetPassword
