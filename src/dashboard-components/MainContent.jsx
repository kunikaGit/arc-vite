import React from 'react';
import { Grid } from '@mui/material';
import CurrentResults from './CurrentResults';
import FTMOChallenge from './FTMOChallenge';
import ConsistencyScore from './ConsistencyScore';
import Objectives from './Objectives';
import Statistics from './Statistics';
import DailySummary from './DailySummary';
import TradingJournal from './TradingJournal';
import AnalyticsCharts from './AnalyticsCharts';
import DisclaimerFooter from './DisclaimerFooter';
import './MainContent.scss';
import CurrentResultsTable from './CurrentResultTable';

function MainContent() {
  return (
    <div className="main-content">
      <Grid container  spacing={3}>
        <Grid size={{md:8 ,xs:12}}>
          <CurrentResults />
        </Grid>
        <Grid size={{md:4 ,xs:12}}>
          <FTMOChallenge />
        </Grid>
         <Grid size={{xs:12}}>
          <CurrentResultsTable/>
        </Grid>
        <Grid size={{xs:12}}>
          <ConsistencyScore />
        </Grid>
        <Grid size={{xs:12}}>
          <Objectives />
        </Grid>
        <Grid size={{md:6,xs:12}}>
          <Statistics />
        </Grid>
        <Grid size={{md:6,xs:12}}>
          <DailySummary />
        </Grid>
        <Grid size={{xs:12}}>
          <TradingJournal />
        </Grid>
        <Grid size={{xs:12}}>
          <AnalyticsCharts />
        </Grid>
        <Grid size={{xs:12}}>
          <DisclaimerFooter />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;