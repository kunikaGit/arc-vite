import { useEffect, useState } from "react";
import tippy from "tippy.js";
import './pricingtable.css'
import TwoPhase from "./twophasechallange";
import InstantFunding from "./instantfunding";


export default function PricingTable() {
    useEffect(() => {
        tippy("[data-tippy-content]");
    }, []);
    const [activeTab, setActiveTab] = useState("trending"); // Default active tab

    return (
        <section className="py-16 pricing-table bg-white dark:bg-jacarta-900" id="pricing">
            <div className="container">
                <div className="mx-auto mb-14 max-w-xl text-center">
                    <h2 data-aos-anchor="#pricing" data-aos-duration={600} data-aos="fade-down" className="mb-0 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        One Step towards Financial Freedom</h2>
                </div>
                <div className="scrollbar-custom overflow-x-auto">
                    <ul
                        className="nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-6 justify-center"
                        role="tablist"
                    >
                        {/* Trending */}
                        <li className="nav-item" role="presentation"  data-aos-duration={600} data-aos="fade-down">
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
                        <li className="nav-item" role="presentation"  data-aos-duration={600} data-aos="fade-down">
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
                    <div className="tab-content" data-aos="zoom-in" data-aos-duration={800}   data-aos-delay="300">
                        {activeTab === "trending" && <TwoPhase />}
                        {activeTab === "sweeps" && <InstantFunding />}
                    </div>
                </div>
            </div>
        </section>
    );
}
