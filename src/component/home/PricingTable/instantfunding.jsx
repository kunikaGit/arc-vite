import { Link } from "react-router-dom";
import { QuestionRound } from "../../../icons/icons";
import { useState } from "react";
import usePricingTableUtiles from "./priceTableUtiles"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react"
export default function InstantFunding({ handleOpenModal }) {
  // const accountSizes = [
  //   { size: "$5k", price: 99,profit_target:'Unlimitted',max_daily_loss:'3 %',max_overall_loss:'6 %',min_trading_days:'5 Days' },
  //   { size: "$8k", price: 159,profit_target:'Unlimitted',max_daily_loss:'3 %',max_overall_loss:'6 %',min_trading_days:'5 Days' },
  //   { size: "$10k", price: 189,profit_target:'Unlimitted',max_daily_loss:'3 %',max_overall_loss:'6 %',min_trading_days:'5 Days' },

  // ];
  const navigate = useNavigate();

  const { 
    instantFundingPlans}= usePricingTableUtiles()
  const [selected, setSelected] = useState(instantFundingPlans.length>0?instantFundingPlans[2]:{});

  useEffect(() => {
    if (instantFundingPlans.length > 2) {
      setSelected(instantFundingPlans[2]);
    }
  }, [instantFundingPlans]);


    const auth_token = useSelector((state) => state.auth.auth_token); // adjust path as per your state
  
    const handleClick = () => {
      if (auth_token) {
        navigate('/checkout', { state: { selected } });
      } else {
        navigate('/login');
      }
    };
  return (
    <>
      <div className="flex justify-center space-x-4 mb-6 common-nav-header dark:bg-jacarta-700  bg-[#f5f5fa]">
        {instantFundingPlans.map((account, index) => (
          <div onClick={() => setSelected(account)} key={index}>
            <label className="flex items-center space-x-2 cursor-pointer  text-black dark:text-white ">
              <span
                className={`text-jacarta-700 dark:text-white rounded-md md:py-2 md:px-4 py-2 px-2  md:text-md text-sm transition-all ${selected.account_size == account.account_size
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
        <div className="upper-box">
          <div className="fund-info bg-accent ">

            <h3 className="dark:text-jacarta-700  mb-2 text-md font-medium text-white ">Funded Stage</h3>
            <h2 className="dark:text-jacarta-700  mb-2 text-2xl font-semibold text-white ">ARC Funded Traders </h2>
            <ul className="space-y-2 dark:text-jacarta-700 text-white">
              <li>
                <span> Profit Target
                  <button type='button' onClick={() => handleOpenModal("profitTarget")}><QuestionRound /></button>
                </span>
                <span>{selected.profit_target}</span>
              </li>
              <li><span> Maximum Daily Loss
                <button type='button' onClick={() => handleOpenModal("dailyLoss")}><QuestionRound /></button>
              </span>
                <span>{selected.max_daily_loss}</span></li>
              <li><span> Maximum Overall Loss
                <button type='button' onClick={() => handleOpenModal("maxloss")}><QuestionRound /></button>
              </span>
                <span> {selected.max_overall_loss} </span></li>
              <li><span> Minimum Trading Days
                <button type='button' onClick={() => handleOpenModal("minTrade")}><QuestionRound /></button>
              </span>
                <span>{selected.min_trading_days}</span></li>
            </ul>
          </div>
        </div>
        {/* Themed Profit Share Table */}
        <div className="profit-table-card mt-8">
          <div className="table-header">
            <h3 className="table-title">Profit Share Structure</h3>
            <p className="table-subtitle">Earn up to 90% profit share</p>
          </div>
          <div className="table-container">
            <table className="profit-table">
              <thead>
                <tr>
                  <th>Account Balance</th>
                  <th>Profit Target</th>
                  <th>Profit Share</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$2,500</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>$5,000</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>$10,000</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>$20,000</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>$40,000</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>$80,000</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>$100,000</td>
                  <td>5%</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-8 flex justify-center mt-4" >
          <Link to="/terms-use" className="text-accent text-base">Please check Terms of Use for detailed info</Link>
        </div>
      </div>
      <div className="sub-box">
        <div className="mb-5">
          <h2 className="text-3xl text-center font-semibold text-white">${parseFloat(selected.price).toFixed(0)} For {selected.account_size} Account</h2>
        </div>
          <button className="fnx-purple-btn flex m-auto" onClick={handleClick}>
            <span className="btn-label">Start Now</span>
            <span className="btn-shine"></span>
          </button>
      </div>
    </>
  );
}
