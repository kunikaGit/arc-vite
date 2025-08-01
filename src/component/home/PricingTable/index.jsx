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

    const [accountBalanceScale, setAccountBalanceScale] = useState(1000)
    // Slider configurations
    const sliderConfig = {
        accountBalance: {
            min: 5000,
            max: 300000,
            step: accountBalanceScale,
            //scale: [5000, 10000, 25000, 50000, 75000, 100000, 150000, 200000, 250000, 300000]
scale: [
  5000, 6000, 7000, 8000, 9000, 10000, // step 1000
  15000, 20000, 25000, 30000, 35000, // step 5000
  40000, 50000, 60000, 70000, 80000, 90000, // step 10000
  100000, 150000, 200000, 250000, 300000 // step 50000
]

        },
        drawdown: {
            min: 5,
            max: 15,
            step: 1,
            scale: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        },
        minTradingDays: {
            min: 2,
            max: 5,
            step: 1,
            scale: [2, 3, 4, 5]
        }
    };

    const [accountBalanceIndex, setAccountBalanceIndex] = useState(0); // Index of scale
//const accountBalance = sliderConfig.accountBalance.scale[accountBalanceIndex];
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
  // Ensure the scale is available (replace with your actual scale array)
  const scale = sliderConfig.accountBalance.scale; // Or however you store it
  const currentIndex = scale.indexOf(accountBalance);

  let newIndex = currentIndex;

  if (field === 'accountBalance') {
    if (value > accountBalance) {
      // Go to next index if available
      newIndex = Math.min(currentIndex + 1, scale.length - 1);
    } else if (value < accountBalance) {
      // Go to previous index if available
      newIndex = Math.max(currentIndex - 1, 0);
    }

    const newValue = scale[newIndex];
   // console.log({ newIndex, newValue });
    setAccountBalance(newValue);
  }
        setShowCalculatedResult(false)
        switch (field) {
            case 'accountBalance':
                
                // setAccountBalance(value);
                break;
            case 'drawdown':
                setDrawdown(value);
                break;
            case 'minTradingDays':
                setMinTradingDays(value);
                break;
        }
    }

    const getStepForBalance = (value) => {
        if (value < 10000) return 1000;
        if (value < 40000) return 5000;
        if (value < 100000) return 10000;
        return 50000;
    };

    // const handleSliderRelease = (value) => {
    //     const step = getStepForBalance(value);
    //     const snapped = Math.round(value / step) * step;

    //     // Make sure the snapped value is within range
    //     const clamped = Math.min(Math.max(snapped, sliderConfig.accountBalance.min), sliderConfig.accountBalance.max);

    //     setAccountBalance(clamped);
    //     setAccountBalanceScale(step);
    //     setShowCalculatedResult(false);
    // };

    const handleSliderRelease = (index) => {
  const snappedIndex = Math.min(Math.max(index, 0), sliderConfig.accountBalance.scale.length - 1);
  console.log({snappedIndex});
  setAccountBalanceIndex(snappedIndex);
  setShowCalculatedResult(false);
};

    const generateScale = (min, max, step) => {
        const scale = [];
        for (let i = min; i <= max; i += step) {
            scale.push(i);
        }
        return scale;
    };

    const currentStep = getStepForBalance(accountBalance);
    const currentScale = generateScale(sliderConfig.accountBalance.min, sliderConfig.accountBalance.max, currentStep);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };
    return (
        <section className="pricing-table " id="pricing">
            <div className="container">
                <div className="mb-4 flex justify-center space-x-4 main-tab-btns">
                    <button
                        className={`px-4 py-2 border-btn rounded-sm font-semibold ${accountTab === "standard"
                            ? "bg-blue text-white"
                            : "bg-gray-200 text-white"
                            }`}
                        onClick={() => {
                            setAccountTab("standard");
                            setActiveTab("trending"); // reset to default
                        }}
                    >
                        Standard Account
                    </button>
                    <button
                        className={`px-4 py-2 rounded-sm border-btn font-semibold ${accountTab === "customized"
                            ? " bg-blue text-white"
                            : "bg-gray-200 text-white"
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
                    <div className="child-tabs overflow-x-auto">
                        <ul
                            data-aos-duration={600} data-aos="fade-down"
                            className="nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-3 justify-center  dark:bg-jacarta-700"
                            role="tablist">
                            {/* Trending */}
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 
                                    ${activeTab === "trending"
                                            ? "active text-jacarta-700"
                                            : "text-white"
                                        }`}
                                    id="trending-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#trending"
                                    type="button"
                                    role="tab"
                                    aria-controls="trending"
                                    aria-selected="true"
                                    onClick={() => setActiveTab("trending")}>
                                    <span >Two-Phase Challenge</span>
                                </button>
                            </li>

                            {/* Sweeps */}
                            <li className="nav-item" role="presentation" >
                                <button
                                    className={`tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 font-medium
                                    ${activeTab === "sweeps"
                                            ? "active text-white"
                                            : "text-jacarta-400 "
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
                                    <span >
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
                    <div className="child-tabs overflow-x-auto">
                        <ul
                            data-aos-duration={600} data-aos="fade-down"
                            className=" p-0 common-nav-header nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-3 justify-center  dark:bg-jacarta-700"
                            role="tablist">
                            {/* Trending */}
                            <li className="nav-item" role="presentation">
                                <button
                                    className={` active tab-button rounded-sm nav-link relative flex items-center whitespace-nowrap py-2 md:px-3 px-2 font-medium
                                    ${activeTab === "trending"
                                            ? "active  dark:text-white"
                                            : "text-jacarta-400"
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


                        </ul>
                        <div className="tab-content mb-2" data-aos="zoom-in" data-aos-duration={800} data-aos-delay="300">
                            {(activeTab === "trending") && (
                                <div className="flex justify-center">
                                    <div className="w-full max-w-4xl">
                                        <div className="calculator-card">
                                            {/* Sliders Container */}
                                            <div className="sliders-container">
                                                {/* Account Balance Slider */}
                                                <div className="slider-card main-paper balance-card">
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
                                                                min={sliderConfig.accountBalance.min}
                                                                max={sliderConfig.accountBalance.max}
                                                                // step={sliderConfig.accountBalance.step}
                                                                //step={1}

                                                                value={accountBalance}
                                                                 onChange={(e) => handleSliderChange(Number(e.target.value), 'accountBalance')}
                                                                // onChange={(e) => setAccountBalance(Number(e.target.value))} // Just set the raw value
                                                                // onMouseUp={() => handleSliderRelease(accountBalance)} // Snap on release

                                                                //onChange={(e) => setAccountBalanceIndex(Number(e.target.value))}
                                                                // onMouseUp={() => handleSliderRelease(accountBalanceIndex)}
                                                                // value={accountBalanceIndex}

                                                                className="range-slider balance-slider"
                                                            />
                                                            <div
                                                                className="slider-progress balance-progress"
                                                                style={{ width: `${((accountBalance - sliderConfig.accountBalance.min) / (sliderConfig.accountBalance.max - sliderConfig.accountBalance.min)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="slider-scale">
                                                            {/* {sliderConfig.accountBalance.scale.map((value, index) => (
                                                                <div key={index} className="scale-mark">
                                                                    <span className="scale-label">{formatCurrency(value)}</span>
                                                                </div>
                                                            ))} */}
                                                            {currentScale.map((value, index) => (
                                                                <div key={index} className="scale-mark">
                                                                    <span className="scale-label">{formatCurrency(value)}</span>
                                                                </div>
                                                            ))}

                                                        </div>
                                                        <div className="value-display">
                                                            <span className="value-text balance-value">{formatCurrency(accountBalance)}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Drawdown Slider */}
                                                <div className="slider-card main-paper drawdown-card">
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
                                                                min={sliderConfig.drawdown.min}
                                                                max={sliderConfig.drawdown.max}
                                                                step={sliderConfig.drawdown.step}
                                                                value={drawdown}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'drawdown')}
                                                                className="range-slider drawdown-slider"
                                                            />
                                                            <div
                                                                className="slider-progress drawdown-progress"
                                                                style={{ width: `${((drawdown - sliderConfig.drawdown.min) / (sliderConfig.drawdown.max - sliderConfig.drawdown.min)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="slider-scale">
                                                            {sliderConfig.drawdown.scale.map((value, index) => (
                                                                <div key={index} className="scale-mark">
                                                                    <span className="scale-label">{value}%</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="value-display">
                                                            <span className="value-text drawdown-value">{drawdown}%</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Trading Days Slider */}
                                                <div className="slider-card main-paper days-card">
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
                                                                min={sliderConfig.minTradingDays.min}
                                                                max={sliderConfig.minTradingDays.max}
                                                                step={sliderConfig.minTradingDays.step}
                                                                value={minTradingDays}
                                                                onChange={(e) => handleSliderChange(Number(e.target.value), 'minTradingDays')}
                                                                className="range-slider days-slider"
                                                            />
                                                            <div
                                                                className="slider-progress days-progress"
                                                                style={{ width: `${((minTradingDays - sliderConfig.minTradingDays.min) / (sliderConfig.minTradingDays.max - sliderConfig.minTradingDays.min)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="slider-scale">
                                                            {sliderConfig.minTradingDays.scale.map((value, index) => (
                                                                <div key={index} className="scale-mark">
                                                                    <span className="scale-label">{value} {value === 1 ? 'day' : 'days'}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="value-display">
                                                            <span className="value-text days-value">{minTradingDays} {minTradingDays === 1 ? 'day' : 'days'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Calculate Button */}
                                            <div className="calculate-section main-paper">
                                                <button
                                                    onClick={handleCalculate}
                                                    className="calculate-button"
                                                >
                                                    <span>Calculate Results </span>
                                                    <Sparkles className="w-4 h-4" />
                                                </button>

                                                <button className="fnx-purple-btn">
                                                    <span className="btn-label"> Start Challenge</span>
                                                    <span className="btn-shine"></span>
                                                </button>
                                                {showCalculatedResult &&
                                                    <h4 className="text-3xl text-center font-semibold text-jacarta-700 dark:text-white">{calculatedResult} Account  </h4>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
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
