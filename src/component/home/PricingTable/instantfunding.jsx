import { Link } from "react-router-dom";


const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8358ff" height={24} width={24}>
      <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z">
      </path></svg>
  )
}


export default function InstantFunding() {
  return (
    <div className="pricingtable">
    <div className="upper-box border border-accent dark:bg-gray-900 bg-white dark:bg-jacarta-700">
      <div className="sub-box">
        <div className="main-heading mb-5">
          <span className="animate-gradient text-2xl  font-bold text-jacarta-700 dark:text-white"> Instant Funding</span>
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-jacarta-700 dark:text-white">$149</h2>
          <h3 className="font-medium text-jacarta-700 dark:text-white">For 5k Account</h3>
        </div>
        <Link to='/checkout' className="w-full block text-base rounded-full bg-accent py-2   px-3 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
          Get Plan</Link>
      </div>
      <div className="fund-info">
        <h2 className="text-jacarta-700 dark:text-white mb-4 text-xl font-semibold ">Two Phase - 5k Account</h2>
        <ul className="space-y-2 text-jacarta-700 dark:text-white">
          <li><span><Arrow /> Profit Target :</span>
            <span> -</span>
          </li>
          <li><span><Arrow /> Maximum Daily Loss: </span><span>2%</span></li>
          <li><span><Arrow /> Maximum Overall Loss: </span><span> 3% </span></li>
        </ul>
      </div>
    </div>
</div>
  );
}
