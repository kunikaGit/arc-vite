import React from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './CurrentResultTable.scss';
import { Info } from 'lucide-react';

function CurrentResultsTable() {
  return (
    <Paper className="current-results main-paper">
      <Typography variant="h6" className="title">
        Current Results
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="header-cell">
                <Box className="header-content">
                  <Typography variant="body2">Today's permitted loss</Typography>
                  <Info className="info-icon" />
                </Box>
              </TableCell>
              <TableCell className="header-cell">
                <Box className="header-content">
                  <Typography variant="body2">Max permitted loss</Typography>
                  <Info className="info-icon" />
                </Box>
              </TableCell>
              <TableCell className="header-cell">
                <Box className="header-content">
                  <Typography variant="body2">Today's profit</Typography>
                  <Info className="info-icon" />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="data-cell">
                <Typography variant="h6" className="amount">$859.80</Typography>
              </TableCell>
              <TableCell className="data-cell">
                <Typography variant="h6" className="amount">$2,935.35</Typography>
              </TableCell>
              <TableCell className="data-cell">
                <Typography variant="h6" className="amount negative">-$1,640.20</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CurrentResultsTable;