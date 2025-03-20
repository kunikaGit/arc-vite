
import { useState } from "react";
import './pricingtable.css'
import { Link } from "react-router-dom";
const accountSizes = [
  { size: "$8k", price: 39, profitTarget: 500, dailyLossLimit: "4%", drawdown: "10%" },
  { size: "$15k", price: 75, profitTarget: 1000, dailyLossLimit: "4%", drawdown: "10%" },
  { size: "$25k", price: 139, profitTarget: 2500, dailyLossLimit: "4%", drawdown: "10%" },
  { size: "$50k", price: 269, profitTarget: 5000, dailyLossLimit: "4%", drawdown: "10%" },
  { size: "100k", price: 529, profitTarget: 5000, dailyLossLimit: "4%", drawdown: "10%" },

];

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8358ff" height={24} width={24}>
      <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z">
      </path></svg>
  )
}
export default function TwoPhase() {
  const [selected, setSelected] = useState(accountSizes[2]); // Default to $25k

  return (
    <div className="p-6 text-gray-900 dark:text-white rounded-lg pricingtable">
      {/* Account Size Selection - Radio Button Style */}
      <div className="flex justify-center space-x-4 mb-6">
        {accountSizes.map((account, index) => (
          <label key={index} className="flex items-center space-x-2 cursor-pointer px-4">
            <input
              type="radio"
              name="accountSize"
              className="accent-accent"
              checked={selected.size === account.size}
              onChange={() => setSelected(account)}
            />
            <span
              className={` py-2  text-md transition-all ${selected.size === account.size
                ? " text-black dark:text-white"
                : "  border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white"
                }`}
            >
              {account.size}
            </span>
          </label>
        ))}
      </div>

      {/* Pricing & Details */}
      <div className="upper-box rainbow  dark:bg-gray-900">
        <div className="sub-box">
          <div className="main-heading mb-5">
            <span className="animate-gradient text-2xl  font-bold"> Two Phase</span>
          </div>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">${selected.price}</h2>
            <h3 className="font-medium">For {selected.size} Account</h3>
          </div>
          <Link to='/checkout' className="w-full block text-md rounded-full bg-accent py-2   px-3 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
            Get Plan</Link>
        </div>
        <div className="fund-info">
          <h2 className="text-black mb-4 text-xl font-semibold dark:text-white">Two Phase - {selected.size} Account</h2>
          <ul className="space-y-2">
            <li><span><Arrow /> Profit Target :</span>
              <span> ${selected.profitTarget}</span>
            </li>
            <li><span><Arrow /> Maximum Daily Loss: </span><span>{selected.dailyLossLimit}</span></li>
            <li><span><Arrow /> Maximum Overall Loss: </span><span> {selected.drawdown} </span></li>
            <li><span><Arrow /> Minimum Trading Days:</span> <span>5 Days</span></li>
          </ul>
        </div>
      </div>


      {/* <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 dark:text-white">Two Phase - {selected.size} Account</h2>
        <p className="text-lg font-bold mb-4">${selected.price}</p>
        <ul className="space-y-2">
          <li>✅ Profit Target: ${selected.profitTarget}</li>
          <li>✅ Daily Loss Limit: {selected.dailyLossLimit}</li>
          <li>✅ Max Trailing Drawdown: {selected.drawdown}</li>
          <li>✅ Refundable Fee: 100%</li>
        </ul>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Start Trading
        </button>
      </div> */}
    </div>
  );
}

