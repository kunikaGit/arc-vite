import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { EyeIcon, EyeoffIcon } from '../../icons/icons'
import useLoginUtils from './loginUtils'

const Login = () => {

    const {
        formData,
        formErrors,
        isPasswordVisible,
        handleChange,
        setIsPasswordVisible,
        handleSubmit,
    } = useLoginUtils();

    return (
        <>
            <div className='login'>
                {/* <CommonBanner pagename="Login" bgimage={bgimage} breadcrumbdata={breadcrumbdata} /> */}
                <div className='upper-body' >
                    <div className='form-box'>
                        <h2 className='main-heading'>Login to your account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='input-main-data'>
                                <label>Email</label>
                                <input type='text'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && (
                                    <div className="error-message text-danger">{formErrors.email}</div>
                                )}
                            </div>
                            <div className='input-main-data'>
                                <label>Password</label>
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange} />
                                <div className="eyeicon" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    {isPasswordVisible ? <EyeoffIcon /> : <EyeIcon />}
                                </div>
                                {formErrors.password && (
                                    <div className="error-message text-danger">{formErrors.password}</div>
                                )}
                            </div>
                            <div className='forgot'>
                                <Link to="/forgot">Forgot Passwords</Link>
                            </div>
                            <div className='tc'>
                                <p>By logging in you are accepting the terms and conditions of this site</p>
                                <div className='checkbox'>
                                    <input type='checkbox' />
                                    <label>Stay signed in</label>
                                </div>
                            </div>
                            <button type='submit' className='login-btn'>Login</button>
                        </form>
                        <div className='signup-text'>
                            <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
