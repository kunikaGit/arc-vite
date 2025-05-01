import React, { useState } from "react";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";
import './withdrawalStep2.scss'
import { CalenderIcon, Cross, WalletIcon } from "../../../icons/icons";
import DailyCalender from "../../../component/common/calender";
import { Box, Modal } from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 'auto',
    color: '#fff',
    boxShadow: 24,
    borderRadius: '20px',
};
const WithdrawalStep2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setIsModalOpen(false)
    }
    const handleOpenModal = () => {
        setIsModalOpen(true)
    }
    return (
        <>
            <DashboardHeader title="Withdrawal" />
            <div className="withdrawal-wrapped">
                <div className="flex-box">
                    <div className="left-side">
                        <div className="block1 mb-4">
                            <h2 className="font-semibold text-lg mb-3">Contract</h2>
                            <div className="theme_card bg-2b2a33">
                                <div className="flex justify-between mb-2"><span>1. Contract 1</span>
                                    <Link to="#"
                                        className="w-fit block text-sm rounded-full bg-accent py-2 px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                        View
                                    </Link>
                                </div>
                                <div className="flex justify-between mb-2"><span>2. Contract 2</span>
                                    <Link to="#"
                                        className="w-fit block text-sm rounded-full bg-accent py-2 px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                        View
                                    </Link>
                                </div>
                                <div className="flex justify-between"><span>3. Contract 3</span>
                                    <Link to="#"
                                        className="w-fit block text-sm rounded-full bg-accent py-2 px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="payout">
                            <h2 className="font-semibold text-lg mb-3">Payouts</h2>
    
                            <div className="theme_card bg-2b2a33 ">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Account</th>
                                            <th>Date</th>
                                            <th>Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1)</td>
                                            <td>12345678</td>
                                            <td>14/05/2025</td>
                                            <td>$430</td>
                                            {/* <td><Link to="/dashboard/withdrawal/step3"><WalletIcon /></Link></td> */}
                                        </tr>
                                        <tr>
                                            <td>2)</td>
                                            <td>12345678</td>
                                            <td>14/05/2025</td>
                                            <td>$430</td>
                                            {/* <td><Link to="/dashboard/withdrawal/step3"><WalletIcon /></Link></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="mb-4">
                            <h2 className="font-semibold text-lg mb-3 flex items-center">Profit Split <span className="text-base">(14 days)</span>
                            <button type="button" className="bg-transparent border-none block" style={{marginLeft:'10px'}}
                             onClick={handleOpenModal}><CalenderIcon/></button>
                            </h2>
                            <Link to="/dashboard/withdrawal/step3"
                                className="withdraw-btn md:w-fit block md:text-base text-sm rounded-full bg-accent py-3 px-8 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Withdraw
                            </Link>
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg mb-3">Withdrawal Steps <span className="text-base">2 days left</span></h2>
                            <div className="flex md:gap-x-4 gap-x-2 theme_card bg-2b2a33 justify-around">
                                <div className=" border border-accent px-2 py-2 rounded-3xl md:text-base text-sm md:px-4">Step 1</div>
                                <div className=" border border-accent px-2 py-2 rounded-3xl md:text-base text-sm md:px-4">Step 2</div>
                                <div className=" border border-accent px-2 py-2 rounded-3xl md:text-base text-sm md:px-4">Step 3</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="modal-large bg-accent">
                    <button type="button" className="bg-transparent border-0 absolute right-3 top-1.5" onClick={() => handleClose()}>
                        <Cross />
                    </button>
                    <div className="theme_card bg-2b2a33 calender-data mt-0" style={{ marginTop: '0' }}>
                        <DailyCalender handleClose={handleClose}/>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default WithdrawalStep2