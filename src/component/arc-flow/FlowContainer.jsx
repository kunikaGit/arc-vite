import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import FlowStep from './FlowStep';
import SuggestedAccountForm from './SuggestedAccountForm';
import './FlowContainer.scss';
import Header2 from '../home2/header2';

const FlowContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [flowData, setFlowData] = useState({
    wantsMiniGames: null,
    skipPhase2: null,
    showForm: false,
  });

  const handleStepClick = (stepIndex, choice) => {
    const updatedData = { ...flowData };

    if (choice) {
      if (stepIndex === 2) {
        updatedData.wantsMiniGames = choice === 'YES';
      } else if (stepIndex === 6) {
        updatedData.skipPhase2 = choice === 'YES';
      }
      setFlowData(updatedData);
    }

    const steps = getStepContent(updatedData);

    if (stepIndex + 1 >= steps.length) {
      setFlowData(prev => ({ ...prev, showForm: true }));
    } else {
      setCurrentStep(stepIndex + 1);
    }
  };

  const getStepContent = (data = flowData) => {
    const steps = [
      { title: 'Welcome to ARC', description: 'Start your journey' },
      { title: 'Signup/Login', description: 'Create or log into your account' },
      {
        title: 'Do you want Mini Games?',
        description: 'Earn discounts by playing',
        hasChoice: true,
        choices: ['YES', 'NO'],
      },
    ];

    if (data.wantsMiniGames === true) {
      steps.push(
        { title: 'Play & Pass Mini Games', description: 'Complete mini challenges' },
        { title: 'Get Discount Code', description: 'Receive your reward' },
        { title: 'Buy Funded Account', description: 'Use discount to purchase' }
      );
    } else if (data.wantsMiniGames === false) {
      steps.push({ title: 'Buy Funded Account Directly', description: 'Full price access' });
    }

    // Always continue from this point regardless of the choice
    steps.push(
      { title: 'Pass Phase 1?', description: 'Did you pass evaluation?' },
      { title: 'Competition Phase', description: 'Join challenge round' },
      {
        title: 'Skip Phase 2?',
        description: 'Choose to skip or complete Phase 2',
        hasChoice: true,
        choices: ['YES', 'NO'],
      }
    );

    if (data.skipPhase2 === true) {
      steps.push({ title: 'Funded Phase', description: 'You’re funded!' });
    } else if (data.skipPhase2 === false) {
      steps.push(
        { title: 'Do Phase 2 → Pass', description: 'Complete Phase 2 to proceed' },
        { title: 'Funded Phase', description: 'You’re funded!' }
      );
    }

    steps.push({ title: 'Profits & Withdrawal', description: 'Start earning and withdrawing' });

    return steps;
  };

  const steps = getStepContent();

  return (
    <>
                    <Header2 />
    
    <Container maxWidth="xl" className="flow-container">
      <Typography variant="h3" component="h1" className="main-title">
        Build Your ARC
      </Typography>

      <div className={`content-wrapper ${flowData.showForm ? 'with-form' : ''}`}>
        <div className="flow-steps">
          {steps.map((step, index) => (
            <FlowStep
              key={index}
              step={step}
              stepIndex={index}
              isActive={index === currentStep}
              isCompleted={index < currentStep}
              onClick={handleStepClick}
            />
          ))}
        </div>

        {flowData.showForm && (
          <div className="form-section">
            <SuggestedAccountForm />
          </div>
         )} 
      </div>
    </Container>
    </>
  );
};

export default FlowContainer;
