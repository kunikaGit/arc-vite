// const Right = () => {
//   return (
//     <svg
//       className="w-4 h-4 text-green-500"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 16 12"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M1 5.917 5.724 10.5 15 1.5"
//       />
//     </svg>
//   );
// };

// const tableData = [
//   {
//     heading: "Account Size",
//     values: [
//       { size: "8,000", price: " $39" },
//       { size: "15,000", price: " $75" },
//       { size: "25,000", price: "$139" },
//       { size: "50,000", price: "$269" },
//       { size: "100,000", price: "$529" },
//     ],
//     showButton: true,
//   },
//   {
//     heading: "15% Profit Share From Challenge Phase",
//     values: ["$117", "$292.50", "$487.50", "$487.50", "$487.50"],
//   },
//   {
//     heading: "Profit Target",
//     values: ["P1: 8%, P2: 5%", "P1: 8%, P2: 5%", "P1: 8%, P2: 5%", "P1: 8%, P2: 5%", "P1: 8%, P2: 5%"],
//   },
//   {
//     heading: "Maximum Daily Loss",
//     values: ["5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)"],
//   },
//   {
//     heading: "Maximum Overall Loss",
//     values: ["5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)"],
//   },
//   {
//     heading: "Minimum Trading Days",
//     values: ["5 Days", "5 Days", "5 Days", "5 Days", "5 Days"],
//   },
//   {
//     heading: "News Trading",
//     values: Array(5).fill(null).map((_, index) => <Right key={index} />),
//   },
// ];

// export default function TwoPhase() {
//   return (
//     <div className="common-table">
//       <div className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//           {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-jacarta-100 border-t">
//             <tbody>
//               {tableData.map((row, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   className="border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
//                 >
//                   <th
//                     scope="row"
//                     className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {row.heading}
//                   </th>

//                   {row?.values.map((value, colIndex) => (
//                     <td  key={`${rowIndex}-${colIndex}`}  className="px-6 py-4 text-center text-base">
//                       <div className="flex flex-col items-center">
//                         {row.showButton ? (
//                           <>
//                             <span>{value.size}</span>
//                             <button className="mt-2 text-sm rounded-lg bg-accent p-2 px-3 text-white shadow-accent-volume transition-all hover:bg-accent-dark">
//                               <span className="font-semibold text-md">Get Plan</span>
//                               <br />
//                               {value.price}
//                             </button>
//                           </>
//                         ) : (
//                           value
//                         )}
//                       </div>
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table> */}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import './pricingtable.css'
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
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg pricingtable">
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
                ? "bg-blue-500 border-blue-700 text-black "
                : "bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white"
                }`}
            >
              {account.size}
            </span>
          </label>
        ))}
      </div>

      {/* Pricing & Details */}
      <div className="upper-box">
        <div className="sub-box">
          <div className="main-heading mb-5">
            <span className="animate-gradient text-2xl  font-bold"> Two Phase</span>
          </div>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">${selected.price}</h2>
            <h3 className="font-medium">For {selected.size} Account</h3>
          </div>
          <button className="w-full block text-md rounded-full bg-accent py-2   px-3 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
            Get Plan</button>
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

