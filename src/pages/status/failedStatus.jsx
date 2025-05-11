import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStatusUtils from './statusUtils';

const FailedStatus = () => {
  const { updateStatusApi } = useStatusUtils();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await updateStatusApi(3);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='status-wrapped'>
      <div className='upper-body'>
        <div className='form-box'>
          <h2 className='main-heading failed'>Payment Failed</h2>
          <div className='text-center text-5xl py-10'>
            ❌
          </div>
          <p className='success-message'>
             Oops! Your payment has failed.
          </p>
          <p className='info'>
            Please try again or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FailedStatus;
