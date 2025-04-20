// import React, { useEffect, useState } from 'react';
// import {
//   Box, Button, Typography, CircularProgress, useMediaQuery, useTheme
// } from '@mui/material';

// const FacebookTokenFetcher = () => {
//   const [loading, setLoading] = useState(false);
//   const [pageToken, setPageToken] = useState('');
//   const [error, setError] = useState('');
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   useEffect(() => {
//     // Initialize FB SDK
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         appId: 'YOUR_APP_ID',
//         cookie: true,
//         xfbml: true,
//         version: 'v19.0',
//       });
//     };
//   }, []);

//   const handleLogin = () => {
//     setLoading(true);
//     setError('');

//     window.FB.login(response => {
//       if (response.authResponse) {
//         const userToken = response.authResponse.accessToken;

//         // Get list of pages
//         window.FB.api('/me/accounts', { access_token: userToken }, function (res) {
//           if (res && !res.error && res.data.length > 0) {
//             const page = res.data[0]; // Just grab the first page
//             setPageToken(page.access_token);
//           } else {
//             setError('Unable to fetch pages or no pages found.');
//           }
//           setLoading(false);
//         });

//       } else {
//         setError('User cancelled login or did not fully authorize.');
//         setLoading(false);
//       }
//     }, { scope: 'pages_show_list,pages_read_engagement' });
//   };

//   return (
//     <Box
//       sx={{
//         p: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 2,
//         width: isMobile ? '100%' : '50%',
//         margin: 'auto'
//       }}
//     >
//       <Typography variant="h5" fontWeight={600}>
//         Fetch Facebook Page Token
//       </Typography>

//       <Button variant="contained" onClick={handleLogin} disabled={loading}>
//         {loading ? <CircularProgress size={24} color="inherit" /> : 'Connect Facebook'}
//       </Button>

//       {pageToken && (
//         <Box sx={{ mt: 2 }}>
//           <Typography variant="body1" color="success.main">
//             Page Token:
//           </Typography>
//           <Typography sx={{ wordBreak: 'break-all' }}>{pageToken}</Typography>
//         </Box>
//       )}

//       {error && (
//         <Typography color="error" mt={2}>
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default FacebookTokenFetcher;
