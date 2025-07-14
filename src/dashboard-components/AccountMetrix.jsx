import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import {
  TrendingUp as TrendingUp,
  Key as Key,
  Contact2 as ContactSupport, // Closest match for "ContactSupport"
  RefreshCw as Refresh,
  Share2 as Share,
  BarChart2 as BarChart,
  X as Close,
  Pencil as Edit
} from 'lucide-react';

import './AccountMetrix.scss';

function AccountMetrix() {
  return (
    <Paper className="account-metrix">
      <Box className="header-section main-paper">
        <Typography variant="h6" className="title">
          <TrendingUp className="title-icon" />
          Account Metrix
        </Typography>
      </Box>
        <Box className="button-group">
          <Button variant="outlined" size="medium" startIcon={<Key />}>
            Credentials
          </Button>
          <Button variant="outlined" size="medium" startIcon={<ContactSupport />}>
            Contact us
          </Button>
          <Button variant="outlined" size="medium" startIcon={<Refresh />}>
            Refresh
          </Button>
          <Button variant="outlined" size="medium" startIcon={<Share />}>
            Share
          </Button>
          <Button variant="outlined" size="medium" startIcon={<BarChart />}>
            Live Metrix
          </Button>
          <Button variant="outlined" size="medium" startIcon={<Close />}>
            Close account
          </Button>
        <Button variant="outlined" size="small" startIcon={<Edit />}>
          Modify
        </Button>
        </Box>
    </Paper>
  );
};

export default AccountMetrix;