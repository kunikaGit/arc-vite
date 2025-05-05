
import './pricingtable.css'
import { Link } from "react-router-dom";
import { QuestionRound } from "../../../icons/icons";
import { useState } from 'react';
import usePricingTableUtiles from "./priceTableUtiles"
import { useEffect } from "react"

export default function TwoPhase({ handleOpenModal }) {
  // const accountSizes = [
  //   { size: "$8k", price: 39, profitTarget: '$640 (8%)', profitTarget2: '$400 (5%)', dailyLossLimit: "$400 (5%)", drawdown: "$800 (10%)" },
  //   { size: "$15k", price: 79, profitTarget: '$1,200 (8%)', profitTarget2: '$750 (5%)', dailyLossLimit: "$750 (5%)", drawdown: "$1,500 (10%)" },
  //   { size: "$25k", price: 139, profitTarget: '$2,000 (8%)', profitTarget2: '$1,250 (5%)', dailyLossLimit: "$1,250 (5%)", drawdown: "$2,500 (10%)" },
  //   { size: "$50k", price: 269, profitTarget: '$4,000 (8%)', profitTarget2: '$2,500 (5%)', dailyLossLimit: "$2,500 (5%)", drawdown: "$5,000 (10%)" },
  //   { size: "$100k", price: 529, profitTarget: '$8,000 (8%)', profitTarget2: '$5,000 (5%)', dailyLossLimit: "$5,000 (5%)", drawdown: "$10,000 (10%)" },
  // ];

  const {
    twoPhasePlans } = usePricingTableUtiles()
  const [selected, setSelected] = useState(twoPhasePlans.length > 0 ? twoPhasePlans[2] : {});

  useEffect(() => {
    if (twoPhasePlans.length > 2) {
      setSelected(twoPhasePlans[2]);
    }
  }, [twoPhasePlans]);
  return (
    <>
      <div className="flex justify-center space-x-4 mb-6 common-nav-header dark:bg-jacarta-700  bg-[#f5f5fa]">
        {twoPhasePlans.map((account, index) => (
          <div onClick={() => setSelected(account)} key={index}>
            <label className="flex items-center space-x-2 cursor-pointer  text-black dark:text-white ">

              <span
                className={`text-jacarta-700 dark:text-white rounded-md md:py-2 md:px-4 py-2 px-1  md:text-md text-sm transition-all ${selected.account_size === account.account_size
                  ? "text-accent bg-accent text-white"
                  : "  border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white"
                  }`}
              >
                {account.account_size}
              </span>
            </label>
          </div>
        ))}
      </div>

      <div className="pricingtable">
        <div className="upper-box ">
          <div className="fund-info bg-[#f5f5fa] dark:bg-darkblue">
            <h3 className="text-jacarta-700  mb-2 text-md font-medium dark:text-white ">Funded Stage</h3>
            <h2 className="text-jacarta-700  mb-2 text-2xl font-semibold dark:text-white ">Novice </h2>
            <ul className="space-y-2 text-jacarta-700 dark:text-white">
              <li>
                <span>Profit Target
                  <button type='button' onClick={() => handleOpenModal("profitTarget")}><QuestionRound /></button>
                </span>
                <span> {selected.profit_target}</span>
              </li>
              <li><span>Maximum Daily Loss
                <button type='button' onClick={() => handleOpenModal("dailyLoss")}><QuestionRound /></button></span>
                <span>{selected.daily_loss_limit}</span>
              </li>
              <li><span> Maximum Overall Loss
                <button type='button' onClick={() => handleOpenModal("maxloss")}><QuestionRound /></button></span>
                <span> {selected.drawdown} </span></li>
              <li><span>Minimum Trading Days
                <button type='button' onClick={() => handleOpenModal("minTrade")}><QuestionRound /></button></span>
                <span>5 Days</span></li>
            </ul>
          </div>
          <div className="fund-info bg-[#f5f5fa] dark:bg-darkblue">
            <h3 className="text-jacarta-700  mb-2 text-md font-medium dark:text-white ">Funded Stage</h3>
            <h2 className="text-jacarta-700  mb-2 text-2xl font-semibold dark:text-white ">Expert </h2>
            <ul className="space-y-2 text-jacarta-700 dark:text-white">
              <li><span>Profit Target
                <button type='button' onClick={() => handleOpenModal("profitTarget")}><QuestionRound /></button></span>
                <span> ${selected.profit_target2}</span>
              </li>
              <li>
                <span>Maximum Daily Loss
                  <button type='button' onClick={() => handleOpenModal("dailyLoss")}><QuestionRound /></button></span>
                <span>{selected.daily_loss_limit}</span>
              </li>
              <li>
                <span> Maximum Overall Loss
                  <button type='button' onClick={() => handleOpenModal("maxloss")}><QuestionRound /></button>
                </span>
                <span> {selected.drawdown} </span>
              </li>
              <li>
                <span>Minimum Trading Days
                  <button type='button' onClick={() => handleOpenModal("minTrade")}><QuestionRound /></button></span>
                <span>5 Days</span></li>
            </ul>
          </div>
          <div className="fund-info bg-accent ">
            <h3 className="dark:text-jacarta-700  mb-2 text-md font-medium text-white ">Funded Stage</h3>
            <h2 className="dark:text-jacarta-700  mb-2 text-2xl font-semibold text-white ">ARC Funded Traders</h2>
            <ul className="space-y-2 dark:text-jacarta-700 text-white">
              <li>
                <span>Profit Target
                  <button type='button' onClick={() => handleOpenModal("profitTarget")}><QuestionRound /></button>
                </span>
                <span>-</span>
              </li>
              <li>
                <span>Maximum Daily Loss
                  <button type='button' onClick={() => handleOpenModal("dailyLoss")}><QuestionRound /></button></span>
                <span>{selected.daily_loss_limit}</span>
              </li>
              <li><span> Maximum Overall Loss
                <button type='button' onClick={() => handleOpenModal("maxloss")}><QuestionRound /></button></span>
                <span> {selected.drawdown} </span>
              </li>
              <li>
                <span>
                  Minimum Trading Days
                  <button type='button' onClick={() => handleOpenModal("minTrade")}><QuestionRound /></button>
                </span>
                <span>5 Days</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-8 mt-4 flex justify-center" >
          <Link to="/terms-use" className="text-accent text-base">Please check Terms of Use for detailed info</Link>
        </div>
      </div>

      <div className="sub-box">
        <div className="mb-5">
          <h2 className="lg:text-5xl md:text-3xl text-xl text-center font-semibold text-jacarta-700 dark:text-white">${selected.price} For {selected.size} Account</h2>
        </div>
        <Link to='/checkout' state={{ selected }} className="block mx-auto text-md rounded-full bg-accent py-2 w-[200px] text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
          Get Plan</Link>
      </div>
    </>
  );
}

