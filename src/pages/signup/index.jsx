import React from 'react'
import { Link } from 'react-router-dom'
import useSignupUtils from './signupUtils'
import OverlayLoading from '../../component/common/overlayLoader.jsx'
import { EyeIcon, EyeoffIcon } from '../../icons/icons'
import { GoogleLogin } from '@react-oauth/google';
const Signup = () => {
    const {
        submitForm,
        handleChange,
        formErrors,
        formData,
        loading,
        countries,
        professions,
        setIsConfirmPasswordVisible,
        isConfirmPasswordVisible,
        isPasswordVisible,
        setIsPasswordVisible,
        handleGoogleSuccess,
        isRefFromUrl
    } = useSignupUtils();

    return (
        <OverlayLoading isLoading={loading}>
            <div className='login'>
                <div className='upper-body'>
                    <div className='form-box'>
                        <h2 className='main-heading'>Register your account</h2>
                        <form onSubmit={submitForm}>
                            <div className='input-main-data'>
                                <label>Enter first name <span className="text-danger">*</span></label>
                                <input type='text' onChange={handleChange} name='name' />
                                {formErrors?.name && <div className="error-message text-danger">{formErrors.name}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Enter last name <span className="text-danger">*</span></label>
                                <input type='text' onChange={handleChange} name='surname' />
                                {formErrors?.surname && <div className="error-message text-danger">{formErrors.surname}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Email address <span className="text-danger">*</span></label>
                                <input type='email' onChange={handleChange} name='email' />
                                {formErrors?.email && <div className="error-message text-danger">{formErrors.email}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Mobile number <span className="text-danger">*</span></label>
                                <input type='text' onChange={handleChange} name='contact_number' maxLength={10} />
                                {formErrors?.contact_number && <div className="error-message text-danger">{formErrors.contact_number}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Gender <span className="text-danger">*</span></label>
                                <select name='gender' onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {formErrors?.gender && <div className="error-message text-danger">{formErrors.gender}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Age <span className="text-danger">*</span></label>
                                <input
                                    type='number'
                                    inputMode='numeric'
                                    onWheel={(e) => e.target.blur()}
                                    onChange={handleChange}
                                    name='age'
                                />
                                {formErrors?.age && <div className="error-message text-danger">{formErrors.age}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Country <span className="text-danger">*</span></label>
                                <select name='country_id' onChange={handleChange}>
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                    ))}
                                </select>
                                {formErrors?.country_id && <div className="error-message text-danger">{formErrors.country_id}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Profession <span className="text-danger">*</span></label>
                                <select name='profession_id' onChange={handleChange}>
                                    <option value="">Select Profession</option>
                                    {professions.map(prof => (
                                        <option key={prof.id} value={prof.id}>{prof.name}</option>
                                    ))}
                                </select>
                                {formErrors?.profession_id && <div className="error-message text-danger">{formErrors.profession_id}</div>}
                            </div>

                            {!isRefFromUrl && (
                                <div className='input-main-data'>
                                    <label>Referred by</label>
                                    <input type='text' onChange={handleChange} name='referred_by' />
                                </div>
                            )}


                            <div className='input-main-data'>
                                <label>Password <span className="text-danger">*</span></label>
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    onChange={handleChange}
                                    name='password'
                                    value={formData.password || ''}
                                />
                                <div className="eyeicon" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    {isPasswordVisible ? <EyeoffIcon /> : <EyeIcon />}
                                </div>
                                {formErrors?.password && <div className="error-message text-danger">{formErrors.password}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Confirm password <span className="text-danger">*</span></label>
                                <input
                                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                                    onChange={handleChange}
                                    name='confirm_password'
                                    value={formData.confirm_password || ''}
                                />
                                <div className="eyeicon" onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                                    {isConfirmPasswordVisible ? <EyeoffIcon /> : <EyeIcon />}
                                </div>
                                {formErrors?.confirm_password && <div className="error-message text-danger">{formErrors.confirm_password}</div>}
                            </div>

                            <button type='submit' className='login-btn'>Sign up</button>
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
                        </div>

                        <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
                                <hr style={{ flexGrow: 0 }} />
                                <span style={{ margin: '0 10px', color: '#999' }}></span>
                                <hr style={{ flexGrow: 0 }} />
                            </div>

                        <div className='signup-text'>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </OverlayLoading>
    );

};

export default Signup;
