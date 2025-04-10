import React from "react";
import { LineChart, TradingObjective } from "../../component";
import { EqualIcon, ProfiteIcon, UserHeart, WalletIcon } from "../../icons/icons";

const accoundCrads = [
    {
        title: 'Appointment',
        number: '76',
        icon: <ProfiteIcon />,
        bgcolor: '#8358ff'
    },
    {
        title: 'Balance',
        number: '76',
        icon: <WalletIcon />,
        bgcolor: '#76009f'
    },
    {
        title: 'PnL',
        number: '76',
        icon: <ProfiteIcon />,
        bgcolor: '#209f84'
    },
    {
        title: 'Equity',
        number: '76',
        icon: <EqualIcon />,
        bgcolor: '#2781d5'
    }
]
const Accounts = () => {
    return (
        <>
            <div className="accounts">
                <h2 className="dashboard-title">
                    Account Dashboard
                </h2>
                <div className="flex-box">
                    <div className="left-box">
                        <div className="four-box">
                            {accoundCrads?.map((item, index) => (
                                <div className="media flex items-center justify-between" key={index}
                                    style={{ backgroundColor: item.bgcolor }}>
                                    <div className="me-3 icon-box">
                                        {item.icon}
                                    </div>
                                    <div className="media-body text-white text-end">
                                        <p className="mb-1">{item.title}</p>
                                        <h3 className="text-white">{item.number}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <LineChart />
                    </div>
                    <div className="right-box">
                        <div className="account-info">
                            <div className="theme_card bg-purple mb-5">
                                <div className="flex gap-6 mb-4">
                                    <div className="item flex items-center gap-2"><UserHeart /> <span className="text-sm">Active</span></div>
                                    <div className="item flex items-center gap-2"><UserHeart /><span className="text-sm">ARC 100k Funded</span></div>
                                </div>
                                <div className="uppercase text-sm">LOGIN : 14444</div>
                            </div>
                        </div>

                        <TradingObjective/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Accounts