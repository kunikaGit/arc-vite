import React, { useEffect } from 'react';
import './login.scss';
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
    <div className='login'>
      <div className='upper-body'>
        <div className='form-box'>
          <h2 className='main-heading'>Payment Status</h2>
          <p className='error-message'>
            ❌ Oops! Your payment has failed.
            <br />
            Please try again or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FailedStatus;
