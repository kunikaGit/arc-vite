import React from "react";
import { UserHeart } from "../../../icons/icons";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";

const FundedLongue = () => {
    return (
        <>
            <DashboardHeader title="Traders Withdrawal" />
            <div className="accounts-overview-wrapped">
                <div className="theme_card  md:flex-row flex-col bg-2b2a33 mb-5 flex items-center gap-5 ">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full md:flex-row flex-col">
                        <div className="mb-3 md:mb-0 funded-content ">
                            <h4 className="font-light mb-1">ARC_100k Funded Login :12345678 </h4>
                            <h4 className="font-light mb-2">Balance : $106.600</h4>
                            <h4 className="font-light flex gap-2">Account Status 
                                <div className="bg-green-500 rounded-md py-1 px-2 text-xs flex items-center justify-center">Active</div></h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard/withdrawal/step2"
                                className="md:w-44 w-full block md:text-base text-sm rounded-full bg-accent md:py-3 py-2
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Proceed
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5 md:flex-row flex-col">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full md:flex-row flex-col">
                        <div className="mb-3 md:mb-0 funded-content ">
                            <h4 className="font-light mb-1">ARC_100k Funded Login :12345678 </h4>
                            <h4 className="font-light mb-2">Balance : $106.600</h4>
                            <h4 className="font-light flex gap-2">Account Status 
                                <div className="bg-green-500 rounded-md py-1 px-2 text-xs flex items-center justify-center">Active</div></h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard/withdrawal/step2"
                                className="md:w-44 w-full md:text-base text-sm block rounded-full bg-accent md:py-3 py-2
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Proceed
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5 md:flex-row flex-col">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full md:flex-row flex-col">
                        <div className="mb-3 md:mb-0 funded-content ">
                            <h4 className="font-light mb-1">ARC_100k Funded Login :12345678 </h4>
                            <h4 className="font-light mb-2">Balance : $106.600</h4>
                            <h4 className="font-light flex gap-2">Account Status 
                                <div className="bg-green-500 rounded-md py-1 px-2 text-xs flex items-center justify-center">Active</div></h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard/withdrawal/step2"
                                className=" md:w-44 w-full md:text-base text-sm block  rounded-full bg-accent md:py-3 py-2
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Proceed
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FundedLongue