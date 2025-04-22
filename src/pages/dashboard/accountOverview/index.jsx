import React from "react";
// import { FilterIcon, UserHeart } from "../../../icons/icons";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";
import './accountOverview.scss'
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from '@mui/material/styles';
import { UserHeart } from "../../../icons/icons";


const CustomSelect = styled(Select)(({ theme }) => ({
    backgroundColor: '#2b2a33',
    color: '#fff',
    borderRadius: '4px',
    padding: '10px 32px 10px 12px', // left/right padding to make room for custom arrow
    '& .MuiSelect-select': {
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
    },
    '& .MuiSelect-icon': {
      display: 'none', // Hide default arrow
    },
    '& fieldset': {
      border: 'none', // Remove default border
    },
    '&:hover': {
      backgroundColor: '#2b2a33',
    },
    '&:focus': {
      backgroundColor: '#2b2a33',
    },
    '& .Mui-disabled': {
      color: '#fff', // keep text white even when disabled
    },
  }));
const Accounts = () => {
    const [accType, setAccType] = React.useState('');

    const handleAccTypeChange = (event) => {
        setAccType(event.target.value);
    };
    return (
        <>
            <DashboardHeader title="Account Overview" />
            <div className="accounts-overview-wrapped">
                {/* <div className="filter">
                    <Box sx={{ minWidth: 120,width:120 }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" shrink={false}>Age</InputLabel>
                            <CustomSelect
                                variant="filled"
                                value={accType}
                                label="Account Type"
                                onChange={handleAccTypeChange}
                                
                            >
                                <MenuItem value={10}>Novoice</MenuItem>
                                <MenuItem value={20}>Expert</MenuItem>
                                <MenuItem value={30}>Funded</MenuItem>
                            </CustomSelect>
                        </FormControl>
                    </Box>
                </div> */}
                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full">
                        <div>
                            <h3 className="font-light mb-1">ARC_100k Novoice</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard"
                                className=" w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full">
                        <div>
                            <h3 className="font-light mb-1">ARC_100k Expert</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard"
                                className=" w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full">
                        <div>
                            <h3 className="font-light mb-1">ARC_100k Funded</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard"
                                className=" w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Accounts