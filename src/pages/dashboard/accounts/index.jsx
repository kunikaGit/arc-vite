import React from "react";
import { BarLineIcon, EqualIcon, LossIcon, ProfiteIcon, UserHeart, WalletIcon } from "../../../icons/icons";
import DateChart from "../../../component/accounts/datechart";
import DailyCalender from "../../../component/common/calender";
import { DashboardHeader, LineChart, TradingObjective } from "../../../component";
import AccountChart from "./arechart";
const accoundCrads = [
    {
        title: 'Average Profit',
        number: '70',
        icon: <ProfiteIcon />,
        bgcolor: '#8358ff',
        target: 'profit'
    },
    {
        title: 'Average loss',
        number: '20',
        icon: <LossIcon />,
        bgcolor: '#bc0505',
        target: 'loss'
    },
    {
        title: 'Balance',
        number: '76',
        icon: <WalletIcon />,
        bgcolor: '#76009f'
    },
    {
        title: 'Win Rate',
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
    },
    {
        title: 'Lots',
        number: '76',
        icon: <ProfiteIcon />,
        bgcolor: '#8358ff'
    },
    {
        title: 'Average RRS',
        number: '76',
        icon: <LossIcon />,
        bgcolor: '#bc0505'
    },
]
const Accounts = () => {

    return (
        <>
            <DashboardHeader title="Account Dashboard" />
            <div className="accounts">
                <div className="flex-box">
                    <div className="left-box">
                        <div className="account-info">
                            <div className="theme_card bg-grey mb-5">
                                <div className="flex gap-6 mb-4">
                                    <div className="item flex items-center gap-2"><UserHeart /> <span className="text-sm">Active</span></div>
                                    <div className="item flex items-center gap-2"><UserHeart /><span className="text-sm">ARC 100k Funded</span></div>
                                </div>
                                <div className="uppercase text-sm">LOGIN : 14444</div>
                            </div>
                        </div>
                        {/* <LineChart /> */}
                        <div className="theme_card bg-grey mt-5">
                            <DateChart />
                        </div>
                        <div className="calender-data theme_card bg-grey">
                            <h2>Profit / Loss Calendar</h2>
                            <DailyCalender />
                        </div>
                    </div>
                    <div className="right-box">
                        <TradingObjective />
                        <div className="four-box mb-4">
                            {accoundCrads?.map((item, index) => (
                                <div className="media bg-grey flex items-center justify-between" key={index}>
                                    <div className="me-3 icon-box">
                                        {item.icon}
                                    </div>
                                    <div className="media-body text-end">
                                        <p className="mb-1">{item.title}</p>
                                        <h3 className={`font-semibold text-lg ${item.target === 'loss' ? 'text-red-400' :
                                            item.target === 'profit' ? 'text-green-300' :
                                                ''
                                            }`}>{item.number}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="theme_card bg-grey data-table">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Lot</th>
                                        <th>Entry</th>
                                        <th>Tp</th>
                                        <th>SL</th>
                                        <th>Pips</th>
                                        <th>Profit/Loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="account-info"></div>
                <AccountChart />
            </div>
        </>
    )
}
export default Accounts