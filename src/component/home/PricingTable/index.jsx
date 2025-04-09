import { useEffect, useState } from "react";
import tippy from "tippy.js";
import './pricingtable.css'
import TwoPhase from "./twophasechallange";
import InstantFunding from "./instantfunding";
import { Link } from "react-router-dom";

const accountSizes = [
    { size: "$8k", price: 39, profitTarget: 500, dailyLossLimit: "4%", drawdown: "10%" },
    { size: "$15k", price: 75, profitTarget: 1000, dailyLossLimit: "4%", drawdown: "10%" },
    { size: "$25k", price: 139, profitTarget: 2500, dailyLossLimit: "4%", drawdown: "10%" },
    { size: "$50k", price: 269, profitTarget: 5000, dailyLossLimit: "4%", drawdown: "10%" },
    { size: "100k", price: 529, profitTarget: 5000, dailyLossLimit: "4%", drawdown: "10%" },

];
export default function PricingTable() {
    useEffect(() => {
        tippy("[data-tippy-content]");
    }, []);
    const [activeTab, setActiveTab] = useState("trending"); // Default active tab
    const [selected, setSelected] = useState(accountSizes[2]); // Default to $25k

    return (
        <section className="py-16 pricing-table  bg-white dark:bg-black" id="pricing">
            <div className="container">
                <div className="mx-auto mb-8 text-center">
                    <h2 data-aos-anchor="#pricing" data-aos-duration={600} data-aos="fade-down" className="mb-0 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        March the ARC towards financial
                        independence</h2>
                </div>
                <div className="scrollbar-custom overflow-x-auto">
                    <ul
                        data-aos-duration={600} data-aos="fade-down"
                        className="bg-[#f5f5fa] common-nav-header nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-3 justify-center  dark:bg-jacarta-700"
                        role="tablist">
                        {/* Trending */}
                        <li className="nav-item" role="presentation">
                            <button
                                className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 px-3 font-medium
                                    ${activeTab === "trending"
                                        ? "active text-jacarta-700 dark:text-white"
                                        : "text-jacarta-400 dark:text-jacarta-200 hover:text-jacarta-700 dark:hover:text-white"
                                    }`}
                                id="trending-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#trending"
                                type="button"
                                role="tab"
                                aria-controls="trending"
                                aria-selected="true"
                                onClick={() => setActiveTab("trending")}>
                                <span className="font-medium xl:text-medium text-medium">
                                    Two-Phase Challenge
                                </span>
                            </button>
                        </li>

                        {/* Sweeps */}
                        <li className="nav-item" role="presentation" >
                            <button
                                className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 px-3 font-medium
                                    ${activeTab === "sweeps"
                                        ? "active text-jacarta-700 dark:text-white"
                                        : "text-jacarta-400 dark:text-jacarta-200 hover:text-jacarta-700 dark:hover:text-white"
                                    }`}
                                id="sweeps-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#sweeps"
                                type="button"
                                role="tab"
                                aria-controls="sweeps"
                                aria-selected="false"
                                tabIndex="-1"
                                onClick={() => setActiveTab("sweeps")}>
                                <span className="font-medium text-medium ">
                                    Instant Funding
                                </span>
                            </button>
                        </li>
                    </ul>
                    <div className="flex justify-center space-x-4 mb-6 common-nav-header dark:bg-jacarta-700  bg-[#f5f5fa]">
                        {accountSizes.map((account, index) => (
                            <div onClick={() => setSelected(account)} key={index}>
                                <label className="flex items-center space-x-2 cursor-pointer  text-black dark:text-white ">
                                   
                                    <span
                                        className={`text-jacarta-700 dark:text-white rounded-md py-2 px-4  text-md transition-all ${selected.size === account.size
                                            ? "text-accent bg-accent text-white"
                                            : "  border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white"
                                            }`}
                                    >
                                        {account.size}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="tab-content mb-2" data-aos="zoom-in" data-aos-duration={800} data-aos-delay="300">
                        {activeTab === "trending" && <TwoPhase selected={selected} />}
                        {activeTab === "sweeps" && <InstantFunding selected={selected} />}
                    </div>
                   
                    <div className="sub-box">
                        <div className="mb-5">
                            <h2 className="text-5xl text-center font-semibold text-jacarta-700 dark:text-white">${selected.price} For {selected.size} Account</h2>
                        </div>
                        <Link to='/checkout' state={{ selected }} className="block mx-auto text-md rounded-full bg-accent py-2 w-[200px] text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                            Get Plan</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
