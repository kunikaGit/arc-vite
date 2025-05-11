import React, { useEffect } from 'react';
import './status.scss';
import { useNavigate,useLocation } from 'react-router-dom';
import useStatusUtils from './statusUtils';
import imageMap from '../../utlis/helper';

const SuccessStatus = () => {
  const { updateStatusApi } = useStatusUtils();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const timeout = setTimeout(async () => {
   let data= location.state?.txHash
      await updateStatusApi(1,data);
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
          <h2 className='main-heading'>Payment Status Success</h2>
          <div className='icon'>
            <img src='/img/success.gif' alt='success'/>
          </div>
          <p className='success-message'>
            🎉<strong> Congratulations! </strong> Your payment has been successful.
          </p>
          <p className='info'>An email will be sent to you shortly.</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStatus;

