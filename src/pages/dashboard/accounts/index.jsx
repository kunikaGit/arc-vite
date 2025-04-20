import React from "react";
import { BarLineIcon, EqualIcon, LossIcon, ProfiteIcon, UserHeart, WalletIcon } from "../../../icons/icons";
import DateChart from "../../../component/accounts/datechart";
import DailyCalender from "../../../component/common/calender";
import { DashboardHeader, LineChart, TradingObjective } from "../../../component";

const accoundCrads = [
    {
        title: 'Average Profit',
        number: '76',
        icon: <ProfiteIcon />,
        bgcolor: '#8358ff'
    },
    {
        title: 'Average loss',
        number: '76',
        icon: <LossIcon />,
        bgcolor: '#bc0505'
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
    },
    {
        title: 'Number of Traders',
        number: '76',
        icon: <BarLineIcon />,
        bgcolor: '#e99803'
    }

]
const Accounts = () => {
    return (
        <>
        <DashboardHeader title="Account Dashboard"/>
            <div className="accounts">
                <div className="flex-box">
                    <div className="left-box">
                        <TradingObjective />
                        <LineChart />
                        <div className="theme_card bg-2b2a33 mt-5">
                            <DateChart />
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="account-info">
                            <div className="theme_card bg-2b2a33 mb-5">
                                <div className="flex gap-6 mb-4">
                                    <div className="item flex items-center gap-2"><UserHeart /> <span className="text-sm">Active</span></div>
                                    <div className="item flex items-center gap-2"><UserHeart /><span className="text-sm">ARC 100k Funded</span></div>
                                </div>
                                <div className="uppercase text-sm">LOGIN : 14444</div>
                            </div>
                        </div>
                        <div className="four-box mb-4">
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
                        <div className="calender-data theme_card bg-2b2a33">
                        <h2>Profit / Loss Calendar</h2>
                                <DailyCalender/>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Accounts