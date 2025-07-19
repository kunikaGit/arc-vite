import React from 'react';
import AccountMetrix from './AccountMetrix';
import MainContent from './MainContent';
import './TradingDashboard.scss';
import DashboardHeader from '../component/common/dashboardHeader';

function TradingDashboard() {
  return (
    <div className="trading-dashboard">
      <DashboardHeader/>
      {/* <DashboardHeader/> */}
        <AccountMetrix />
        <MainContent />
    </div>
  );
};

export default TradingDashboard;