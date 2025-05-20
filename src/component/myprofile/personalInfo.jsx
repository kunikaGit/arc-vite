import { CopyIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const PersonalInfo = ({ countries, formData, setFormData, handleSubmit }) => {
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const [copied, setCopied] = useState(false);

    const inviteLink = `${import.meta.env.VITE_SHARE_LINK}${formData.unique_id || ''}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(inviteLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset icon after 2s
    };
    return (
        <div className='add-user-form'>
            <form onSubmit={handleSubmit}>
                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>First Name<span className='asterisk'>*</span></label>
                        <input name="name" type='text' placeholder='Enter the first name' value={formData.name || ''} // bind to country_id
                            onChange={handleInputChange} />
                    </div>
                    <div className='input-main-data'>
                        <label>Last Name<span className='asterisk'>*</span></label>
                        <input name="surname" type='text' placeholder='Enter the last name' value={formData.surname || ''} // bind to country_id
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>Email<span className='asterisk'>*</span></label>
                        <input name="email" type='text' placeholder='sample@fairbay.lk' value={formData.email || ''} // bind to country_id
                        />
                    </div>
                    <div className='input-main-data'>
                        <label>Phone Number<span className='asterisk'>*</span></label>
                        <input name="contact_number" type='text' placeholder='Add phone number' value={formData.contact_number || ''} // bind to country_id
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>Country<span className='asterisk'>*</span></label>
                        <select
                            name="country_id"
                            value={formData.country_id || ''} // bind to country_id
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Select Country</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='input-main-data'>
                        <label>Age<span className='asterisk'>*</span></label>
                        <input name='age' type='number' placeholder='Age' value={formData.age || ''} // bind to country_id
                            onChange={handleInputChange} />
                    </div>
                </div>


                <div className='two-grid'>
                    <div className='input-main-data'>
                        <label>Share Link (Invite link)<span className='asterisk'></span></label>
                        <div className='relative'>
                        <input readOnly
                            value={inviteLink} // bind to country_id
                            className='pr-8'
                        />
                        <button
                            type="button"
                            onClick={handleCopy}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '18px',
                                position:'absolute',
                                right:'5px',
                                top:'10px'
                            }}
                            title={copied ? "Copied!" : "Copy to clipboard"}
                        >
                            {copied ? '✔️' : <CopyIcon/>}
                        </button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="purple_bordered ml-auto">
                    Save
                </button>

            </form>
        </div>
    )
}

export default PersonalInfo;
