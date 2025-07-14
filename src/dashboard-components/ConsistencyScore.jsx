import React from 'react';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';
import './ConsistencyScore.scss';
import { Info } from 'lucide-react';

function ConsistencyScore() {
  return (
    <Paper className="consistency-score main-paper">
      <Typography variant="h6" className="title">
        Consistency Score <Info className="info-icon" />
      </Typography>
      <Box className="score-container">
        <Box className="progress-bar">
          <Box className="segment red" style={{ width: '30%' }}>
            <Typography variant="caption">0 - 30 %</Typography>
          </Box>
          <Box className="segment yellow" style={{ width: '40%' }}>
            <Typography variant="caption">30 - 70 %</Typography>
          </Box>
          <Box className="segment green" style={{ width: '30%' }}>
            <Typography variant="caption">70 - 100 %</Typography>
          </Box>
        </Box>
        <Box className="score-indicator">
          <Typography variant="h6" className="score">64 %</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ConsistencyScore;