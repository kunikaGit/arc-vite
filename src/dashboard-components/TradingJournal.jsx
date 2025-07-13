import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  TextField,
  Button,
  Chip,
  IconButton
} from '@mui/material';
import {
  Info,
  Search,
  Download,
  ChevronDown,
  RefreshCw
} from 'lucide-react';
import './TradingJournal.scss';

const tradingData = [
  {
    ticket: '107850402',
    openTime: '9 Jul 2025 04:46:07',
    type: 'buy',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3293.42,
    sl: 3287.42,
    tp: 0,
    closeTime: '9 Jul 2025 04:50:45',
    closePrice: 3287.17,
    swap: 0.00,
    commission: -13.16,
    profit: -2500.00,
    pips: -6.25,
    duration: '4m 38s'
  },
  {
    ticket: '107850036',
    openTime: '9 Jul 2025 04:42:45',
    type: 'buy',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3295.47,
    sl: 3289.47,
    tp: 0,
    closeTime: '9 Jul 2025 04:45:30',
    closePrice: 3293.48,
    swap: 0.00,
    commission: -13.18,
    profit: -796.00,
    pips: -1.99,
    duration: '2m 45s'
  },
  {
    ticket: '107849619',
    openTime: '9 Jul 2025 04:10:57',
    type: 'buy',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3300.31,
    sl: 3297.31,
    tp: 0,
    closeTime: '9 Jul 2025 04:40:07',
    closePrice: 3297.26,
    swap: 0.00,
    commission: -13.19,
    profit: -1220.00,
    pips: -3.05,
    duration: '29m 10s'
  },
  {
    ticket: '107849007',
    openTime: '9 Jul 2025 03:57:33',
    type: 'buy',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3302.29,
    sl: 3297.29,
    tp: 0,
    closeTime: '9 Jul 2025 04:10:37',
    closePrice: 3299.74,
    swap: 0.00,
    commission: -13.20,
    profit: -1020.00,
    pips: -2.55,
    duration: '13m 4s'
  },
  {
    ticket: '107848147',
    openTime: '9 Jul 2025 03:23:30',
    type: 'sell',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3306.59,
    sl: 3309.59,
    tp: 0,
    closeTime: '9 Jul 2025 03:36:29',
    closePrice: 3305.36,
    swap: 0.00,
    commission: -13.22,
    profit: 492.00,
    pips: 1.23,
    duration: '12m 59s'
  },
  {
    ticket: '107847601',
    openTime: '9 Jul 2025 03:14:57',
    type: 'buy',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3303.17,
    sl: 0,
    tp: 0,
    closeTime: '9 Jul 2025 03:19:21',
    closePrice: 3303.85,
    swap: 0.00,
    commission: -13.22,
    profit: 276.00,
    pips: 0.69,
    duration: '4m 24s'
  },
  {
    ticket: '107847292',
    openTime: '9 Jul 2025 03:05:48',
    type: 'sell',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3306.39,
    sl: 0,
    tp: 0,
    closeTime: '9 Jul 2025 03:10:09',
    closePrice: 3304.62,
    swap: 0.00,
    commission: -13.22,
    profit: 708.00,
    pips: 1.77,
    duration: '4m 21s'
  },
  {
    ticket: '107845784',
    openTime: '9 Jul 2025 01:36:13',
    type: 'buy',
    volume: 4.00,
    symbol: 'XAUUSD',
    price: 3299.19,
    sl: 3295.43,
    tp: 3307.92,
    closeTime: '9 Jul 2025 02:02:28',
    closePrice: 3303.09,
    swap: 0.00,
    commission: -13.21,
    profit: 1560.00,
    pips: 3.9,
    duration: '26m 15s'
  }
];

function TradingJournal() {
  const [orderBy, setOrderBy] = useState('Close Time');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Paper className="trading-journal main-paper">
      <Box className="header">
        <Typography variant="h6" className="title">
          Trading Journal <Info className="info-icon" />
        </Typography>
      </Box>

      <Box className="controls">

        <Box className='search-content'>
          <Box className="left-controls">
            <Typography variant="body2" className="order-label">Order</Typography>
            <Select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="order-select"
              size="small"
            >
              <MenuItem value="Close Time">Close Time ↓</MenuItem>
              <MenuItem value="Open Time">Open Time ↓</MenuItem>
              <MenuItem value="Profit">Profit ↓</MenuItem>
            </Select>
          </Box>

          <Box className="center-controls">
            <Typography variant="body2" className="search-label">Search tickets or tags</Typography>
            <Box className="search-container">
              <TextField
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=""
                size="small"
                className="search-input"
              />
              <IconButton className="search-button">
                <Search />
              </IconButton>
            </Box>
          </Box>
        </Box>


        <Box className="right-controls">
          <Button variant="contained" className="export-button" startIcon={<Download />}>
            Export <ChevronDown />
          </Button>
        </Box>
      </Box>

      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Type <ChevronDown /></TableCell>
              <TableCell>Volume <ChevronDown /></TableCell>
              <TableCell>Symbol <ChevronDown /></TableCell>
              <TableCell>Price</TableCell>
              <TableCell>SL</TableCell>
              <TableCell>TP</TableCell>
              <TableCell>Close</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Swap</TableCell>
              <TableCell>Comm.</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>Pips <Info /></TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Log</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tradingData.map((trade, index) => (
              <TableRow key={index}>
                <TableCell className="ticket-cell">{trade.ticket}</TableCell>
                <TableCell className="time-cell">
                  <Box>
                    <div>{trade.openTime.split(' ')[0]} {trade.openTime.split(' ')[1]}</div>
                    <div className="time-detail">{trade.openTime.split(' ')[2]}</div>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={trade.type}
                    className={`type-chip ${trade.type}`}
                    size="small"
                  />
                </TableCell>
                <TableCell>{trade.volume}</TableCell>
                <TableCell className="symbol-cell">{trade.symbol}</TableCell>
                <TableCell>{trade.price}</TableCell>
                <TableCell>{trade.sl || 0}</TableCell>
                <TableCell>{trade.tp}</TableCell>
                <TableCell className="time-cell">
                  <Box>
                    <div>{trade.closeTime.split(' ')[0]} {trade.closeTime.split(' ')[1]}</div>
                    <div className="time-detail">{trade.closeTime.split(' ')[2]}</div>
                  </Box>
                </TableCell>
                <TableCell>{trade.closePrice}</TableCell>
                <TableCell>{trade.swap}</TableCell>
                <TableCell>{trade.commission}</TableCell>
                <TableCell className={trade.profit > 0 ? 'profit-positive' : 'profit-negative'}>
                  {trade.profit > 0 ? '+' : ''}{trade.profit}
                </TableCell>
                <TableCell className={trade.pips > 0 ? 'pips-positive' : 'pips-negative'}>
                  {trade.pips}
                </TableCell>
                <TableCell className="duration-cell">{trade.duration}</TableCell>
                <TableCell>
                  <IconButton size="small" className="refresh-icon">
                    <RefreshCw />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className="pagination">
        <Typography variant="body2">Page 1 of 2</Typography>
        <Typography variant="body2">Pages: 1 2</Typography>
        <Typography variant="body2" className="next-page">Next page</Typography>
      </Box>
    </Paper>
  );
};

export default TradingJournal;