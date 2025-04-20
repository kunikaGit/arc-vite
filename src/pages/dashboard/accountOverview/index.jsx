import React from "react";
import { UserHeart } from "../../../icons/icons";
import { DashboardHeader } from "../../../component";
import { Link } from "react-router-dom";
import './accountOverview.scss'

const Accounts = () => {
    return (
        <>
            <DashboardHeader title="Account Overview" />
            <div className="accounts-overview-wrapped">
                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full">
                        <div>
                            <h3 className="font-light mb-1">ARC_100k Novoice</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard"
                                className=" w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full">
                        <div>
                            <h3 className="font-light mb-1">ARC_100k Expert</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard"
                                className=" w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="theme_card bg-2b2a33 mb-5 flex items-center gap-5">
                    <div className="icon"><UserHeart /> </div>
                    <div className="overview flex justify-between w-full">
                        <div>
                            <h3 className="font-light mb-1">ARC_100k Funded</h3>
                            <h4 className="font-light">Balance : $106.600</h4>
                        </div>
                        <div className="btn">
                            <Link
                                to="/dashboard"
                                className=" w-44 block text-base rounded-full bg-accent py-3
                                px-4 text-center font-medium text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Accounts