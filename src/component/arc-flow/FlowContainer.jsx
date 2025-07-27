import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FlowStep from './FlowStep';
import SuggestedAccountForm from './SuggestedAccountForm';
import './FlowContainer.scss';
import { ShadeImage } from '../common/iconImage';
import Header2 from '../home2/header2';

const FlowContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef([]);
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

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepContent = (data = flowData) => {
    const steps = [
      { title: 'Welcome to ARC', description: 'Start your journey \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' },
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
        { title: 'Play & Pass Mini Games', description: 'Complete mini challenges\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' },
        { title: 'Get Discount Code', description: 'Receive your reward \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' },
        { title: 'Buy Funded Account', description: 'Use discount to purchase \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' }
      );
    } else if (data.wantsMiniGames === false) {
      steps.push({ title: 'Buy Funded Account Directly', description: 'Full price access \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' });
    }

    // Always continue from this point regardless of the choice
    steps.push(
      { title: 'Pass Phase 1?', description: 'Did you pass evaluation? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' },
      { title: 'Competition Phase', description: 'Join challenge round \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' },
      {
        title: 'Skip Phase 2?',
        description: 'Choose to skip or complete Phase 2 \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.',
        hasChoice: true,
        choices: ['YES', 'NO'],
      }
    );

    if (data.skipPhase2 === true) {
      steps.push({ title: 'Funded Phase', description: 'You\'re funded!' });
    } else if (data.skipPhase2 === false) {
      steps.push(
        { title: 'Do Phase 2 → Pass', description: 'Complete Phase 2 to procee d' },
        { title: 'Funded Phase', description: 'You\'re funded!' }
      );
    }

    steps.push({ title: 'Profits & Withdrawal', description: 'Start earning and withdrawing \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.' });

    return steps;
  };

  const steps = getStepContent();
  const currentStepData = steps[currentStep];

  useEffect(() => {
    const el = stepRefs.current[currentStep];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  return (
    <>
      <Header2 />
      <Box className="flow-container">
        <picture className="pointer-events-none absolute top-0 left-0 roated-90 -z-10"  >
          <ShadeImage />
        </picture>
        <picture className="pointer-events-none absolute top-0 right-0 -z-10" >
          <ShadeImage />
        </picture>
        <Typography variant="h3" component="h1" className="main-title">
          Build Your ARC
        </Typography>

        <div className='two-flex'>
          {flowData.showForm   && (
            <div  className={`section-one ${flowData.showForm ? 'show' : ''}`}>
              <div className="form-section">
                <SuggestedAccountForm />
              </div>
            </div>
          )} 

          <div className={`content-wrapper `}>
            <div className="flow-steps">
              <div className="step-details-box">
                <div className="step-details-content">
                  <div className="step-number">
                    Step {currentStep + 1}
                  </div>
                  <div className="step-info">
                    <h3 className="step-detail-title">{currentStepData?.title}</h3>
                    <p className="step-detail-description">{currentStepData?.description}</p>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="step-details-arrow"></div>
              </div>
              {steps.map((step, index) => (
                <FlowStep
                  key={index}
                  step={step}
                  stepIndex={index}
                  isActive={index === currentStep}
                  isCompleted={index < currentStep}
                  onClick={handleStepClick}
                  onBack={handlePrevStep}
                  ref={(el) => (stepRefs.current[index] = el)}
                  currentStepData={currentStepData}
                />
              ))}
            </div>


          </div>
        </div>
      </Box>
    </>
  );
};

export default FlowContainer;