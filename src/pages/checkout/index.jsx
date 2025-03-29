import React from "react";
import { Link } from "react-router-dom";
import imageMap from "../../utlis/helper";
import Footer1 from "../../component/footer";
import Header2 from "../../component/home2/header2";



export default function Checkout() {

    return (
        <>
            <Header2/>
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
                        </div>
                        <div className="md:w-[35%] relative">
                            <div className="sticky top-40 ">
                                <div className=" mb-5 h-fit detail-card col-span-1 rounded-xl border border-jacarta-100 bg-accent p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <div className="flex items-center mb-4">
                                        <div className="w-3/4">
                                            <h2 className="mb-0 font-display text-xl dark:text-jacarta-700 text-white">
                                                Two Phase Funding</h2>
                                            <h2 className=" font-medium text-md dark:text-jacarta-700 text-white">
                                                8k Accounts</h2>
                                        </div>
                                        <div className="w-3/12">
                                            <h2 className="m-0 font-display text-4xl dark:text-jacarta-700 text-white">
                                                <span className="animate-gradient font-display">   $39</span></h2>
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
                                <div className="rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                        <span className="text-base">Sub Total</span>
                                        <span className="text-base"> $39</span>
                                    </div>
                                    <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                        <span className="text-base"> Discount</span>
                                        <span className="text-base"> 0</span>
                                    </div>
                                    <div className="item flex items-center justify-between text-jacarta-700 dark:text-white font-semibold">
                                        <span className="text-base"> Total</span>
                                        <span className="text-base"> $39</span>
                                    </div>
                                    <Link
                                        cla
                                        to="#"
                                        className=" mt-5 liquid-button w-full block text-base rounded-full bg-accent py-2 px-5 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Proceed to Payment
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <button className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Update Profile
                            </button> */}


                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    );
}
