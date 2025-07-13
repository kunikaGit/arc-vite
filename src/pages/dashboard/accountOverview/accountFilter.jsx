import React, { useState } from 'react';
import { Autocomplete, TextField, Chip } from '@mui/material';
import {
  ChevronDown as KeyboardArrowDown,
  User as AccountCircle,
  ShieldCheck as VerifiedUser,
  Rocket as RocketLaunch,
} from 'lucide-react';
import './accountFilter.scss';

const CreativeFilters = () => {
  const [accType, setAccType] = useState(null);
  const [accStatus, setAccStatus] = useState(null);

  const accTypeOption = [
    { title: 'Personal', value: 'personal', icon: <AccountCircle size={18} />, color: '#6366f1' },
    { title: 'Business', value: 'business', icon: <VerifiedUser size={18} />, color: '#8b5cf6' },
    { title: 'Enterprise', value: 'enterprise', icon: <RocketLaunch size={18} />, color: '#06b6d4' },
  ];

  const accStatusOption = [
    { title: 'Active', value: 'active', color: '#10b981' },
    { title: 'Pending', value: 'pending', color: '#f59e0b' },
    { title: 'Suspended', value: 'suspended', color: '#ef4444' },
    { title: 'Premium', value: 'premium', color: '#8b5cf6' },
  ];

  const handleAccTypeChange = (_, newValue) => {
    setAccType(newValue);
  };

  const handleAccStatusChange = (_, newValue) => {
    setAccStatus(newValue);
  };

  return (
    <div className="filters dark-gradient">
        <div className='flex gap-10'>
      <div className="input-main-data select-mui-vs">
        <label className="filter-label">Account Type</label>
        <Autocomplete
          autoComplete={false}
          options={accTypeOption}
          getOptionLabel={(option) => option.title}
          value={accType}
          onChange={handleAccTypeChange}
          disableClearable
          popupIcon={<KeyboardArrowDown className="dropdown-icon" size={18} />}
          renderOption={(props, option) => (
            <li {...props} className="custom-option">
              <div className="option-content">
                <span className="option-icon" style={{ color: option.color }}>
                  {option.icon}
                </span>
                <span className="option-text">{option.title}</span>
              </div>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Account Type"
              className="creative-textfield"
              InputProps={{
                ...params.InputProps,
                startAdornment: accType?.icon && (
                  <span className="selected-icon" style={{ color: accType.color }}>
                    {accType.icon}
                  </span>
                ),
              }}
            />
          )}
        />
      </div>

      <div className="input-main-data select-mui-vs">
        <label className="filter-label">Account Status</label>
        <Autocomplete
          autoComplete={false}
          options={accStatusOption}
          getOptionLabel={(option) => option.title}
          value={accStatus}
          onChange={handleAccStatusChange}
          disableClearable
          popupIcon={<KeyboardArrowDown className="dropdown-icon" size={18} />}
          renderOption={(props, option) => (
            <li {...props} className="custom-option">
              <div className="option-content">
                <Chip
                  label={option.title}
                  size="small"
                  style={{
                    backgroundColor: option.color,
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
              </div>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Account Status"
              className="creative-textfield"
              InputProps={{
                ...params.InputProps,
                startAdornment: accStatus && (
                  <Chip
                    label={accStatus.title}
                    size="small"
                    className="selected-chip"
                    style={{
                      backgroundColor: accStatus.color,
                      color: 'white',
                      fontWeight: 500,
                      marginRight: '8px',
                    }}
                  />
                ),
              }}
            />
          )}
        />
      </div>
</div>
      <div className="action-wrapper">
        <button className="purple_bordered start-now-btn">
          <span className="btn-text">Start Now</span>
          <RocketLaunch className="btn-icon" size={18} />
          <div className="btn-glow"></div>
        </button>
      </div>
    </div>
  );
};

export default CreativeFilters;
