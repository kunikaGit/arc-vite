import React from "react";
import { DashboardHeader } from "../../../component";
import './withdrawalStep3.scss'
import imageMap from "../../../utlis/helper";
import { Link } from "react-router-dom";

const WithdrawalStep3 = () => {
    return (
        <>
            <DashboardHeader title="Withdrawal" />
            <div className="withdrawal2-wrapped">
                <div className="flex-box mb-5">
                    <div className="left-side">
                        <div className="block1 mb-4">
                            <h2 className="font-semibold text-lg mb-3">Amount</h2>
                            <div className="main-paper">
                                <h3 className="mb-4">Account : <strong>1234567896</strong></h3>
                                <h3 className="mb-3 md: text-sm">Withdrawal Amount</h3>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 mb-1
                                    hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 bg-transparent dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="Amount"
                                />
                                <span className="text-accent block text-right">Max Amount $430</span>
                            </div>
                        </div>
                        <h2 className="font-semibold text-lg mb-3">Payment Method</h2>
                        <div className="radio-btn main-paper">
                            <div className="item1 flex  items-center gap-x-3.5 py-2 ">
                                <input type="radio" name="payment" />
                                <div className="w-full labels justify-between flex items-center text-white">
                                    <span className="font-semibold card-text text-white"> Card Payment</span>
                                    <div className="images"><img src={imageMap['cards.png']} className="card-image"/></div>
                                </div>
                            </div>
                            <div className="item1 flex  items-center gap-x-3.5 py-2">
                                <input type="radio" name="payment" />
                                <div className="labels flex items-center justify-between w-full text-white">
                                    <span className="font-semibold card-text text-white">Crypto / Paypal</span>
                                    <div className="images flex gap-x-2.5">
                                        <img src={imageMap['paypal.png']} className="card-icon" alt="pay" />
                                        <img     className="card-icon" alt="pay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <h2 className="font-semibold text-lg mb-3">Profit Split</h2>
                        <div className="main-paper">
                            <h4 className="text-3xl font-semibold mb-4">$344</h4>
                            <p>80% Profit Split</p>
                        </div>
                    </div>
                </div>
                <Link to="#/"
                    className="purple_bordered">
                    Withdraw
                </Link>
            </div>
        </>
    )
}
export default WithdrawalStep3