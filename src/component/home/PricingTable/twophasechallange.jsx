
import './pricingtable.css'
import { Link } from "react-router-dom";
import { QuestionRound } from "../../../icons/icons";

export default function TwoPhase({ selected,handleOpenModal }) {

  return (
    <div className="pricingtable">
      <div className="upper-box ">
        
        <div className="fund-info bg-[#f5f5fa] dark:bg-jacarta-700">
          <h3 className="text-jacarta-700  mb-2 text-md font-medium dark:text-white ">Funded Stage</h3>
          <h2 className="text-jacarta-700  mb-2 text-2xl font-semibold dark:text-white ">Novice </h2>
          <ul className="space-y-2 text-jacarta-700 dark:text-white">
            <li><span> Profit Target <button type='button' onClick={() => handleOpenModal("profitTarget")}><QuestionRound /></button></span>
              <span> ${selected.profitTarget}</span>
            </li>
            <li><span> Maximum Daily Loss <QuestionRound /> </span><span>{selected.dailyLossLimit}</span></li>
            <li><span> Maximum Overall Loss <QuestionRound /></span><span> {selected.drawdown} </span></li>
            <li><span> Minimum Trading Days <QuestionRound /></span> <span>5 Days</span></li>
          </ul>
        </div>
        <div className="fund-info bg-[#f5f5fa] dark:bg-jacarta-700 ">
          <h3 className="text-jacarta-700  mb-2 text-md font-medium dark:text-white ">Funded Stage</h3>
          <h2 className="text-jacarta-700  mb-2 text-2xl font-semibold dark:text-white ">Expert </h2>
          <ul className="space-y-2 text-jacarta-700 dark:text-white">
            <li><span> Profit Target  <QuestionRound /></span>
              <span> ${selected.profitTarget}</span>
            </li>
            <li><span> Maximum Daily Loss <QuestionRound /> </span><span>{selected.dailyLossLimit}</span></li>
            <li><span> Maximum Overall Loss <QuestionRound /></span><span> {selected.drawdown} </span></li>
            <li><span> Minimum Trading Days <QuestionRound /></span> <span>5 Days</span></li>
          </ul>
        </div>
        <div className="fund-info bg-accent ">
          <h3 className="dark:text-jacarta-700  mb-2 text-md font-medium text-white ">Funded Stage</h3>
          <h2 className="dark:text-jacarta-700  mb-2 text-2xl font-semibold text-white ">ARC Funded Traders</h2>
          <ul className="space-y-2 dark:text-jacarta-700 text-white">
            <li><span> Profit Target <QuestionRound /></span>
              <span>-</span>
            </li>
            <li><span> Maximum Daily Loss <QuestionRound /></span><span>{selected.dailyLossLimit}</span></li>
            <li><span> Maximum Overall Loss <QuestionRound /> </span><span> {selected.drawdown} </span></li>
            <li><span> Minimum Trading Days <QuestionRound /></span> <span>5 Days</span></li>
          </ul>
        </div>
      </div>
      <div className="mb-8 mt-4 flex justify-end" >
        <Link to="/terms-use" className="text-accent text-base">Please check Terms of Use for detailed info</Link>
      </div>
    </div>
  );
}

