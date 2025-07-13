import React from 'react'

const LeaderboardTable = () => {
    return (
        <div className="theme_card dark-gradient data-table">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Profit</th>
                        <th>Equity</th>
                        <th>Gain %</th>
                        <th>Account Size</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John H</td>
                        <td>$600,000</td>
                        <td>$168,169</td>
                        <td>68%</td>
                        <td>$10,000</td>
                        <td>
                            <div className='flex items-center justify-center gap-3'>
                                <img src='/img/flag1.png' alt='flag' className='h-4 w-4'/>
                                <span className='text-base'>IT</span>
                            </div>
                        </td>
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
    )
}

export default LeaderboardTable