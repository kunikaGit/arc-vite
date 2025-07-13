import React from 'react';
import { Breadcrumbs, Typography, Box } from '@mui/material';
import { 
  Home as Home, 
  ChevronRight as NavigateNext 
} from 'lucide-react';
import './Header.scss';

function Header() {
  return (
    <Box className="header">
      <Breadcrumbs 
        separator={<NavigateNext fontSize="small" />} 
        aria-label="breadcrumb"
        className="breadcrumbs"
      >
        <Typography color="inherit" className="breadcrumb-item">
          <Home fontSize="small" /> Trader
        </Typography>
        <Typography color="inherit" className="breadcrumb-item">
          Accounts Overview
        </Typography>
        <Typography color="primary" className="breadcrumb-item">
          Account Metrix 7404591
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Header;