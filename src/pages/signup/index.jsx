import React from 'react'
import { Link } from 'react-router-dom'
import useSignupUtils from './signupUtils'
import OverlayLoading from '../../component/common/overlayLoader.jsx'

const Signup = () => {

    const {
        submitForm,
        handleChange,
        formErrors,
        loading } = useSignupUtils()
    return (
        <>
            <OverlayLoading isLoading={loading}>
                <div className='login'>
                    <div className='upper-body'>
                        <div className='form-box'>
                            <h2 className='main-heading'>Register your account</h2>
                            <form onSubmit={submitForm}>
                                <div className='input-main-data'>
                                    <label>Enter first name</label>
                                    <input type='text' onChange={handleChange} name='first_name' />
                                    {formErrors?.first_name && (
                                        <div className="error-message text-danger">{formErrors.first_name}</div>
                                    )}
                                </div>
                                <div className='input-main-data'>
                                    <label>Enter last name</label>
                                    <input type='text' onChange={handleChange} name='last_name' />
                                    {formErrors?.last_name && (
                                        <div className="error-message text-danger">{formErrors.last_name}</div>
                                    )}
                                </div>
                                <div className='input-main-data'>
                                    <label>Email address</label>
                                    <input type='text' onChange={handleChange} name='email' />
                                    {formErrors?.email && (
                                        <div className="error-message text-danger">{formErrors?.email}</div>
                                    )}
                                </div>
                                <div className='input-main-data'>
                                    <label>Mobile number</label>
                                    <input type='numebr' onChange={handleChange} name='phone_number' max={10} />
                                    {formErrors?.phone_number && (
                                        <div className="error-message text-danger">{formErrors?.phone_number}</div>
                                    )}
                                </div>
                                <div className='input-main-data'>
                                    <label>Password</label>
                                    <input type='password' onChange={handleChange} name='password' />
                                    {formErrors?.password && (
                                        <div className="error-message text-danger">{formErrors?.password}</div>
                                    )}
                                </div>
                                <div className='input-main-data'>
                                    <label>Confirm password</label>
                                    <input type='password' onChange={handleChange} name='confirmPassword' />
                                    {formErrors?.confirmPassword && (
                                        <div className="error-message text-danger">{formErrors?.confirmPassword}</div>
                                    )}
                                </div>
                                <div className='checkbox'></div>
                                <button type='submit' className='login-btn'>Sign up</button>
                            </form>
                            <div className='signup-text'>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </OverlayLoading>
        </>
    )
}

export default Signup
