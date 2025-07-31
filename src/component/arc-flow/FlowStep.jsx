import React, { forwardRef } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { ArrowDown, ArrowUp, CheckCircle } from 'lucide-react';
import './FlowStep.scss';

const FlowStep = forwardRef(({ step, stepIndex, isActive, isCompleted, onClick, onBack }, ref)  => {


  return (
    <div className="flow-step-container"  ref={ref}>
      
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
              {onBack && stepIndex > 0 && (
                <Button
                  variant="outlined"
                  color="secondary"
                  className="prev-btn"
                  onClick={onBack}
                >
                  Previous
                </Button>
              )}
            </Box>
          ) : !isCompleted && (
            <Box className="step-buttons">
              {isActive && stepIndex > 0 && (
                <Button
                  variant="outlined"
                  color="secondary"
                  className="prev-btn "
                  onClick={onBack}
                >
                  Previous
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                className="next-btn"
                onClick={() => onClick(stepIndex)}
                disabled={!isActive}
              >
                {isActive ? 'Continue' : 'Next'}
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>

      <div className="arrows">
        {stepIndex > 0 && <ArrowUp className="arrow up" onClick={onBack} />}
        {stepIndex < 10 && <ArrowDown className={`arrow down ${isCompleted ? 'completed' : ''}`} />}
      </div>
    </div>
  );
});

export default FlowStep;
