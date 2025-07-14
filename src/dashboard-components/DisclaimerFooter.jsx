import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './DisclaimerFooter.scss';

function DisclaimerFooter() {
  return (
    <Box className="disclaimer-footer ">
      <Box className="disclaimer-banner">
        <Typography variant="body2" className="disclaimer-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, unde explicabo perferendis ad reprehenderit quod rem nesciunt asperiores ipsa quae labore vel mollitia commodi tempora facere sapiente quo accusamus odit!
        </Typography>
      </Box>
      
      <Box className="footer-links">
        <Link href="#" className="footer-link">Privacy policy</Link>
        <Link href="#" className="footer-link">Terms & Conditions</Link>
      </Box>
      
      <Box className="footer-info">
        <Typography variant="body2" className="info-text">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, provident! Recusandae temporibus qui vero ipsam? In, assumenda labore voluptatibus consectetur totam, voluptas eaque eveniet exercitationem, eum magnam neque molestiae nobis tempore! Aspernatur, velit eveniet inventore labore consectetur recusandae quas? Reiciendis perspiciatis, libero maiores at amet aliquid animi ullam tempore iusto.
        </Typography>
        
        <Typography variant="body2" className="copyright-text">
          2025 © Copyright - ARC
        </Typography>

      </Box>
    </Box>
  );
};

export default DisclaimerFooter;