import React from "react";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";
import './withdrawalStep2.scss'
import { WalletIcon } from "../../../icons/icons";
import DailyCalender from "../../../component/common/calender";

const WithdrawalStep2 = () => {
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
                                            <th>Withdraw</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1)</td>
                                            <td>12345678</td>
                                            <td>14/05/2025</td>
                                            <td>$430</td>
                                            <td><Link to="/dashboard/withdrawal/step3"><WalletIcon /></Link></td>
                                        </tr>
                                        <tr>
                                            <td>2)</td>
                                            <td>12345678</td>
                                            <td>14/05/2025</td>
                                            <td>$430</td>
                                            <td><Link to="/dashboard/withdrawal/step3"><WalletIcon /></Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="mb-4">
                            <h2 className="font-semibold text-lg mb-3">Profit Split <span className="text-base">2 days left</span></h2>
                            <div className="theme_card bg-2b2a33 calender-data mt-0" style={{ marginTop: '0' }}>
                                <DailyCalender />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg mb-3">Withdrawal Steps <span className="text-base">2 days left</span></h2>
                            <div className="flex gap-x-4 theme_card bg-2b2a33 justify-around">
                                <div className=" border border-accent px-4 py-2 rounded-3xl text-base">Step 1</div>
                                <div className=" border border-accent px-4 py-2 rounded-3xl text-base">Step 2</div>
                                <div className=" border border-accent px-4 py-2 rounded-3xl text-base">Step 3</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default WithdrawalStep2