import React from 'react'
import imageMap from '../../utlis/helper'
import './leaderboard.scss'
const LeaderboardCards = ({ leadercard }) => {
    return (
        <>
            <div className='flex_box3'>
                {leadercard?.map((item, index) => (
                    <div className='leader-card' key={index}>
                        <div className='flex justify-between mb-3'>
                            <div className='flex gap-x-4 items-center'>
                                <img className="h-12 w-13" src={
                                    item.rank === 1
                                        ? imageMap["golden.png"]
                                        : item.rank === 2
                                            ? imageMap["silver.png"]
                                            : item.rank === 3
                                                ? imageMap["copper.png"]
                                                : ""
                                } />
                                <div className='card-heading'>
                                    <h2 className="text-xl mb-1 font-semibold capitalize text-black title">{item.name}</h2>
                                    <div className='country flex gap-2'>
                                        <img src={`/img/${item.flag}`} className='flag rounded-full h-4 w-4' alt='trophy' />
                                        <h3 className='text-sm m-0'>{item.country}</h3>
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-2xl font-bold'>{item.rank}</h2>
                        </div>
                        <div className='content'>
                            <div className='flex gap-4 justify-between'>
                                <div className='account-item'>
                                    <h3>Profit</h3>
                                    <span>${item.profit}</span>
                                </div>
                                <div className='account-item'>
                                    <h3>Equity</h3>
                                    <span>${item.equity}</span>
                                </div>
                                <div className='account-item'>
                                    <h3>Gain %</h3>
                                    <span>{item.gain}%</span>
                                </div>
                            </div>
                            <div className='acc-size flex justify-between items-center'>
                                <span className='size-text font-display'>Account Size</span>
                                <span className='size'>{item.acc_size}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LeaderboardCards