import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import './CurrentResults.scss';

const data = [
  { name: 0, value: 0 },
  { name: 3, value: -1000 },
  { name: 7, value: -2000 },
  { name: 14, value: -3000 },
  { name: 20, value: 1000 },
  { name: 27, value: 3000 },
  { name: 34, value: -1000 },
];

function CurrentResults() {
  return (
    <Paper className="current-results main-paper">
      <Typography variant="h6" className="title">
        Current Results
      </Typography>
      <Box className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#b0b0b0', fontSize: 12 }}
              label={{ value: 'Number of Trades', position: 'insideBottom', offset: -5, fill: '#b0b0b0' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#b0b0b0', fontSize: 12 }}
              domain={[-6000, 6000]}
            />
            <ReferenceLine y={0} stroke="#fff" strokeDasharray="3 3" />
            <ReferenceLine y={-5000} stroke="#fff" strokeWidth={2} />
            <ReferenceLine y={5000} stroke="#fff" strokeWidth={2} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#fff" 
              strokeWidth={2}
              dot={{ fill: '#fff', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <Box className="chart-labels">
          <Box className="label profit">Profit $5,000</Box>
          <Box className="label loss">Max Loss -$5,000</Box>
        </Box>
      </Box>
      <Box className="results-footer">
        <Box className="result-item">
          <Typography variant="body2" className="label">Today's permitted loss</Typography>
          <Typography variant="h6" className="value">$858.80</Typography>
        </Box>
        <Box className="result-item">
          <Typography variant="body2" className="label">Max permitted loss</Typography>
          <Typography variant="h6" className="value">$2,935.35</Typography>
        </Box>
        <Box className="result-item">
          <Typography variant="body2" className="label">Today's profit</Typography>
          <Typography variant="h6" className="value negative">-$1,640.20</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CurrentResults;