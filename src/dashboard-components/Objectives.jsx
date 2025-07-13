import React from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import {
  CheckCircle2 as CheckCircle, // Rounded check inside a circle
  XCircle as Cancel             // Cross inside a circle
} from 'lucide-react';
import './Objectives.scss';

const objectivesData = [
  {
    objective: 'Minimum 4 Trading Days',
    result: '4',
    summary: 'Passed',
    status: 'passed'
  },
  {
    objective: 'Max Daily Loss -$2,500',
    result: '-$2,010.49 (-4.02%)',
    summary: 'Passing',
    status: 'passing'
  },
  {
    objective: 'Max Loss -$5,000',
    result: '-$4,320.71 (-8.64%)',
    summary: 'Passing',
    status: 'passing'
  },
  {
    objective: 'Profit Target $5,000',
    result: '-$2,064.65 (-4.12%)',
    summary: 'Not passing',
    status: 'not-passing'
  }
];

function Objectives() {
  return (
    <div className="objectives ">
    <Paper className='object-card main-paper'>
      <Typography variant="h6" className="title">
        Objectives
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Trading Objectives</TableCell>
              <TableCell>Results</TableCell>
              <TableCell>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {objectivesData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="objective-cell">
                  <Typography variant="body2" className="objective-text">
                    {row.objective}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" className="result-text">
                    {row.result}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box className="summary-cell">
                    {row.status === 'passed' && <CheckCircle className="icon passed" />}
                    {row.status === 'passing' && <CheckCircle className="icon passing" />}
                    {row.status === 'not-passing' && <Cancel className="icon not-passing" />}
                    <Typography variant="body2" className={`summary-text ${row.status}`}>
                      {row.summary}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
      <Box className="button-group">
          <Button variant="outlined" size="medium" >
            Trading Journal
          </Button>
          <Button variant="outlined" size="medium">
            Mentor App
          </Button>
          <Button variant="outlined" size="medium">
            Economic Calender
          </Button>
          <Button variant="outlined" size="medium">
            Useful Link
          </Button>          
        </Box>
    </div>
  );
};

export default Objectives;