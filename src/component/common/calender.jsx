import React from 'react';
import Calendar from 'react-calendar';

const DailyCalender = () => {

  const today = new Date();

  // Static profit/loss data (format: 'YYYY-MM-DD': 'profit' or 'loss')
  const profitLossData = {
    '2025-04-01': 'profit',
    '2025-04-02': 'loss',
    '2025-04-04': 'profit',
    '2025-04-06': 'loss',
    '2025-04-08': 'profit',
    '2025-04-09': 'loss',
    '2025-04-10': 'profit',
  };

  const formatDate = (date) => date.toISOString().split('T')[0];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = formatDate(date);
      if (date < today) {
        if (profitLossData[dateStr] === 'profit') return 'profit-date';
        if (profitLossData[dateStr] === 'loss') return 'loss-date';
      }
    }
    return null;
  };

  return (
    <div>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
};

export default DailyCalender;
