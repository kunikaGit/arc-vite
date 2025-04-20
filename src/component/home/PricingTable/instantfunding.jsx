import { Link } from "react-router-dom";
import { QuestionRound } from "../../../icons/icons";
import { useState } from "react";



export default function InstantFunding({ handleOpenModal }) {
  const accountSizes = [
    { size: "$5k", price: 99 },
    { size: "$8k", price: 159 },
    { size: "$10k", price: 189 },

  ];
  const [selected, setSelected] = useState(accountSizes[2]);
  return (
    <>
      <div className="flex justify-center space-x-4 mb-6 common-nav-header dark:bg-jacarta-700  bg-[#f5f5fa]">
        {accountSizes.map((account, index) => (
          <div onClick={() => setSelected(account)} key={index}>
            <label className="flex items-center space-x-2 cursor-pointer  text-black dark:text-white ">

              <span
                className={`text-jacarta-700 dark:text-white rounded-md py-2 px-4  text-md transition-all ${selected.size === account.size
                  ? "text-accent bg-accent text-white"
                  : "  border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white"
                  }`}
              >
                {account.size}
              </span>
            </label>
          </div>
        ))}
      </div>
      <div className="pricingtable">
        <div className="upper-box">
          <div className="fund-info bg-accent ">

            <h3 className="dark:text-jacarta-700  mb-2 text-md font-medium text-white ">Funded Stage</h3>
            <h2 className="dark:text-jacarta-700  mb-2 text-2xl font-semibold text-white ">ARC Funded Traders </h2>
            <ul className="space-y-2 dark:text-jacarta-700 text-white">
              <li>
                <span> Profit Target
                  <button type='button' onClick={() => handleOpenModal("profitTarget")}><QuestionRound /></button>
                </span>
                <span>Unlimited</span>
              </li>
              <li><span> Maximum Daily Loss
                <button type='button' onClick={() => handleOpenModal("dailyLoss")}><QuestionRound /></button>
              </span>
                <span>3%</span></li>
              <li><span> Maximum Overall Loss
                <button type='button' onClick={() => handleOpenModal("maxloss")}><QuestionRound /></button>
              </span>
                <span> 6% </span></li>
              <li><span> Minimum Trading Days
                <button type='button' onClick={() => handleOpenModal("minTrade")}><QuestionRound /></button>
              </span>
                <span>5 Days</span></li>
            </ul>
          </div>
        </div>
        <div className="mb-8 flex justify-center mt-4" >
          <Link to="/terms-use" className="text-accent text-base">Please check Terms of Use for detailed info</Link>
        </div>
      </div>
      <div className="sub-box">
        <div className="mb-5">
          <h2 className="text-5xl text-center font-semibold text-jacarta-700 dark:text-white">${selected.price} For {selected.size} Account</h2>
        </div>
        <Link to='/checkout' state={{ selected }} className="block mx-auto text-md rounded-full bg-accent py-2 w-[200px] text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
          Get Plan</Link>
      </div>
    </>
  );
}
