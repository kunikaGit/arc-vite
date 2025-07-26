import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dayjs from 'dayjs';
import './economyCalender.scss'
import EconomySidebar from '../../component/economy-calender/Sidebar';
import EconomyHeader from '../../component/economy-calender/Header';
import EventsTable from '../../component/economy-calender/EventsTable';
import { getEventsByDate, getEventsByDateRange, mockEconomicData } from '../../component/data/mockData';
import Header2 from '../../component/home2/header2';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function EconomyCalendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedView, setSelectedView] = useState('this-week');
  const [filteredEvents, setFilteredEvents] = useState(mockEconomicData);

  useEffect(() => {
    let events = mockEconomicData;

    switch (selectedView) {
      case 'today':
        events = getEventsByDate(selectedDate.format('YYYY-MM-DD'));
        break;
      case 'tomorrow':
        events = getEventsByDate(selectedDate.add(1, 'day').format('YYYY-MM-DD'));
        break;
      case 'yesterday':
        events = getEventsByDate(selectedDate.subtract(1, 'day').format('YYYY-MM-DD'));
        break;
      case 'this-week':
        events = getEventsByDateRange(
          selectedDate.startOf('week').format('YYYY-MM-DD'),
          selectedDate.endOf('week').format('YYYY-MM-DD')
        );
        break;
      case 'next-week':
        events = getEventsByDateRange(
          selectedDate.add(1, 'week').startOf('week').format('YYYY-MM-DD'),
          selectedDate.add(1, 'week').endOf('week').format('YYYY-MM-DD')
        );
        break;
      case 'last-week':
        events = getEventsByDateRange(
          selectedDate.subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
          selectedDate.subtract(1, 'week').endOf('week').format('YYYY-MM-DD')
        );
        break;
      case 'this-month':
        events = getEventsByDateRange(
          selectedDate.startOf('month').format('YYYY-MM-DD'),
          selectedDate.endOf('month').format('YYYY-MM-DD')
        );
        break;
      case 'next-month':
        events = getEventsByDateRange(
          selectedDate.add(1, 'month').startOf('month').format('YYYY-MM-DD'),
          selectedDate.add(1, 'month').endOf('month').format('YYYY-MM-DD')
        );
        break;
      case 'last-month':
        events = getEventsByDateRange(
          selectedDate.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
          selectedDate.subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
        );
        break;
      default:
        events = mockEconomicData;
    }

    setFilteredEvents(events);
  }, [selectedDate, selectedView]);

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  const handlePrevWeek = () => {
    setSelectedDate(selectedDate.subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setSelectedDate(selectedDate.add(1, 'week'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
      <Header2/>
        <EconomySidebar
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          selectedView={selectedView}
          onViewChange={handleViewChange}
        />
        <div className="main-content">
          <EconomyHeader
            selectedDate={selectedDate}
            selectedView={selectedView}
            onPrevWeek={handlePrevWeek}
            onNextWeek={handleNextWeek}
          />
          <EventsTable events={filteredEvents} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default EconomyCalendar;
