import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import imageMap from "../../utlis/helper";
import Footer1 from "../../component/footer";
import Header2 from "../../component/home2/header2";
import { TermsContent } from "../../component";
import { Box, Modal, Tooltip } from "@mui/material";
import { DollerIcon, DoubleUp, TrophyIcon } from "../../icons/icons";
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from "../../constants/endPoints";
import useApiRequest from "../../hook/useApiRequest";
import { successMsg, errorMsg } from "../../utlis/customFn";
import { loadStripe } from '@stripe/stripe-js';
import Web3 from 'web3';
import OverlayLoading from "../../component/common/overlayLoader";

export default function Checkout() {
    const stripePromise = loadStripe('pk_test_51RKiCLPDRB8z2YTff6ztYYkt8JDbjfTanRjQVE0zG1WYhykLobRbhmYV7AUdveZmbo82NP35gDEIRIWcAzqJHsFP00BmwF6W0O'); // Use your public key

    const location = useLocation();
    const selected = location.state?.selected;
    const [checkTc, setCheckTc] = useState(false)
    const { fetchData } = useApiRequest();
    const [loading, seLoading] = useState(false)
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
        addOnIds: [],
        addOnAmounts: [],
        addOnAmount: 0,
        discountAmount: 0,
        couponCodeAppied: false,
        fees: 0
    });
    const handleAddonChange = (e, id) => {
        try {
            const percent = parseFloat(e.target.value);
            const checked = e.target.checked;

            let updatedAddons = [...selectedState.addons];
            let updatedAddonsIds = [...selectedState.addOnIds];
            let updateAddOnAmounts = [...selectedState.addOnAmounts];
            let updateAddOnAmount = selectedState.addOnAmount
            if (checked) {
                updatedAddons.push(percent);
                updatedAddonsIds.push(id);
            } else {
                updatedAddons = updatedAddons.filter((item) => item !== percent);
                updatedAddonsIds = updatedAddonsIds.filter((item) => item !== id);
            }


            const additional = selectedState.basePrice * updatedAddons.reduce((sum, p) => sum + p, 0);
            let newPrice = (parseFloat(selectedState.basePrice) + parseFloat(additional / 100)) - selectedState?.discountAmount;
            newPrice = selectedState?.fees > 0 ? newPrice + parseFloat((newPrice * parseInt(selectedState?.fees) / 100)) : newPrice
            let newAddon = (selectedState.basePrice * percent) / 100
            if (checked) {
                updateAddOnAmounts.push(parseFloat(additional / 100));
                updateAddOnAmount = updateAddOnAmount + newAddon
            } else {
                updateAddOnAmounts = updateAddOnAmounts.filter((item) => item !== parseFloat(additional / 100));
                updateAddOnAmount = updateAddOnAmount - newAddon
            }

            setSelectedState((prev) => ({
                ...prev,
                addons: updatedAddons,
                addOnIds: updatedAddonsIds,
                addonAmounts: updateAddOnAmounts,
                addOnAmount: updateAddOnAmount,
                price: newPrice.toFixed(2),
            }));
        } catch (error) {
            console.log(error)
        }
    };

    const handleCheckTc = () => {
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
    const navigate = useNavigate();



    const [countries, setCountries] = useState([])
    const [paymentMethods, setPaymentMethods] = useState([])
    const [addOns, setAddOns] = useState([])
    const [couponCode, setCouponCode] = useState('')
    const [currencies, setCurrencies] = useState([])
    const fetchApis = async () => {
        seLoading(true)
        try {

            const instantFundingRes = await fetchData(API_ENDPOINTS.countries, navigate(), "GET");
            if (instantFundingRes?.data) setCountries(instantFundingRes.data);

            const payemtnMethodRes = await fetchData(API_ENDPOINTS.paymentMethods, navigate(), "GET");
            if (payemtnMethodRes?.data) setPaymentMethods(payemtnMethodRes.data);

            const addOnsRes = await fetchData(API_ENDPOINTS.addOns, navigate(), "GET");
            if (addOnsRes?.data) setAddOns(addOnsRes.data);
            seLoading(false)

            const currenciesRes = await fetchData(API_ENDPOINTS.currencies, navigate(), "GET");
            if (currenciesRes?.data) setCurrencies(currenciesRes.data);
            seLoading(false)

        } catch (error) {
            seLoading(false)

            console.error("Dropdown fetch error", error);
        }
    }
    useEffect(() => {
        fetchApis()
    }, [])

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        contact_number: '',
        email: '',
        country_id: '',
        confirmNonUS: false,
        paymentMethodId: '',
        plan_type: selectedState.table_name,
        id: selectedState.id,
        price: selectedState.price,
        addOnIds: selectedState.addOnIds,
        couponCode,
        crypto_currency_id: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name == "paymentMethodId") {
            setSelectedState(prev => ({
                ...prev,
                fees: paymentMethods[value - 1].fees,
                price: paymentMethods[value - 1].fees > 0 ? ((parseFloat(selectedState?.basePrice) + parseFloat((selectedState?.basePrice * parseInt(paymentMethods[value - 1].fees)) / 100)) + selectedState?.addOnAmount) - selectedState?.discountAmount : (selectedState?.basePrice + selectedState?.addOnAmount) - selectedState?.discountAmount
            }));
            setSelectedCurrency(null)
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.first_name.trim()) newErrors.first_name = 'First name is required.';
        if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required.';

        if (!formData.contact_number.trim()) {
            newErrors.contact_number = 'Contact number is required.';
        } else if (!/^[0-9]{10,15}$/.test(formData.contact_number)) {
            newErrors.contact_number = 'Enter a valid contact number.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }

        if (!formData.country_id) newErrors.country_id = 'Country is required.';
        if (!formData.paymentMethodId) newErrors.paymentMethodId = 'Select a payment method.';
        if (!formData.confirmNonUS) newErrors.confirmNonUS = 'You must confirm not being a U.S. citizen.';
        if (formData.paymentMethodId == 2 && !formData.crypto_currency_id) newErrors.crypto_currency_id = 'Please choose a crypto currency in which you want to pay.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const proceedPayment = async (e) => {
        e.preventDefault();


        const updatedData = {
            ...formData,
            price: selectedState.price,
            addOnIds: selectedState.addOnIds,
            couponCode
        };

        if (validateForm()) {
            console.log(updatedData)
        }

        if (validateForm()) {
            seLoading(true)
            try {
                const checkoutRes = await fetchData(API_ENDPOINTS.checkout, navigate, "POST", updatedData);
                // Save session_id
                if (checkoutRes?.data) {
                    localStorage.setItem("session_id", checkoutRes.data);
                }

                if (updatedData.paymentMethodId == 3) {
                    // Stripe Flow
                    const stripe = await stripePromise;
                    await stripe.redirectToCheckout({ sessionId: checkoutRes.data });

                } else if (updatedData.paymentMethodId == 2) {
                    window.location.href = checkoutRes.data; // redirects in same tab
                }

                seLoading(false)

            } catch (error) {
                console.error("Payment Error:", error);
                seLoading(false)

            }
        }
    };

    const handleCouponCode = async (e) => {
        e.preventDefault()
        try {
            if (couponCode.length <= 0) {
                errorMsg("Please write your coupon code.")
                return
            }

            const couponCodeRes = await fetchData(API_ENDPOINTS.couponCode, navigate, "POST", { code: couponCode });
            if (couponCodeRes.success) {
                successMsg(couponCodeRes.message)
                let newPrice = parseFloat(selectedState?.basePrice) + parseFloat(selectedState?.addOnAmount);
                let discountedAmount = (newPrice * couponCodeRes.data) / 100
                newPrice = newPrice - parseFloat(discountedAmount)
                newPrice = selectedState?.fees > 0 ? newPrice + parseFloat((newPrice * parseInt(selectedState?.fees)) / 100) : newPrice
                setSelectedState((prev) => ({ ...prev, couponCodeAppied: true, discountAmount: discountedAmount, price: newPrice }))
            } else {
                errorMsg(couponCodeRes.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (currency) => {
        setSelectedCurrency(currency);
        setFormData(prev => ({
            ...prev,
            crypto_currency_id: currency.org_id
        }));
        setIsOpen(false);
    };

    return (
        <>
            <Header2 />
            <OverlayLoading isLoading={loading}>
                <section className="relative py-16 md:pt-32">
                    <div className="container">
                        <h2 className="mb-9 text-center font-display text-3xl text-white">
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
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                            />
                                            {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}

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
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                            />
                                            {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}

                                        </div>
                                    </div>
                                    <div className="w-full mb-6">
                                        <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                            Contact Number<span className="text-red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            placeholder="Enter Contact Number"
                                            required
                                            name="contact_number"
                                            value={formData.contact_number}
                                            onChange={handleChange}
                                        />
                                        {errors.contact_number && <p className="text-red-500 text-sm mt-1">{errors.contact_number}</p>}

                                    </div>
                                    <div className="w-full mb-6">
                                        <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                            Email<span className="text-red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            placeholder="Enter Email"
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                                    </div>
                                    <div className="mb-6 w-full">
                                        <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                            Country <span className="text-red">*</span>
                                        </label>
                                        <select id="large"
                                            className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            name="country_id"
                                            value={formData.country}
                                            onChange={handleChange}                     >
                                            <option selected disabled >Choose a country</option>
                                            {countries.map((c) => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                        {errors.country_id && <p className="text-red-500 text-sm mt-1">{errors.country_id}</p>}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="confirmNonUS"
                                            name="confirmNonUS"
                                            checked={formData.confirmNonUS}
                                            onChange={handleChange}
                                            className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                        />
                                        <label
                                            htmlFor="contact-form-consent-input"
                                            className="text-sm dark:text-jacarta-200">
                                            Confirmation that the individual is not a U.S. citizen
                                        </label>
                                        {errors.confirmNonUS && <p className="text-red-500 text-sm mt-1">{errors.confirmNonUS}</p>}

                                    </div>
                                </div>
                                <div className="rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                    <h2 className="py-2  mb-5 font-display text-lg font-medium text-jacarta-700 dark:text-white">
                                        Choose Payment Method</h2>
                                    <div className="radio-btn">

                                        <div key={paymentMethods[0]?.id} className="item1 flex  items-center gap-x-3.5 py-5  border-b border-jacarta-200">
                                            <input
                                                name="paymentMethodId"
                                                value={paymentMethods[0]?.id}
                                                checked={formData.paymentMethodId == paymentMethods[0]?.id}
                                                onChange={handleChange}
                                                type="radio" />
                                            <div className="w-full labels justify-between flex items-center">
                                                <span className="font-semibold text-jacarta-700 dark:text-white"> {paymentMethods[0]?.name}</span>
                                                <div className="images"><img src={imageMap[paymentMethods[0]?.icon]} /></div>
                                            </div>
                                        </div>
                                        <div className="item1 flex  items-center gap-x-3.5 py-5 border-b border-jacarta-200">
                                            <input type="radio" name="paymentMethodId"
                                                value={paymentMethods[1]?.id}
                                                checked={formData.paymentMethodId == paymentMethods[1]?.id}
                                                onChange={handleChange} />
                                            <div className="labels flex items-center justify-between w-full">
                                                <span className="font-semibold text-jacarta-700 dark:text-white">{paymentMethods[1]?.name}</span>
                                                <div className="images flex gap-x-2.5">
                                                    <img src={imageMap[paymentMethods[1]?.icon]} className="w-[45px]" alt="pay" />
                                                    <img src={imageMap[paymentMethods[1]?.image]} className="w-[45px]" alt="pay" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item1 flex  items-center gap-x-3.5 py-5 border-b border-jacarta-200 mb-5">
                                            <input type="radio" name="paymentMethodId"
                                                value={paymentMethods[2]?.id}
                                                checked={formData.paymentMethodId == paymentMethods[2]?.id}
                                                onChange={handleChange} />
                                            <div className="labels flex items-center justify-between w-full">
                                                <span className="font-semibold text-jacarta-700 dark:text-white">{paymentMethods[2]?.name}</span>
                                                <div className="images flex gap-x-2.5">
                                                    <img src={imageMap[paymentMethods[2]?.icon]} className="w-[45px]" alt="pay" />
                                                </div>
                                            </div>
                                        </div>
                                        {errors.paymentMethodId && <p className="text-red-500 text-sm mt-1">{errors.paymentMethodId}</p>}
                                    </div>


                                </div>
                            </div>
                            <div className="md:w-[35%] relative">
                                <div className="sticky top-40 ">
                                    <div className=" mb-5 h-fit detail-card col-span-1 rounded-xl bg-accent p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                        <div className="flex items-center mb-4">
                                            <div className="w-3/4">
                                                <h2 className="mb-0 font-display text-xl dark:text-jacarta-700 text-white">
                                                    Two Phase Funding</h2>
                                                <h2 className=" font-medium text-md dark:text-jacarta-700 text-white">
                                                    {selected?.account_size} Accounts</h2>
                                            </div>
                                            <div className="w-3/12">
                                                <h2 className="m-0 font-display text-4xl dark:text-jacarta-700 text-white text-right">
                                                    <span className="animate-gradient font-display">${parseFloat(selectedState?.price).toFixed(0)}</span></h2>
                                            </div>
                                        </div>
                                        <div className="info ">
                                            <div className="item flex items-center justify-between dark:text-jacarta-700 text-white mb-2">
                                                <span className="text-base"> Profit Target :</span>
                                                <span className="text-base"> {selectedState?.profit_target}</span>
                                            </div>
                                            <div className="item flex items-center justify-between dark:text-jacarta-700 text-white mb-2">
                                                <span className="text-base"> Maximum Daily Loss:</span>
                                                <span className="text-base"> {selectedState?.daily_loss_limit}</span>
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
                                        <label htmlFor="profile-username" className="mb-1 text-base block font-display text-base text-jacarta-700 dark:text-white">
                                            Selected Add-on
                                        </label>
                                        <div className="flex flex-col gap-y-2 mt-3">

                                            {addOns.length > 0 && addOns.map((item, index) => (<label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white mb-2">
                                                <input
                                                    type="checkbox"
                                                    value={item.percentage}
                                                    className="mr-4 h-5 w-5 self-start rounded border-jacarta-200 text-white checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                    onChange={(e) => handleAddonChange(e, item.id)}
                                                />
                                                {index == 0 ? <DollerIcon /> : index == 1 ? <TrophyIcon /> : <DoubleUp />} {item.name}
                                            </label>))}
                                            {/* <label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white mb-2">
                                                    <input
                                                        type="checkbox"
                                                        value="0.3"
                                                        className="mr-4 h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                        onChange={(e) => handleAddonChange(e)}
                                                    />
                                                    <DollerIcon /> Lifetime payout 95% (Price +30%)
                                                </label>
                                                <label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white mb-2">
                                                    <input
                                                        type="checkbox"
                                                        value="0.1"
                                                        className="mr-4 h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                        onChange={(e) => handleAddonChange(e)}
                                                    />
                                                    <TrophyIcon /> 150% Reward (Price +10%)
                                                </label>
                                                <label className="flex items-center gap-x-2 text-jacarta-700 dark:text-white">
                                                    <input
                                                        type="checkbox"
                                                        value="0.4"
                                                        className="mr-4 h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                                        onChange={(e) => handleAddonChange(e)}
                                                    />
                                                    <DoubleUp /> Double Up (Price +40%)
                                                </label> */}
                                        </div>
                                    </div>
                                    <div className=" mb-2 rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                        <label htmlFor="profile-username" className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                            Apply Coupon Code
                                        </label>
                                        {selectedState?.couponCodeAppied ? <div className="flex gap-x-2.5">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                                placeholder="Code"
                                                value={couponCode}
                                            />
                                            <button disabled type="button" className="rounded-md bg-accent p-2 px-3 text-white">Apply</button>
                                        </div> : <div className="flex gap-x-2.5">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border-jacarta-100 py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                                placeholder="Code"
                                                onChange={e => { setCouponCode(e.target.value) }}
                                            />
                                            <button onClick={e => { handleCouponCode(e) }} type="button" className="rounded-md bg-accent p-2 px-3 text-white">Apply</button>
                                        </div>}
                                    </div>
                                    <div className="mb-5">
                                        <button type="button" onClick={() => handleOpen("md")} className="text-white font-medium">
                                            Check Terms and conditions Before Checkout</button>
                                    </div>

                                    {formData?.paymentMethodId == 2 &&
                                        <div className="mb-2 rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <label className="mb-1 block font-display text-base text-jacarta-700 dark:text-white">
                                                Select Crypto Currency
                                            </label>

                                            <div className="relative">
                                                <button
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    type="button"
                                                    className={`w-full flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2.5 px-3
                                                    ${errors?.crypto_currency_id
                                                            ? "border-red-500 dark:border-red-500"
                                                            : "border-jacarta-100 dark:border-jacarta-600"
                                                        }
                                                    dark:bg-jacarta-700 dark:border-jacarta-600 dark:text-white`}
                                                >
                                                    {selectedCurrency ? (
                                                        <div className="flex items-center gap-2">
                                                            <img src={selectedCurrency?.logo?.imageUrl} alt="" className="w-6 h-6 rounded-full" />
                                                            <span>{selectedCurrency.name} ({selectedCurrency.symbol})</span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-jacarta-400">Select Currency</span>
                                                    )}
                                                    <svg
                                                        className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""
                                                            }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                {isOpen && (
                                                    <div className="absolute z-10 mt-1 w-full rounded-lg border border-jacarta-100 bg-white dark:bg-jacarta-700 dark:border-jacarta-600 shadow-lg">
                                                        {currencies.map((currency) => (
                                                            <div
                                                                key={currency.org_id}
                                                                onClick={() => handleSelect(currency)}
                                                                className="flex items-center gap-3 p-2 hover:bg-jacarta-100 dark:hover:bg-jacarta-600 cursor-pointer"
                                                            >
                                                                <img src={currency?.logo?.imageUrl} alt="" className="w-6 h-6 rounded-full" />
                                                                <div className="text-jacarta-700 dark:text-white">
                                                                    <div className="font-medium">{currency.name}</div>
                                                                    <div className="text-xs text-jacarta-400">{currency.symbol}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            {errors?.crypto_currency_id && (
                                                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                                    {errors?.crypto_currency_id}
                                                </p>
                                            )}
                                        </div>}
                                    <div className="rounded-lg border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow shadow-md dark:border-jacarta-700 dark:bg-jacarta-700">
                                        <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                            <span className="text-base">Sub Total</span>
                                            <span className="text-base"> ${parseFloat(selectedState?.basePrice).toFixed(0)}</span>
                                        </div>
                                        {selectedState?.addons.length > 0 && <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                            <span className="text-base"> Add ons</span>
                                            {/* <span className="text-base">
                                                    {selectedState.addOnAmounts
                                                        .map((item) => `${item}`)
                                                        .join(" + ")}
                                                </span> */}
                                            <span className="text-base"> ${parseFloat(selectedState?.addOnAmount).toFixed(2)}</span>

                                        </div>}
                                        <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                            <span className="text-base"> Discount</span>
                                            <span className="text-base">${parseFloat(selectedState?.discountAmount).toFixed(2)}</span>
                                        </div>

                                        {selectedState?.fees > 0 && <div className="item flex items-center justify-between text-jacarta-700 dark:text-white mb-3 font-semibold">
                                            <span className="text-base"> Fees</span>
                                            <span className="text-base">{selectedState?.fees}%</span>
                                        </div>}

                                        <div className="item flex items-center justify-between text-jacarta-700 dark:text-white font-semibold">
                                            <span className="text-base"> Total</span>
                                            <span className="text-base"> ${parseFloat(selectedState?.price).toFixed(2)} </span>
                                        </div>


                                        <Tooltip title={`${!checkTc ? 'Please Check Terms and Condition First' : 'checkout'}`}>
                                            <button
                                                disabled={!checkTc}
                                                type="button"
                                                className={`mt-5 liquid-button w-full block text-base rounded-full bg-accent py-2 px-5 text-center font-semibold text-white shadow-accent-volume transition-all
                                             hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50`}
                                                onClick={e => { proceedPayment(e) }}
                                            >
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
            </OverlayLoading>
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
