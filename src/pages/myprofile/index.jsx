import React, { useState } from 'react'
import DashboardHeader from '../../component/common/dashboardHeader'
import './myprofile.scss'
import { CameraIcon } from '../../icons/icons';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ChangePassword, PersonalInfo } from '../../component';

const MyProfile = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className='profile-wrapped'>
            <DashboardHeader title="Profile" />
            <div className='upload-image-wrapped'>
                <div className={`${image ? 'remove-boder' : ''}  image-upload-box`}
                    onClick={() => document.getElementById('file-input').click()}>
                    {image ? (
                        <>
                            <img className="image-preview" src={image} alt="Uploaded Preview" />
                            <button type='button' className='camera-button'><CameraIcon /></button>
                        </>
                    ) : (
                        <div className='camera'><CameraIcon /></div>
                    )}
                    <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                </div>
            </div>

            <div className='tab-data'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" className='tab-header'>
                                <Tab label="Personal Information" value="1" />
                                <Tab label="Change Password" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <PersonalInfo/>
                        </TabPanel>
                        <TabPanel value="2">
                            <ChangePassword/>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default MyProfile