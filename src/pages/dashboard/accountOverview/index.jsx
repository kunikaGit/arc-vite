import React from "react";
// import { FilterIcon, UserHeart } from "../../../icons/icons";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";
import './accountOverview.scss'
import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { DownIcon, UserHeart } from "../../../icons/icons";
import { FilterIcon } from "lucide-react";


const accTypeOption = [{ title: 'Novoice' }, { title: 'Expert' }, { title: 'Funded' }]
const accStatusOption = [{ title: 'Active' }, { title: 'Inactive' }, { title: 'Breached' }]

const Accounts = () => {
    const [accType, setAccType] = React.useState('');
    const [accStatus, setAccStatus] = React.useState('');


    const handleAccTypeChange = (event) => {
        setAccType(event.target.value);
    };
    const handleAccSatusChange = (event) => {
        setAccStatus(event.target.value);
    };
    return (
        <>
            <DashboardHeader title="Account Overview" />
            <div className="accounts-overview-wrapped">
                <div className="filters">
                    <div className='input-main-data select-mui-vs'>
                        <Autocomplete
                            autoComplete={false}
                            options={accTypeOption.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            popupIcon={<FilterIcon />}
                            onChange={handleAccTypeChange}
                            renderInput={(params) =>
                            (<TextField
                                value={accType}
                                {...params} placeholder='Account Type'
                            />)}
                        />
                    </div>
                    <div className='input-main-data select-mui-vs '>
                        <Autocomplete
                            autoComplete={false}
                            options={accStatusOption.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            popupIcon={<FilterIcon />}
                            onChange={handleAccSatusChange}
                            renderInput={(params) =>
                            (<TextField
                                value={accStatus}
                                {...params} placeholder='Account Satus' />)}
                        />
                    </div>
                    <div className="btn">
                        <Link
                            to="/#pricing"
                            className="block text-sm rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                            Start Now
                        </Link>
                    </div>
                </div>
                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5 card-content justify-between">
                    <div className="overview flex items-center gap-x-3 w-full">
                        <input
                            type="radio"
                            name="table-data"
                            value="0.1"
                            className=" h-5 w-5 items-center rounded-full border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                        />
                        <div className="icon"><UserHeart /> </div>
                        <div className="text-content">
                            <h3 className="font-light mb-1">ARC_100k Novoice</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>

                    </div>
                    <div className="btn">
                        <Link
                            to="/dashboard"
                            className="block text-sm rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                            Dashboard
                        </Link>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5 card-content">
                    <div className="overview flex items-center gap-x-3 w-full">
                        <input
                            type="radio"
                            name="table-data"
                            value="0.1"
                            className=" h-5 w-5 items-center rounded-full border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                        />
                        <div className="icon"><UserHeart /> </div>
                        <div className="text-content">
                            <h3 className="font-light mb-1">ARC_100k Expert</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                    </div>
                    <div className="btn">
                        <Link
                            to="/dashboard"
                            className="block text-sm rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                            Dashboard
                        </Link>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5 card-content">
                    <div className="overview flex  gap-x-3 w-full items-center">
                        <input
                            type="radio"
                            name="table-data"
                            value="0.1"
                            className=" h-5 w-5 items-center rounded-full border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                        />
                        <div className="icon"><UserHeart /> </div>
                        <div className="text-content">
                            <h3 className="font-light mb-1">ARC_100k Funded</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                    </div>
                    <div className="btn">
                        <Link
                            to="/dashboard"
                            className="block text-sm rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                            Dashboard
                        </Link>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 data-table">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Lot</th>
                                <th>Entry</th>
                                <th>Tp</th>
                                <th>SL</th>
                                <th>Pips</th>
                                <th>Profit/Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Accounts