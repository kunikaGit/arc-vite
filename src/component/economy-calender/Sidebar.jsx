  import React from 'react';
  import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import dayjs from 'dayjs';

  import { TrendingUp, Zap, Bitcoin, Calendar } from 'lucide-react';

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

        <div className="calendar-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              value={selectedDate}
              onChange={onDateChange}
              slotProps={{
                day: {
                  sx: {
                    width:'100px',
                    '&.Mui-selected': {
                      backgroundColor: '#1976d2 !important',
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

        {/* <div className="calendar-types">
          {calendarTypes.map((calendar) => {
            const Icon = calendar.icon;
            return (
              <div key={calendar.id} className="calendar-type">
                <Icon className="icon" style={{ color: calendar.color }} />
                <span>{calendar.label}</span>
              </div>
            );
          })}
        </div> */}
      </div>
    );
  };

  export default EconomySidebar;
