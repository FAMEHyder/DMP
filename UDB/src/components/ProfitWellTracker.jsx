import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, CircularProgress } from '@mui/material';

const ProfitWellTracker = ({ publicApiToken, email, siteType = 'marketing' }) => {
  useEffect(() => {

    if (!publicApiToken) {
      console.warn('ProfitWell publicApiToken is required.');
      return;
    }

    // Queue profitwell calls unz
    window.profitwell = window.profitwell || function () {
      window.profitwell.q = window.profitwell.q || [];
      window.profitwell.q.push(arguments);
    };

    // Inject ProfitWell script
    const script = document.createElement('script');
    script.src = `https://public.profitwell.com/js/profitwell.js?auth=${publicApiToken}`;
    script.async = true;

    script.onload = () => {
      window.profitwell('auth_token', publicApiToken);

      // Start tracking
      if (email) {
        window.profitwell('start', { user_email: email });
      } else if (siteType === 'marketing') {
        window.profitwell('start');
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [publicApiToken, email, siteType]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="20vh"
      p={2}
    >
      <CircularProgress size={24} />
      <Typography variant="body2" mt={2} color="textSecondary">
        Initializing ProfitWell...
      </Typography>
    </Box>
  );
};

ProfitWellTracker.propTypes = {
  publicApiToken: PropTypes.string.isRequired,
  email: PropTypes.string,
  siteType: PropTypes.oneOf(['marketing', 'webapp', 'product']),
};

export default ProfitWellTracker;