import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import { Banknote, TrendingUp } from 'lucide-react';
import './SuggestedAccountForm.scss';
import { useNavigate } from 'react-router-dom';

const SuggestedAccountForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    amount: '',
    email: ''
  });
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const suggestAccount = () => {
    const amount = parseFloat(formData.amount);
    let suggestion = '';

    if (amount < 1000) {
      suggestion = '$5,000 Account';
    } else if (amount < 5000) {
      suggestion = '$10,000 Account';
    } else if (amount < 10000) {
      suggestion = '$25,000 Account';
    } else {
      suggestion = '$50,000+ Account';
    }

    setSuggestion(
      `Hello ${formData.name}. Suggested Account Size: ${suggestion}`
    );
  };

  const isFormValid = formData.name && formData.age && formData.amount;

  return (
    <Card className="suggested-account-form" elevation={6}>
      <CardContent>
        <Box className="form-header">
          <Banknote className="form-icon" />
          <Typography variant="h5" component="h2" className="form-title">
            Get Suggested Account Size
          </Typography>
        </Box>

        <Box className="form-fields">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="form-field"
            size="small"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="form-field"
            size="small"
          />

          <TextField
            fullWidth
            label="Age"
            type="number"
            variant="outlined"
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="form-field"
            size="small"
          />

          <TextField
            fullWidth
            label="How much money do you need (USD)"
            type="number"
            variant="outlined"
            value={formData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="form-field"
            size="small"
          />
          <Box className='button-group'>
            <Button
              fullWidth
              variant="contained"
              onClick={suggestAccount}
              disabled={!isFormValid}
              className="suggest-btn"
            >
              Suggest Account Size
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate('/checkout')}
              disabled={!isFormValid}
              className="suggest-btn"
            >
              Checkout
            </Button>
          </Box>
        </Box>

        {suggestion && (
          <Alert severity="success" className="suggestion-result">
            <Typography variant="body1">
              {suggestion}
            </Typography>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedAccountForm;
