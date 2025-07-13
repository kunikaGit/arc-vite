import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Expand as Fullscreen } from 'lucide-react';
import './AnalyticsCharts.scss';

const openTimeData = [
  { time: '8:00', value: -4500 },
  { time: '4:00', value: -4000 },
  { time: '9:00', value: 3000 },
  { time: '18:00', value: 2000 },
  { time: '5:00', value: -2000 },
  { time: '3:00', value: 2000 },
  { time: '10:00', value: 1000 },
  { time: '17:00', value: -1000 },
  { time: '7:00', value: 800 },
  { time: '1:00', value: 400 }
];

const buySellData = [
  { type: 'buy', value: -4500 },
  { type: 'sell', value: 2000 }
];

const volumeData = [
  { volume: '3.00', value: -2500 },
  { volume: '4.00', value: 800 },
  { volume: '1.00', value: -200 },
  { volume: '0.50', value: 100 },
  { volume: '0.30', value: 100 },
  { volume: '0.03', value: 50 }
];

const symbolData = [
  { symbol: 'XAUUSD', value: -2000 }
];

function safeData(data) {
  return data.filter(d => Number.isFinite(d.value));
}

function ChartBlock({ title, data, dataKeyX, domain, horizontal = false, showControls = false }) {
  const validData = safeData(data);

  if (validData.length === 0) {
    return (
      <Paper className="chart-paper  main-paper">
        <Box className="chart-header">
          <Typography variant="h6" className="chart-title">{title}</Typography>
        </Box>
        <Box className="chart-container">
          <Typography variant="body2" sx={{ p: 2 }}>No valid data</Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper className="chart-paper main-paper">
      <Box className="chart-header">
        <Typography variant="h6" className="chart-title">{title}</Typography>
        {showControls && (
          <Box className="chart-controls">
            <span>⊙</span>
            <span>⊙</span>
            <span>🔍</span>
            <span>👆</span>
            <span>🏠</span>
          </Box>
        )}
        {!showControls && title === "Open time hour" && <Fullscreen className="fullscreen-icon" />}
      </Box>
      <Box className={`chart-container ${title === "Symbol" ? "symbol-chart" : ""}`}>
        <ResponsiveContainer width="100%" height={300} debounce={50}>
          <BarChart data={validData} layout={horizontal ? "horizontal" : "vertical"}>
            {horizontal ? (
              <>
                <XAxis
                  type="number"
                  domain={domain}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#b0b0b0', fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey={dataKeyX}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#b0b0b0', fontSize: 12 }}
                  width={60}
                />
              </>
            ) : (
              <>
                <XAxis
                  dataKey={dataKeyX}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#b0b0b0', fontSize: 12 }}
                />
                <YAxis
                  domain={domain}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#b0b0b0', fontSize: 12 }}
                />
              </>
            )}
            <Bar
              dataKey="value"
              fill="#555"
              radius={horizontal ? [0, 2, 2, 0] : [2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

function AnalyticsCharts() {
  return (
    <Box className="analytics-charts">
      <Grid container spacing={3}>
        <Grid size={{md:6,xs:12}}>
          <ChartBlock
            title="Open time hour"
            data={openTimeData}
            dataKeyX="time"
            domain={[-6000, 4000]}
          />
        </Grid>
        <Grid size={{md:6,xs:12}}>
          <ChartBlock
            title="Buy/Sell"
            data={buySellData}
            dataKeyX="type"
            domain={[-6000, 4000]}
          />
        </Grid>
        <Grid size={{md:6,xs:12}}>
          <ChartBlock
            title="Volume"
            data={volumeData}
            dataKeyX="volume"
            domain={[-3200, 800]}
            showControls
          />
        </Grid>
        <Grid size={{md:6,xs:12}}>
          <ChartBlock
            title="Symbol"
            data={symbolData}
            dataKeyX="symbol"
            domain={[-2500, 0]}
            horizontal
            showControls
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AnalyticsCharts;
