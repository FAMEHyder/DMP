import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import logo from '../image/orignal.jpg';
const About = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom right, rgb(8, 39, 33),rgb(8, 39, 33),rgb(8, 39, 33),rgb(4, 75, 63), rgb(30, 147, 46))',
                color: '#fff',
                p: 10,
            }}
        >
            {/* <Typography variant="h4" gutterBottom textAlign="center" sx={{fontWeight:800}}>
        About Our Software
      </Typography> */}
            <Box
                component={'img'}
                src={logo}
                height={200}
                width={200}
                justifyContent={'center'}
                border={'4px solid white'}
                borderRadius={'100px'}
                sx={{
                    ml:{xs:0, sm:25, md:55},
                    mb:5
                }}
            ></Box>

            <Grid container spacing={4}>
                {[...Array(9)].map((_, index) => {
                    const titles = [
                        'Software Overview',
                        'Security & Privacy',
                        'Payment Methods',
                        'Terms & Conditions',
                        'Customer Support',
                        'Data Management',
                        'User Interface',
                        'Integration Options',
                        'Updates & Maintenance'
                    ];

                    const descriptions = [
                        'Our software delivers seamless user experience with smart automation, helping teams work faster and better with minimal manual input.',
                        'We implement top-tier security protocols with encrypted data storage and GDPR-compliant policies to ensure your information stays safe.',
                        'Enjoy the flexibility of paying locally via JazzCash, Easypaisa or internationally using Stripe, PayPal, and bank transfers.',
                        'All users must comply with our platform’s fair use and anti-abuse policies. Continued access depends on respectful, compliant usage.',
                        'Round-the-clock customer support ensures your queries are resolved quickly and efficiently.',
                        'We handle your data with integrity and allow seamless export, import, and backups.',
                        'Our clean, responsive UI is designed for productivity and ease of use across all devices.',
                        'Easily connect with your favorite tools and APIs for a unified workflow experience.',
                        'We provide regular updates and maintenance to keep the platform fast, secure, and reliable.'
                    ];

                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                elevation={4}
                                sx={{
                                    width: '200px',
                                    height: '200px',
                                    aspectRatio: '1',
                                    p: 3,
                                    backgroundColor: index % 2 === 0 ? '#ffffff22' : '#2c3e50',
                                    border: index % 2 === 0 ? 'none' : '1px dashed #fff',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Typography variant="h6" sx={{ fontFamily: 'calibri', fontSize: 20, fontWeight: 800 }} gutterBottom>
                                    {titles[index]}
                                </Typography>
                                <Typography>
                                    {descriptions[index]}
                                </Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default About;