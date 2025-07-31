import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import { BarChart3, Folder } from 'lucide-react';

const EventsTable = ({ events }) => {
  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const getValueClassName = (actual, forecast) => {
    if (!actual || !forecast) return 'neutral';
    
    const actualNum = parseFloat(actual.replace(/[^\d.-]/g, ''));
    const forecastNum = parseFloat(forecast.replace(/[^\d.-]/g, ''));
    
    if (actualNum > forecastNum) return 'positive';
    if (actualNum < forecastNum) return 'negative';
    return 'neutral';
  };

  return (
    <div className="table-container main-paper">
      <TableContainer component={Paper} sx={{ height: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Impact</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>Actual</TableCell>
              <TableCell>Forecast</TableCell>
              <TableCell>Previous</TableCell>
              <TableCell>Graph</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(groupedEvents).map(([date, dateEvents]) => (
              <React.Fragment key={date}>
                <TableRow className="date-row">
                  <TableCell colSpan={10}>
                    {formatDate(date)}
                  </TableCell>
                </TableRow>
                {dateEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell></TableCell>
                    <TableCell className="time-cell">{event.time}</TableCell>
                    <TableCell className="currency-cell">{event.currency}</TableCell>
                    <TableCell className="impact-cell">
                      <span className={`impact-indicator ${event.impact}`}></span>
                    </TableCell>
                    <TableCell className="event-cell">{event.event}</TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <Folder size={16} color="#f39c12" />
                      </IconButton>
                    </TableCell>
                    <TableCell className={`value-cell ${getValueClassName(event.actual, event.forecast)}`}>
                      {event.actual || '-'}
                    </TableCell>
                    <TableCell className="value-cell neutral">
                      {event.forecast || '-'}
                    </TableCell>
                    <TableCell className="value-cell neutral">
                      {event.previous || '-'}
                    </TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <BarChart3 className="chart-icon" size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EventsTable;
