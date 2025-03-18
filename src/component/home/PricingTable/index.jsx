import { useEffect, useState } from "react";
import tippy from "tippy.js";
import './pricingtable.css'

const ArrowTwo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8358ff" height={24} width={24}>
            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z">
            </path></svg>
    )
}
function TwoPhase() {

    const accountSizes = [
        { size: "$8k", price: 39, profitTarget: 500, dailyLossLimit: "4%", drawdown: "10%" },
        { size: "$15k", price: 75, profitTarget: 1000, dailyLossLimit: "4%", drawdown: "10%" },
        { size: "$25k", price: 139, profitTarget: 2500, dailyLossLimit: "4%", drawdown: "10%" },
        { size: "$50k", price: 269, profitTarget: 5000, dailyLossLimit: "4%", drawdown: "10%" },
        { size: "100k", price: 529, profitTarget: 5000, dailyLossLimit: "4%", drawdown: "10%" },

    ];

    const [selected, setSelected] = useState(accountSizes[2]); // Default to $25k

    return (
        <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg pricingtable">
            <div className="flex justify-center space-x-4 mb-6">
                {accountSizes.map((account, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer px-4">
                        <input
                            type="radio"
                            name="accountSize"
                            className="accent-accent"
                            checked={selected.size === account.size}
                            onChange={() => setSelected(account)}
                        />
                        <span
                            className={` py-2  text-md transition-all ${selected.size === account.size
                                ? "bg-blue-500 border-blue-700 text-black "
                                : "bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white"
                                }`}
                        >
                            {account.size}
                        </span>
                    </label>
                ))}
            </div>

            <div className="upper-box">
                <div className="sub-box">
                    <div className="main-heading mb-5">
                        <span className="animate-gradient text-2xl  font-bold"> Two Phase</span>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-xl font-semibold">${selected.price}</h2>
                        <h3 className="font-medium">For {selected.size} Account</h3>
                    </div>
                    <button className="w-full block text-md rounded-full bg-accent py-2   px-3 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                        Get Plan</button>
                </div>
                <div className="fund-info">
                    <h2 className="text-black mb-4 text-xl font-semibold dark:text-white">Two Phase - {selected.size} Account</h2>
                    <ul className="space-y-2">
                        <li><span><ArrowTwo /> Profit Target :</span>
                            <span> ${selected.profitTarget}</span>
                        </li>
                        <li><span><ArrowTwo /> Maximum Daily Loss: </span><span>{selected.dailyLossLimit}</span></li>
                        <li><span><ArrowTwo /> Maximum Overall Loss: </span><span> {selected.drawdown} </span></li>
                        <li><span><ArrowTwo /> Minimum Trading Days:</span> <span>5 Days</span></li>
                    </ul>
                </div>
            </div>


        </div>
    );
}

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8358ff" height={24} width={24}>
            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z">
            </path></svg>
    )
}


function InstantFunding() {
    return (

        <div className="pricingtable">
            <div className="upper-box">
                <div className="sub-box">
                    <div className="main-heading mb-5">
                        <span className="animate-gradient text-2xl  font-bold"> Instant Funding</span>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-xl font-semibold">$149</h2>
                        <h3 className="font-medium">For 5k Account</h3>
                    </div>
                    <button className="w-full block text-base rounded-full bg-accent py-2   px-3 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                        Get Plan</button>
                </div>
                <div className="fund-info">
                    <h2 className="text-black mb-4 text-xl font-semibold dark:text-white">Two Phase - 5k Account</h2>
                    <ul className="space-y-2">
                        <li><span><Arrow /> Profit Target :</span>
                            <span> -</span>
                        </li>
                        <li><span><Arrow /> Maximum Daily Loss: </span><span>2%</span></li>
                        <li><span><Arrow /> Maximum Overall Loss: </span><span> 3% </span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function PricingTable() {
    useEffect(() => {
        tippy("[data-tippy-content]");
    }, []);
    const [activeTab, setActiveTab] = useState("trending"); // Default active tab

    return (
        <section className="py-20 pricing-table">
            <div className="container">
                <div className="mx-auto mb-14 max-w-xl text-center">
                    <h2 className="mb-0 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        One Step towards Financial Freedom</h2>
                </div>
                <div className="scrollbar-custom overflow-x-auto">
                    <ul
                        className="nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-6 justify-center"
                        role="tablist"
                    >
                        {/* Trending */}
                        <li className="nav-item" role="presentation">
                            <button
                                className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold
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
                                onClick={() => setActiveTab("trending")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="mr-1 h-5 w-5 fill-orange"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M13 10h7l-9 13v-9H4l9-13z" />
                                </svg>
                                <span className="font-display  font-medium text-lg">
                                    Two-Phase Challenge
                                </span>
                            </button>
                        </li>

                        {/* Sweeps */}
                        <li className="nav-item" role="presentation">
                            <button
                                className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold
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
                                onClick={() => setActiveTab("sweeps")}

                            >
                                <svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    className="mr-1 h-5 w-5 fill-orange"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M461.8 53.6c-.4-1.7-1.6-3-3.3-3.4-54.4-13.3-180.1 34.1-248.2 102.2-13.3 13.3-24.2 26.4-33.1 39.1-21-1.9-42-.3-59.9 7.5-50.5 22.2-65.2 80.2-69.3 105.1-1 5.9 3.9 11 9.8 10.4l81.1-8.9c.1 7.8.6 14 1.1 18.3.4 4.2 2.3 8.1 5.3 11.1l31.4 31.4c3 3 6.9 4.9 11.1 5.3 4.3.5 10.5 1 18.2 1.1l-8.9 81c-.6 5.9 4.5 10.8 10.4 9.8 24.9-4 83-18.7 105.1-69.2 7.8-17.9 9.4-38.8 7.6-59.7 12.7-8.9 25.9-19.8 39.2-33.1 68.4-68 115.5-190.9 102.4-248zM298.6 213.5c-16.7-16.7-16.7-43.7 0-60.4 16.7-16.7 43.7-16.7 60.4 0 16.7 16.7 16.7 43.7 0 60.4-16.7 16.7-43.7 16.7-60.4 0z"></path><path d="M174.5 380.5c-4.2 4.2-11.7 6.6-19.8 8-18.2 3.1-34.1-12.8-31-31 1.4-8.1 3.7-15.6 7.9-19.7l.1-.1c2.3-2.3.4-6.1-2.8-5.7-9.8 1.2-19.4 5.6-26.9 13.1-18 18-19.7 84.8-19.7 84.8s66.9-1.7 84.9-19.7c7.6-7.6 11.9-17.1 13.1-26.9.3-3.2-3.6-5.1-5.8-2.8z"></path></svg>
                                <span className="font-display font-medium text-lg ">
                                    Instant Funding
                                </span>
                            </button>
                        </li>
                    </ul>
                     <div className="tab-content">
                {activeTab === "trending" && <TwoPhase />}
                {activeTab === "sweeps" && <InstantFunding />}
            </div>
                </div>
            </div>
        </section>
    );
}
