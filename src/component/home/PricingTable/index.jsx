import { useEffect, useState } from "react";
import tippy from "tippy.js";
import './pricingtable.css'
import TwoPhase from "./twophasechallange";
import InstantFunding from "./instantfunding";
import useMessageData from "./message";
import { Box, colors, Modal } from "@mui/material";
import { Cross } from "../../../icons/icons";
import { Calculator, DollarSign, TrendingDown, Calendar, Sparkles } from 'lucide-react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    color: '#fff',
    boxShadow: 24,
    padding: 3,
    borderRadius: '20px',
};
export default function PricingTable() {
    useEffect(() => {
        tippy("[data-tippy-content]");
    }, []);
    const [activeTab, setActiveTab] = useState("trending"); // Default active tab
    const { handleOpenModal, isModalOpen, modalContent, handleClose } = useMessageData()
    const [accountTab, setAccountTab] = useState("standard");


    const [accountBalance, setAccountBalance] = useState(50000);
    const [drawdown, setDrawdown] = useState(10);
    const [minTradingDays, setMinTradingDays] = useState(3);

    const [calculatedResult, setCalculatedResult] = useState('');
    const [showCalculatedResult, setShowCalculatedResult] = useState(false)

    const handleCalculate = async (e) => {
        e.preventDefault()
        try {
            setShowCalculatedResult(true)
            setCalculatedResult("1000K")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSliderChange = (value, field) => {
        setShowCalculatedResult(false)
        switch (field) {
            case 'accountBalance':
                setAccountBalance(value);
                break;
            case 'drawdown':
                setDrawdown(value);
                break;
            case 'minTradingDays':
                setMinTradingDays(value);
                break;
        }
    }

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };
    return (
        <section className="md:py-16 py-5 pricing-table  bg-white dark:bg-jacarta-900" id="pricing">
            <div className="container">
                <div className="mb-4 flex justify-center space-x-4">
                    <button
                        className={`px-4 py-2 rounded-sm font-semibold ${accountTab === "standard"
                            ? "bg-jacarta-700 text-white"
                            : "bg-gray-200 text-jacarta-700"
                            }`}
                        onClick={() => {
                            setAccountTab("standard");
                            setActiveTab("trending"); // reset to default
                        }}
                    >
                        Standard Account
                    </button>
                    <button
                        className={`px-4 py-2 rounded-sm font-semibold ${accountTab === "customized"
                            ? "bg-jacarta-700 text-white"
                            : "bg-gray-200 text-jacarta-700"
                            }`}
                        onClick={() => {
                            setAccountTab("customized");
                            setActiveTab("trending"); // reset to default
                        }}
                    >
                        Customized Account
                    </button>
                </div>

                {accountTab === "standard" && (
                    <div className="scrollbar-custom overflow-x-auto">
                        <ul
                            data-aos-duration={600} data-aos="fade-down"
                            className="bg-[#f5f5fa] p-0 common-nav-header nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-3 justify-center  dark:bg-jacarta-700"
                            role="tablist">
                            {/* Trending */}
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 font-medium
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
                                    <span className="font-medium md:text-medium text-sm">
                                        Two-Phase Challenge
                                    </span>
                                </button>
                            </li>

                            {/* Sweeps */}
                            <li className="nav-item" role="presentation" >
                                <button
                                    className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 font-medium
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
                                    <span className="font-medium md:text-medium text-sm">
                                        Instant Funding
                                    </span>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content mb-2" data-aos="zoom-in" data-aos-duration={800} data-aos-delay="300">
                            {activeTab === "trending" && <TwoPhase handleOpenModal={handleOpenModal} />}
                            {activeTab === "sweeps" && <InstantFunding handleOpenModal={handleOpenModal} />}
                        </div>

                    </div>
                )}

                {accountTab === "customized" && (
                    <div className="scrollbar-custom overflow-x-auto">
                        <ul
                            data-aos-duration={600} data-aos="fade-down"
                            className="bg-[#f5f5fa] p-0 common-nav-header nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-3 justify-center  dark:bg-jacarta-700"
                            role="tablist">
                            {/* Trending */}
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 font-medium
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
                                    <span className="font-medium md:text-medium text-sm">
                                        Two-Phase Challenge
                                    </span>
                                </button>
                            </li>

                            {/* Sweeps */}
                            <li className="nav-item" role="presentation" >
                                <button
                                    className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 font-medium
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
                                    <span className="font-medium md:text-medium text-sm">
                                        Instant Funding
                                    </span>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content mb-2" data-aos="zoom-in" data-aos-duration={800} data-aos-delay="300">
                            {(activeTab === "trending" || activeTab === "sweeps") && (
                                <div className="flex justify-center">
                                    <div className="w-full max-w-4xl">
                                        <div className="calculator-card">
                                            {/* Header with gradient background */}
                                            <div className="calculator-header">
                                                <div className="header-icon">
                                                    <Calculator className="w-8 h-8 text-white" />
                                                    <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1" />
                                                </div>
                                                <h1 className="calculator-title">Trading Calculator</h1>
                                                <p className="calculator-subtitle">Configure your trading parameters with precision</p>
                                            </div>

                                            {/* Sliders Container */}
                                            <div className="sliders-container">
                                                {/* Account Balance Slider */}
                                                <div className="slider-card balance-card">
                                                    <div className="slider-header">
                                                        <div className="icon-container balance-icon">
                                                            <DollarSign className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div className="slider-info">
                                                            <h3 className="slider-title">Account Balance</h3>
                                                            <p className="slider-range">$5,000 - $300,000</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="slider-content">
                                                        <div className="slider-track">
                                                            <input
                                                                type="range"
                                                                min={5000}
                                                                max={300000}
                                                                step={1000}
                                                                value={accountBalance}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'accountBalance')}
                                                                className="range-slider balance-slider"
                                                            />
                                                            <div 
                                                                className="slider-progress balance-progress"
                                                                style={{ width: `${((accountBalance - 5000) / (300000 - 5000)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="value-display">
                                                            <input
                                                                type="number"
                                                                min={5000}
                                                                max={300000}
                                                                step={1000}
                                                                value={accountBalance}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'accountBalance')}
                                                                className="value-input balance-input"
                                                            />
                                                            <span className="value-text balance-value">{formatCurrency(accountBalance)}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Drawdown Slider */}
                                                <div className="slider-card drawdown-card">
                                                    <div className="slider-header">
                                                        <div className="icon-container drawdown-icon">
                                                            <TrendingDown className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div className="slider-info">
                                                            <h3 className="slider-title">Overall Drawdown</h3>
                                                            <p className="slider-range">5% - 15%</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="slider-content">
                                                        <div className="slider-track">
                                                            <input
                                                                type="range"
                                                                min={5}
                                                                max={15}
                                                                value={drawdown}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'drawdown')}
                                                                className="range-slider drawdown-slider"
                                                            />
                                                            <div 
                                                                className="slider-progress drawdown-progress"
                                                                style={{ width: `${((drawdown - 5) / (15 - 5)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="value-display">
                                                            <input
                                                                type="number"
                                                                min={5}
                                                                max={15}
                                                                value={drawdown}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'drawdown')}
                                                                className="value-input drawdown-input"
                                                            />
                                                            <span className="value-text drawdown-value">{drawdown}%</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Trading Days Slider */}
                                                <div className="slider-card days-card">
                                                    <div className="slider-header">
                                                        <div className="icon-container days-icon">
                                                            <Calendar className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div className="slider-info">
                                                            <h3 className="slider-title">Minimum Trading Days</h3>
                                                            <p className="slider-range">2 - 5 days</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="slider-content">
                                                        <div className="slider-track">
                                                            <input
                                                                type="range"
                                                                min={2}
                                                                max={5}
                                                                value={minTradingDays}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'minTradingDays')}
                                                                className="range-slider days-slider"
                                                            />
                                                            <div 
                                                                className="slider-progress days-progress"
                                                                style={{ width: `${((minTradingDays - 2) / (5 - 2)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="value-display">
                                                            <input
                                                                type="number"
                                                                min={2}
                                                                max={5}
                                                                value={minTradingDays}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'minTradingDays')}
                                                                className="value-input days-input"
                                                            />
                                                            <span className="value-text days-value">{minTradingDays} {minTradingDays === 1 ? 'day' : 'days'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Calculate Button */}
                                            <div className="calculate-section">
                                                <button
                                                    onClick={handleCalculate}
                                                    className="calculate-button"
                                                >
                                                    <Calculator className="w-5 h-5" />
                                                    <span>Calculate Results</span>
                                                    <Sparkles className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {showCalculatedResult &&
                            <div className="sub-box">


                                <div className="mb-5">
                                    <h2 className="text-5xl text-center font-semibold text-jacarta-700 dark:text-white">{calculatedResult} Account</h2>
                                </div>
                                <button

                                    className="block mx-auto text-md rounded-full bg-accent py-2 w-[200px] text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Start Now
                                </button>
                            </div>}
                    </div>

                )}

            </div>
            <Modal
                size="lg"
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="large-modal"
            >
                <Box sx={style} className="modal-large bg-accent">
                    <button type="button" className="bg-transparent border-0 absolute right-3 top-1.5" onClick={() => handleClose()}>
                        <Cross />
                    </button>
                    <div className="modal-data">
                        {modalContent}
                    </div>
                </Box>
            </Modal>
        </section>
    );
}
