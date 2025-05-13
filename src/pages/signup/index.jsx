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

    const { password } = formData;

    const passwordChecks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialChar: /[@$!%*?#&_]/.test(password),
    };

    const requirementList = [
        { label: "At least 8 characters", passed: passwordChecks.length },
        { label: "At least one uppercase", passed: passwordChecks.uppercase },
        { label: "At least one lowercase", passed: passwordChecks.lowercase },
        { label: "At least one number", passed: passwordChecks.number },
        { label: "At least one special char", passed: passwordChecks.specialChar },
    ];
    const PasswordRequirement = ({ label, passed }) => (
        // <div className="requirement">
        //     <span className={`dot ${passed ? 'dot-passed' : 'dot-not-passed'}`}></span>
        //     {label}
        // </div>

         <div className={`requirement ${passed ? 'passed' : 'not-passed'}`}>
        {passed ? '✅' : '❌'} {label}
    </div>


    );

    

    return (
        <OverlayLoading isLoading={loading}>
            <div className='login'>
                <div className='upper-body'>
                    <div className='form-box'>
                        <div className='logo-box'>
                            <Link to='/' className='logo-text animate-gradient mb-5 block text-center'>
                                ARC
                            </Link>
                        </div>
                        <h2 className='main-heading'>Register your account</h2>
                        <form onSubmit={submitForm}>
                            <div className='flex gap-x-2'>
                                <div className='input-main-data w-1/2'>
                                    <label>First name <span className="text-danger">*</span></label>
                                    <input type='text' onChange={handleChange} name='name' />
                                    {formErrors?.name && <div className="error-message">{formErrors.name}</div>}
                                </div>
                                <div className='input-main-data w-1/2'>
                                    <label>Last name <span className="text-danger">*</span></label>
                                    <input type='text' onChange={handleChange} name='surname' />
                                    {formErrors?.surname && <div className="error-message">{formErrors.surname}</div>}
                                </div>
                            </div>
                            <div className='input-main-data'>
                                <label>Email address <span className="text-danger">*</span></label>
                                <input type='email' onChange={handleChange} name='email' />
                                {formErrors?.email && <div className="error-message">{formErrors.email}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Mobile number <span className="text-danger">*</span></label>
                                <input type='text' onChange={handleChange} name='contact_number' maxLength={10} />
                                {formErrors?.contact_number && <div className="error-message">{formErrors.contact_number}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Gender <span className="text-danger">*</span></label>
                                <select name='gender' onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {formErrors?.gender && <div className="error-message">{formErrors.gender}</div>}
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
                                {formErrors?.age && <div className="error-message">{formErrors.age}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Country <span className="text-danger">*</span></label>
                                <select name='country_id' onChange={handleChange}>
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                    ))}
                                </select>
                                {formErrors?.country_id && <div className="error-message">{formErrors.country_id}</div>}
                            </div>

                            <div className='input-main-data'>
                                <label>Profession <span className="text-danger">*</span></label>
                                <select name='profession_id' onChange={handleChange}>
                                    <option value="">Select Profession</option>
                                    {professions.map(prof => (
                                        <option key={prof.id} value={prof.id}>{prof.name}</option>
                                    ))}
                                </select>
                                {formErrors?.profession_id && <div className="error-message">{formErrors.profession_id}</div>}
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

                                {/* Custom 3-2 Layout */}
                                <div className="password-requirements">
                                    <div className="requirement-row">
                                        {requirementList.slice(0, 3).map((req, i) => (
                                            <PasswordRequirement key={i} label={req.label} passed={req.passed} />
                                        ))}
                                    </div>
                                    <div className="requirement-row">
                                        {requirementList.slice(3).map((req, i) => (
                                            <PasswordRequirement key={i + 3} label={req.label} passed={req.passed} />
                                        ))}
                                    </div>
                                </div>

                                {formErrors?.password && <div className="error-message">{formErrors.password}</div>}
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
                                {formErrors?.confirm_password && <div className="error-message">{formErrors.confirm_password}</div>}
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
