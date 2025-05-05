import React, { useEffect } from 'react';
import './login.scss';
import { useNavigate,useLocation } from 'react-router-dom';
import useStatusUtils from './statusUtils';

const SuccessStatus = () => {
  const { updateStatusApi } = useStatusUtils();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const timeout = setTimeout(async () => {
   let data= location.state?.txHash
   console.log("????/")
      await updateStatusApi(1,data);
      // setTimeout(() => {
      //   navigate('/');
      // }, 2000);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='login'>
      <div className='upper-body'>
        <div className='form-box'>
          <h2 className='main-heading'>Payment Status</h2>
          <p className='success-message'>
            🎉 Congratulations! Your payment has been successful.
            <br />
            An email will be sent to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStatus;

