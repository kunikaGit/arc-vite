import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { ArrowDown, CheckCircle } from 'lucide-react';
import './FlowStep.scss';

const FlowStep = ({ step, stepIndex, isActive, isCompleted, onClick }) => {
  return (
    <div className="flow-step-container">
      <Card
        className={`flow-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
        elevation={isActive ? 8 : 2}
      >
        <CardContent>
          <Box className="step-header">
            {isCompleted && <CheckCircle className="check-icon" />}
            <Typography variant="h6" component="h3" className="step-title">
              {step.title}
            </Typography>
          </Box>

          <Typography variant="body2" className="step-description">
            {step.description}
          </Typography>

          {step.hasChoice && isActive ? (
            <Box className="choice-buttons">
              {step.choices?.map((choice) => (
                <Button
                  key={choice}
                  variant="contained"
                  className={`choice-btn ${choice.toLowerCase()}`}
                  onClick={() => onClick(stepIndex, choice)}
                >
                  {choice}
                </Button>
              ))}
            </Box>
          ) : !isCompleted && (
            <Button
              variant="contained"
              color="primary"
              className="next-btn"
              onClick={() => onClick(stepIndex)}
              disabled={!isActive}
            >
              {isActive ? 'Continue' : 'Next'}
            </Button>
          )}
        </CardContent>
      </Card>

      {stepIndex < 10 && (
        <ArrowDown className={`arrow ${isCompleted ? 'completed' : ''}`} />
      )}
    </div>
  );
};

export default FlowStep;
