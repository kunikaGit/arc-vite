import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import './Statistics.scss';

function Statistics() {
  return (
    <Paper className="statistics main-paper">
      <Typography variant="h6" className="title">
        Statistics
      </Typography>
      <Grid container spacing={0}>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Equity</Typography>
            <Typography variant="h6" className="value">$47,935.35</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Average profit</Typography>
            <Typography variant="h6" className="value positive">$669.16</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Balance</Typography>
            <Typography variant="h6" className="value">$47,935.35</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Average loss</Typography>
            <Typography variant="h6" className="value negative">-$1,103.44</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">No. of trades</Typography>
            <Typography variant="h6" className="value">34</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Average RRR</Typography>
            <Typography variant="h6" className="value">0.61</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Lots</Typography>
            <Typography variant="h6" className="value">103.13</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Expectancy</Typography>
            <Typography variant="h6" className="value negative">-$60.73</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Win rate</Typography>
            <Typography variant="h6" className="value">58.82%</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:6}}>
          <Box className="stat-item">
            <Typography variant="body2" className="label">Profit factor</Typography>
            <Typography variant="h6" className="value">0.87</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Statistics;