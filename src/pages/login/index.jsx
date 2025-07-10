import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { EyeIcon, EyeoffIcon } from '../../icons/icons'
import useLoginUtils from './loginUtils'
import { GoogleLogin } from '@react-oauth/google';
import TelegramLogin from '../signup/telegram';
import imageMap from '../../utlis/helper'
import { successMsg } from '../../utlis/customFn'

const Login = () => {

    const {
        formData,
        formErrors,
        isPasswordVisible,
        handleChange,
        setIsPasswordVisible,
        handleSubmit,
        handleGoogleSuccess
    } = useLoginUtils();
    return (
        <>
        
            <div className='login login-designed'>
                {/* <CommonBanner pagename="Login" bgimage={bgimage} breadcrumbdata={breadcrumbdata} /> */}
                <div className='upper-body' >
                    <div className='form-box'>
                        <div className='logo-box'>
                            <Link to='/' className='logo-text animate-gradient block text-center'>
                                ARC
                            </Link>
                        </div>
                        <h2 className='main-heading' style={{ marginBottom: '40px' }}>
                            Welcome Back!<br />
                            Login to your account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='input-main-data'>
                                <label>Email</label>
                                <input type='text'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && (
                                    <div className="error-message">{formErrors.email}</div>
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
                                    <div className="error-message">{formErrors.password}</div>
                                )}
                            </div>
                            <div className='forgot'>
                                <Link to="/forget-password">Forgot Passwords</Link>
                            </div>
                            <div className='tc'>
                                <p className='my-4'>By logging in you are accepting the terms and conditions of this site</p>
                                {/* <div className='checkbox'>
                                    <input type='checkbox' />
                                    <label>Stay signed in</label>
                                </div> */}
                            </div>
                            <button type='submit' className='login-btn'>Login</button>
                        </form>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
                                <hr style={{ flexGrow: 1 }} />
                                <span style={{ margin: '0 10px', color: '#999' }}>OR</span>
                                <hr style={{ flexGrow: 1 }} />
                            </div>
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={() => console.log('Google Login Failed')}
                            />
                            <TelegramLogin redirectUrl={'https://arcforyou.com/telegram-login-auth'} />
                        </div>

                        <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
                            <hr style={{ flexGrow: 0 }} />
                            <span style={{ margin: '0 10px', color: '#999' }}></span>
                            <hr style={{ flexGrow: 0 }} />
                        </div>
                        <div className='signup-text'>
                            <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
                            <p>Or</p>
                            <p><Link to="/">Back to Home</Link></p>
                        </div>
                        
                    </div>
                    <div className='login-banner'>
                        <div className='logo-box'>
                            <Link to='/' className='logo-text animate-gradient block text-center'>
                                ARC
                            </Link>
                            <h2 className="mb-5  dark:text-jacarta-700 text-black text-center ">
                                Built for Traders, <br />Backed by Professionals
                            </h2>
                            <img src={imageMap['login.png']} alt='img' style={{ maxWidth: '350px' }} className='m-auto login-side-img' />
                       
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
