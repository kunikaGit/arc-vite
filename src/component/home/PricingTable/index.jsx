import { useEffect, useState } from "react";
import tippy from "tippy.js";
import './pricingtable.css'
import TwoPhase from "./twophasechallange";
import InstantFunding from "./instantfunding";
import useMessageData from "./message";
import { Box, colors, Modal } from "@mui/material";
import { Cross } from "../../../icons/icons";


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
    return (
        <section className="md:py-16 py-5 pricing-table  bg-white dark:bg-jacarta-900" id="pricing">
            <div className="container">
                {/* <div className="mx-auto mb-8 text-center">
                    <h2 data-aos-anchor="#pricing" data-aos-duration={600} data-aos="fade-down" className="mb-0 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        March the ARC towards financial
                        independence</h2>
                </div> */}
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
                        {activeTab === "sweeps" && <InstantFunding  handleOpenModal={handleOpenModal} />}
                    </div>
                    
                </div>

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
                <button type="button" className="bg-transparent border-0 absolute right-3 top-1.5" onClick={()=>handleClose()}>
                    <Cross/>
                </button>
                    <div className="modal-data">
                        {modalContent}
                    </div>
                </Box>
            </Modal>
        </section>
    );
}
