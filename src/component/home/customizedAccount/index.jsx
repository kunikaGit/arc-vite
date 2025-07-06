import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Calendar } from 'lucide-react';
import './customized.scss'
function CostomizedAccount() {
  const [accountBalance, setAccountBalance] = useState(50000);
  const [drawdown, setDrawdown] = useState(10);
  const [minTradingDays, setMinTradingDays] = useState(3);

  const handleSliderChange = (value, field) => {
    switch (field) {
      case 'accountBalance':
        setAccountBalance(value);
        break;
      case 'drawdown':
        setDrawdown(value);
        break;
      case 'minTradingDays':
        setMinTradingDays(value);
        break;
      default:
        break;
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log('Calculating with:', { accountBalance, drawdown, minTradingDays });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-200/20 p-8 md:p-12">

          {/* Sliders */}
          <div className="space-y-10">
            {/* Account Balance Slider */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-black" />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-800">Account Balance</label>
                  <p className="text-sm text-gray-500">$5,000 - $300,000</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min={5000}
                      max={300000}
                      step={1000}
                      value={accountBalance}
                      onChange={(e) => handleSliderChange(Number(e.target.value), 'accountBalance')}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-lg pointer-events-none"
                      style={{ width: `${((accountBalance - 5000) / (300000 - 5000)) * 100}%` }}
                    />
                  </div>
                  <div className="min-w-[140px]">
                    <input
                      type="number"
                      min={5000}
                      max={300000}
                      step={1000}
                      value={accountBalance}
                      onChange={(e) => handleSliderChange(Number(e.target.value), 'accountBalance')}
                      className="w-full px-4 py-2 text-lg font-semibold text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />  
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(accountBalance)}</span>
                </div>
              </div>
            </div>

            {/* Drawdown Slider */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-black" />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-800">Overall Drawdown</label>
                  <p className="text-sm text-gray-500">5% - 15%</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min={5}
                      max={15}
                      value={drawdown}
                      onChange={(e) => handleSliderChange(Number(e.target.value), 'drawdown')}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-red"
                    />
                    <div
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-lg pointer-events-none"
                      style={{ width: `${((drawdown - 5) / (15 - 5)) * 100}%` }}
                    />
                  </div>
                  <div className="min-w-[140px]">
                    <input
                      type="number"
                      min={5}
                      max={15}
                      value={drawdown}
                      onChange={(e) => handleSliderChange(Number(e.target.value), 'drawdown')}
                      className="w-full px-4 py-2 text-lg font-semibold text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-600">{drawdown}%</span>
                </div>
              </div>
            </div>

            {/* Trading Days Slider */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-800">Minimum Trading Days</label>
                  <p className="text-sm text-gray-500">2 - 5 days</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min={2}
                      max={5}
                      value={minTradingDays}
                      onChange={(e) => handleSliderChange(Number(e.target.value), 'minTradingDays')}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
                    />
                    <div
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg pointer-events-none"
                      style={{ width: `${((minTradingDays - 2) / (5 - 2)) * 100}%` }}
                    />
                  </div>
                  <div className="min-w-[140px]">
                    <input
                      type="number"
                      min={2}
                      max={5}
                      value={minTradingDays}
                      onChange={(e) => handleSliderChange(Number(e.target.value), 'minTradingDays')}
                      className="w-full px-4 py-2 text-lg font-semibold text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">{minTradingDays} {minTradingDays === 1 ? 'day' : 'days'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleCalculate}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-black font-semibold text-lg rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
            >
              <Calculator className="w-5 h-5" />
              Calculate Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostomizedAccount;
