
import { useState } from "react";
import './pricingtable.css'
import { Link } from "react-router-dom";
import { QuestionRound } from "../../../icons/icons";


const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8358ff" height={24} width={24}>
      <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z">
      </path></svg>
  )
}
export default function TwoPhase({ selected }) {

  return (
    <div className="pricingtable">
      {/* Pricing & Details */}
      <div className="upper-box ">
        <div className="fund-info bg-[#f5f5fa] dark:bg-jacarta-700">
          <h3 className="text-jacarta-700  mb-2 text-md font-medium dark:text-white ">Evaluation Stage</h3>
          <h2 className="text-jacarta-700  mb-2 text-2xl font-semibold dark:text-white ">Novice </h2>
          <ul className="space-y-2 text-jacarta-700 dark:text-white">
            <li><span> Profit Target <QuestionRound/></span>
              <span> ${selected.profitTarget}</span>
            </li>
            <li><span> Maximum Daily Loss <QuestionRound/> </span><span>{selected.dailyLossLimit}</span></li>
            <li><span> Maximum Overall Loss <QuestionRound/></span><span> {selected.drawdown} </span></li>
            <li><span> Minimum Trading Days <QuestionRound/></span> <span>5 Days</span></li>
          </ul>
        </div>
        <div className="fund-info bg-[#f5f5fa] dark:bg-jacarta-700 ">
          <h3 className="text-jacarta-700  mb-2 text-md font-medium dark:text-white ">Evaluation Stage</h3>
          <h2 className="text-jacarta-700  mb-2 text-2xl font-semibold dark:text-white ">Expert </h2>
          <ul className="space-y-2 text-jacarta-700 dark:text-white">
            <li><span> Profit Target  <QuestionRound/></span>
              <span> ${selected.profitTarget}</span>
            </li>
            <li><span> Maximum Daily Loss <QuestionRound/> </span><span>{selected.dailyLossLimit}</span></li>
            <li><span> Maximum Overall Loss <QuestionRound/></span><span> {selected.drawdown} </span></li>
            <li><span> Minimum Trading Days <QuestionRound/></span> <span>5 Days</span></li>
          </ul>
        </div>
        <div className="fund-info bg-accent ">
          <h3 className="dark:text-jacarta-700  mb-2 text-md font-medium text-white ">Evaluation Stage</h3>
          <h2 className="dark:text-jacarta-700  mb-2 text-2xl font-semibold text-white ">ARC Funded Traders</h2>
          <ul className="space-y-2 dark:text-jacarta-700 text-white">
            <li><span> Maximum Daily Loss <QuestionRound/></span><span>{selected.dailyLossLimit}</span></li>
            <li><span> Maximum Overall Loss <QuestionRound/> </span><span> {selected.drawdown} </span></li>
            <li><span> Minimum Trading Days <QuestionRound/></span> <span>5 Days</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

