import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { TrendingUp, Zap, Bitcoin } from 'lucide-react';
import { Button, Box, Typography } from '@mui/material';

const navigationItems = [
  { id: 'today', label: 'Today' },
  { id: 'tomorrow', label: 'Tomorrow' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: 'last-week', label: 'Last Week' },
  { id: 'last-month', label: 'Last Month' },
];

const calendarTypes = [
  { id: 'metals', label: 'Metals Calendar', icon: TrendingUp, color: '#e74c3c' },
  { id: 'energy', label: 'Energy Calendar', icon: Zap, color: '#27ae60' },
  { id: 'crypto', label: 'Crypto Calendar', icon: Bitcoin, color: '#f39c12' },
];

const EconomySidebar = ({ selectedDate, onDateChange, selectedView, onViewChange }) => {
  return (
    <div className="sidebar">
      {/* Navigation Section */}
      <div className="navigation-section">
        <h3>Navigation</h3>
        <div className="nav-links">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className={`nav-link ${selectedView === item.id ? 'active' : ''}`}
              onClick={() => onViewChange(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Date Picker Section */}
      <div className="calendar-container navigation-section" >
       <h3>Select date</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            value={selectedDate}
            onChange={onDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                size: 'small',
              },
              day: {
                sx: {
                  '&.Mui-selected': {
                      color: 'white',
                  },
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default EconomySidebar;
