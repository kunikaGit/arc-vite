import React, { useState, useEffect } from 'react'
import DashboardHeader from '../../component/common/dashboardHeader'
import './myprofile.scss'
import { CameraIcon } from '../../icons/icons';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ChangePassword, PersonalInfo } from '../../component';
import useApiRequest from "../../hook/useApiRequest";
import { successMsg, errorMsg } from "../../utlis/customFn";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { useNavigate } from 'react-router-dom';
import OverlayLoading from "../../component/common/overlayLoader";

const MyProfile = () => {
    const { fetchData } = useApiRequest()
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({});
    const [countries, setCountries] = useState([])
    const [loading, seLoading] = useState(false)

    const navigate = useNavigate();

    const fetchApis = async () => {
        seLoading(true)
        try {

            const countriesRes = await fetchData(API_ENDPOINTS.countries, navigate, "GET");
            if (countriesRes?.data) setCountries(countriesRes.data);

            const profileRes = await fetchData(API_ENDPOINTS.getProfile, navigate, "GET");
            if (profileRes?.data) setFormData(profileRes.data);

            //const imageBaseUrl = import.meta.env.REACT_APP_IMAGE_BASE_URL || '';

            if (profileRes?.data?.profile_picture) {
              //  const sanitizedUrl = `${imageBaseUrl.replace(/\/+$/, '')}/${profileRes.data.profile_picture.replace(/^\/+/, '')}`;
                setImage(profileRes?.data?.profile_picture);
            }
            seLoading(false)

        } catch (error) {
            seLoading(false)

            console.error("Profile fetch error", error);
        }
    }
    useEffect(() => {
        fetchApis()
    }, [])

    const [imageFile, setImageFile] = useState(null)
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const data = new FormData();
            data.append("name", formData.name || '');
            data.append("surname", formData.surname || '');
            data.append("email", formData.email || '');
            data.append("contact_number", formData.contact_number || '');
            data.append("country_id", formData.country_id || '');
            data.append("age", formData.age || '');
            if (imageFile) {
                data.append("profile_picture", imageFile);
            }

            const res = await fetchData(API_ENDPOINTS.updateProfile, navigate, "PUT", data); // `true` to send as multipart/form-data

            if (res?.success) {
                successMsg("Profile updated successfully");
                fetchApis(); // reload latest data
            } else {
                errorMsg(res?.message || "Update failed");
            }
        } catch (err) {
            console.error(err);
            errorMsg("Something went wrong!");
        }
    };

    return (
        <>            <OverlayLoading isLoading={loading}>

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
                                <PersonalInfo countries={countries}
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleSubmit={handleSubmit} />
                            </TabPanel>
                            <TabPanel value="2">
                                <ChangePassword />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </OverlayLoading>
        </>

    )
}

export default MyProfile