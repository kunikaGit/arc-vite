import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import imageMap from "../../utlis/helper";
import Footer1 from "../../component/footer";
import Header2 from "../../component/home2/header2";
import { TermsContent } from "../../component";
import { Box, Modal, Tooltip } from "@mui/material";



export default function Checkout() {
    const location = useLocation();
    const selected = location.state?.selected;
    const [checkTc, setCheckTc] = useState(false)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (!selected) {
            console.warn("No plan selected. Redirecting back...");
        }
    }, [selected]);

    const [selectedState, setSelectedState] = useState({
        ...selected,
        basePrice: selected?.price || 0,
        price: selected?.price || 0,
        addons: [],
    });

    const handleAddonChange = (e) => {
        const percent = parseFloat(e.target.value);
        const checked = e.target.checked;

        let updatedAddons = [...selectedState.addons];

        if (checked) {
            updatedAddons.push(percent);
        } else {
            updatedAddons = updatedAddons.filter((item) => item !== percent);
        }

        const additional = selectedState.basePrice * updatedAddons.reduce((sum, p) => sum + p, 0);
        const newPrice = selectedState.basePrice + additional;

        setSelectedState((prev) => ({
            ...prev,
            addons: updatedAddons,
            price: newPrice.toFixed(2),
        }));
    };

    const handleCheckTc = () =>{
        setCheckTc(!checkTc)
        setTimeout(() => {
            handleClose()
        }, 500);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        height: '80vh',
        bgcolor: '#FFF',
        boxShadow: 24,
        borderRadius: '20px'
    };
    return (
        <>
            <Header2 />
            <section className="relative py-16 dark:bg-jacarta-800 md:pt-32">
                <div className="container">
                    <h2 className="mb-9 text-center font-display text-3xl text-jacarta-700  dark:text-white">
                        Checkout</h2>
                    <div className="md:flex gap-9">
                        <div className="md:w-[65%]">
                            <div className="mb-5 rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">

                                <h2 className="py-2  mb-5 font-display text-lg font-medium text-jacarta-700 dark:text-white">
                                    Billing Details</h2>
                                <div className="flex gap-x-5 mb-6">
                                    <div className="w-1/2 ">
                                        <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                            First Name<span className="text-red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="profile-username"
                                            className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            placeholder="Enter First Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                            Last Name<span className="text-red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            placeholder="Enter Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-6">
                                    <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                        Phone<span className="text-red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                        placeholder="Enter Last Name"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-6">
                                    <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                        Email<span className="text-red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                        placeholder="Enter Last Name"
                                        required
                                    />
                                </div>
                                <div className="mb-6 w-full">
                                    <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                        Country <span className="text-red">*</span>
                                    </label>
                                    <select id="large"
                                        className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"                            >
                                        <option selected disabled >Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="contact-form-consent-input"
                                        name="agree-to-terms"
                                        className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                    />
                                    <label
                                        htmlFor="contact-form-consent-input"
                                        className="text-sm dark:text-jacarta-200">
                                        Confirmation that the individual is not a U.S. citizen
                                    </label>
                                </div>
                            </div>
                            <div className="rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                <h2 className="py-2  mb-5 font-display text-lg font-medium text-jacarta-700 dark:text-white">
                                    Choose Payment Method</h2>
                                <div className="radio-btn">
                                    <div className="item1 flex  items-center gap-x-3.5 py-5  border-b border-jacarta-200">
                                        <input type="radio" name="payment" />
                                        <div className="w-full labels justify-between flex items-center">
                                            <span className="font-semibold text-jacarta-700 dark:text-white"> Card Payment</span>
                                            <div className="images"><img src={imageMap['cards.png']} /></div>
                                        </div>
                                    </div>
                                    <div className="item1 flex  items-center gap-x-3.5 py-5 border-b border-jacarta-200 mb-5">
                                        <input type="radio" name="payment" />
                                        <div className="labels flex items-center justify-between w-full">
                                            <span className="font-semibold text-jacarta-700">Crypto / Paypal</span>
                                            <div className="images flex gap-x-2.5">
                                                <img src={imageMap['paypal.png']} className="w-[45px]" alt="pay" />
                                                <img src={imageMap['crypto.png']} className="w-[45px]" alt="pay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="md:w-[35%] relative">
                            <div className="sticky top-40 ">
                                <div className=" mb-5 h-fit detail-card col-span-1 rounded-xl border border-jacarta-100 bg-accent p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <div className="flex items-center mb-4">
                                        <div className="w-3/4">
                                            <h2 className="mb-0 font-display text-xl dark:text-jacarta-700 text-white">
                                                Two Phase Funding</h2>
                                            <h2 className=" font-medium text-md dark:text-jacarta-700 text-white">
                                                {selected.size} Accounts</h2>
                                        </div>
                                        <div className="w-3/12">
                                            <h2 className="m-0 font-display text-4xl dark:text-jacarta-700 text-white text-right">
                                                <span className="animate-gradient font-display">${selectedState.price}</span></h2>
                                        </div>
                                    </div>
                                    <div className="info ">
                                        <div className="item flex items-center justify-between dark:text-jacarta-700 text-white mb-2">
                                            <span className="text-base"> Profit Target :</span>
                                            <span className="text-base"> $500</span>
                                        </div>
                                        <div className="item flex items-center justify-between dark:text-jacarta-700 text-white mb-2">
                                            <span className="text-base"> Maximum Daily Loss:</span>
                                            <span className="text-base"> 4%</span>
                                        </div>
                                        <div className="item flex items-center justify-between dark:text-jacarta-700 text-white mb-2">
                                            <span className="text-base">  Maximum Overall Loss:</span>
                                            <span className="text-base"> 10%</span>
                                        </div>
                                        <div className="item flex items-center justify-between dark:text-jacarta-700 text-white mb-2">
                                            <span className="text-base">  Minimum Trading Days:</span>
                                            <span className="text-base"> 5 Days</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mb-5 rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                        Selected Add-on
                                    </label>
                                    <div className="flex flex-col gap-y-2 mt-3">
                                        <label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white mb-2">
                                            <input
                                                type="checkbox"
                                                value="0.3"
                                                className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                onChange={(e) => handleAddonChange(e)}
                                            />
                                            Lifetime payout 95% (Price +30%)
                                        </label>
                                        <label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white mb-2">
                                            <input
                                                type="checkbox"
                                                value="0.1"
                                                className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                onChange={(e) => handleAddonChange(e)}
                                            />
                                            150% Reward (Price +10%)
                                        </label>
                                        <label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white">
                                            <input
                                                type="checkbox"
                                                value="0.4"
                                                className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                onChange={(e) => handleAddonChange(e)}
                                            />
                                            Double Up (Price +40%)
                                        </label>
                                    </div>
                                </div>
                                <div className=" mb-2 rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                        Apply Coupon Code
                                    </label>
                                    <div className="flex gap-x-2.5">
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            placeholder="Code"
                                        />
                                        <button type="button" className="rounded-md bg-accent p-2 px-3 text-white">Apply</button>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <button type="button" onClick={() => handleOpen("md")} className="text-accent font-medium">
                                        Check Terms and conditions Before Checkout</button>
                                </div>
                                <div className="rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                        <span className="text-base">Sub Total</span>
                                        <span className="text-base"> ${selectedState.price}</span>
                                    </div>
                                    <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                        <span className="text-base"> Discount</span>
                                        <span className="text-base"> 0</span>
                                    </div>
                                    <div className="item flex items-center justify-between text-jacarta-700 dark:text-white font-semibold">
                                        <span className="text-base"> Total</span>
                                        <span className="text-base"> ${selectedState.price} </span>
                                    </div>
                                    <Tooltip title={`${!checkTc ? 'Please Check Terms and Condition First':'checkout'}`}>
                                    <button
                                        disabled={!checkTc}
                                        type="button"
                                        className={`mt-5 liquid-button w-full block text-base rounded-full bg-accent py-2 px-5 text-center font-semibold text-white shadow-accent-volume transition-all
                                             hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50`}>
                                        Proceed to Payment
                                    </button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        {/* <button className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Update Profile
                            </button> */}
                    </div>
                </div>
            </section>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-large"
            >
                <Box sx={style}>
                    <div className="relative py-10 px-5 dark:bg-jacarta-800 termconditions overflow-y-auto h-full">
                        <TermsContent />
                        <div className="flex items-center gap-x-2 mt-8 justify-center">
                            <input type="checkbox"
                            checked={checkTc}
                                onChange={handleCheckTc}
                                className="h-6 w-6 m-0 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600" />
                            <label className="flex items-center  m-0 text-md text-accent">I Agree to Terms and Conditions</label>
                        </div>
                    </div>
                </Box>
            </Modal>
            <Footer1 />
        </>
    );
}
