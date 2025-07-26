import React from 'react';
import { ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';
import dayjs from 'dayjs';

const EconomyHeader = ({ 
  selectedDate, 
  selectedView, 
  onPrevWeek, 
  onNextWeek 
}) => {
  const getWeekRange = () => {
    const startOfWeek = dayjs(selectedDate).startOf('week');
    const endOfWeek = dayjs(selectedDate).endOf('week');
    
    return `${startOfWeek.format('MMM D')} - ${endOfWeek.format('MMM D')}`;
  };

  const getHeaderTitle = () => {
    switch (selectedView) {
      case 'today':
        return `Today: ${dayjs(selectedDate).format('MMM D')}`;
      case 'tomorrow':
        return `Tomorrow: ${dayjs(selectedDate).add(1, 'day').format('MMM D')}`;
      case 'this-week':
        return `This Week: ${getWeekRange()}`;
      case 'next-week':
        return `Next Week: ${dayjs(selectedDate).add(1, 'week').startOf('week').format('MMM D')} - ${dayjs(selectedDate).add(1, 'week').endOf('week').format('MMM D')}`;
      case 'this-month':
        return `This Month: ${dayjs(selectedDate).format('MMMM YYYY')}`;
      default:
        return `This Week: ${getWeekRange()}`;
    }
  };

  return (
    <div className="header">
      <div className="week-navigation">
        <button className="nav-button" onClick={onPrevWeek}>
          <ChevronLeft size={16} />
        </button>
        <div className="week-title">
          {getHeaderTitle()}
        </div>
        <button className="nav-button" onClick={onNextWeek}>
          <ChevronRight size={16} />
        </button>
      </div>
      
    </div>
  );
};

export default EconomyHeader;
