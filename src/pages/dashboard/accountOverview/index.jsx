import React from "react";
// import { FilterIcon, UserHeart } from "../../../icons/icons";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";
import './accountOverview.scss'
import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { DownIcon, UserHeart } from "../../../icons/icons";
import { FilterIcon } from "lucide-react";

const trades = [
    { position: "Buy", lot: 1.5, entry: 1.1250, tp: 1.1350, sl: 1.1200, pips: 100, profitLoss: "$150" },
    { position: "Sell", lot: 2.0, entry: 1.2500, tp: 1.2400, sl: 1.2550, pips: 100, profitLoss: "$200" },
    { position: "Buy", lot: 0.5, entry: 0.9500, tp: 0.9600, sl: 0.9450, pips: 100, profitLoss: "$50" },
    { position: "Sell", lot: 1.0, entry: 1.7500, tp: 1.7400, sl: 1.7550, pips: 100, profitLoss: "$100" },
    { position: "Buy", lot: 2.5, entry: 1.1350, tp: 1.1450, sl: 1.1300, pips: 100, profitLoss: "$250" },
    { position: "Sell", lot: 1.2, entry: 1.4800, tp: 1.4700, sl: 1.4850, pips: 100, profitLoss: "$120" },
    { position: "Buy", lot: 0.8, entry: 1.0950, tp: 1.1050, sl: 1.0900, pips: 100, profitLoss: "$80" },
    { position: "Sell", lot: 1.4, entry: 1.3200, tp: 1.3100, sl: 1.3250, pips: 100, profitLoss: "$140" },
    { position: "Buy", lot: 1.0, entry: 0.8000, tp: 0.8100, sl: 0.7950, pips: 100, profitLoss: "$100" },
    { position: "Sell", lot: 3.0, entry: 1.6000, tp: 1.5900, sl: 1.6050, pips: 100, profitLoss: "$300" },
    { position: "Buy", lot: 0.7, entry: 1.0150, tp: 1.0250, sl: 1.0100, pips: 100, profitLoss: "$70" },
    { position: "Sell", lot: 2.0, entry: 1.7000, tp: 1.6900, sl: 1.7050, pips: 100, profitLoss: "$200" },
    { position: "Buy", lot: 1.6, entry: 0.9850, tp: 0.9950, sl: 0.9800, pips: 100, profitLoss: "$160" },
    { position: "Sell", lot: 1.5, entry: 1.2800, tp: 1.2700, sl: 1.2850, pips: 100, profitLoss: "$150" },
    { position: "Buy", lot: 1.3, entry: 1.0550, tp: 1.0650, sl: 1.0500, pips: 100, profitLoss: "$130" }
];


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
                            popupIcon={<DownIcon/>}
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
                            popupIcon={<DownIcon />}
                            onChange={handleAccSatusChange}
                            renderInput={(params) =>
                            (<TextField
                                value={accStatus}
                                {...params} placeholder='Account Satus' />)}
                        />
                    </div>
                    <Link
                        to="/#pricing"
                        className="purple_bordered">
                        Start Now
                    </Link>
                </div>
                <div className="card-container">

                    <div className="theme_card bg-grey mb-5  gap-5 card-content ">
                        <div className="overview flex items-center gap-x-3 w-full">
                            <input
                                type="radio"
                                name="table-data"
                                value="0.1"
                                defaultChecked
                                className=" h-5 w-5 items-center rounded-full border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                            />
                            <div className="icon"><UserHeart /> </div>
                            <div className="text-content">
                                <h3 className="font-light mb-1">ARC_100k Novoice</h3>
                                <h4 className="font-light">Balance : $106.600</h4>
                            </div>

                        </div>
                        <div className="btn">
                            <Link to="/dashboard" className="purple_bordered">Dashboard</Link>
                        </div>
                    </div>

                    <div className="theme_card bg-grey mb-5  gap-5 card-content">
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
                            <Link to="/dashboard" className="purple_bordered">Dashboard</Link>
                        </div>
                    </div>

                    <div className="theme_card bg-grey mb-5  gap-5 card-content">
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
                            <Link to="/dashboard" className="purple_bordered">Dashboard</Link>
                        </div>
                    </div>

                </div>
                <div className="theme_card bg-grey data-table">
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
                            {trades.map((trade, index) => (
                                <tr key={index} className="text-center ">
                                    <td className="p-2">{trade.position}</td>
                                    <td className="p-2">{trade.lot}</td>
                                    <td className="p-2">{trade.entry}</td>
                                    <td className="p-2">{trade.tp}</td>
                                    <td className="p-2">{trade.sl}</td>
                                    <td className="p-2">{trade.pips}</td>
                                    <td
                                        className={`p-2 ${trade.profitLoss.includes("-")
                                                ? "text-red-500"
                                                : "text-green-500"
                                            }`}
                                    >
                                        {trade.profitLoss}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                
            </div>
        </>
    )
}
export default Accounts