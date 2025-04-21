import React from 'react';
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import fb from '../image/fb.png';

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        // This is the main grid of the home page 
        <Grid container>
            {/* inner grid that has the title and description */}
            <Grid
                container
                sx={{
                    background: 'linear-gradient(to bottom right, rgb(8, 39, 33),rgb(8, 39, 33),rgb(4, 75, 63), rgb(30, 147, 46))',
                    px: { xs: 2, md: 4 },
                    py: { xs: 4, md: 6 },
                    height:550
                }}
            >
                {/* title grid */}
                <Grid
                    display="flex"
                    flexDirection={isMobile ? 'column' : 'row'}
                    paddingInline={2}
                    height={350}

                >
                    <Box>
                        <Box
                            sx={{
                                width: { xs: '100%', md: '400px' },
                                color: 'white',
                                fontWeight: 800,
                                fontSize: { xs: 24, sm: 32, md: 40 },
                                textShadow: '3px 3px black',
                                mb: 2
                            }}
                        >
                            A powerful tool that helps you manage and post on your social media plateforms
                        </Box>

                        <Box
                            sx={{
                                width: { xs: '100%', md: '400px' },
                                color: 'white',
                                fontSize: { xs: 14, md: 16 },
                                lineHeight: 1.6
                            }}
                        >
                            Hi, I’m SaT-Tara —We are building a Facebook automation tool that takes
                            the hassle out of social media management. Built with the MERN stack,
                            my system connects directly with Facebook’s API to schedule posts,
                            target specific regions, and manage pages—all backed by a MongoDB
                            database that keeps everything organized. <br /><br />
                            If you’re into marketing, automation, or just tired of repetitive tasks,
                            let’s connect. we’d love to hear how you manage your content—and maybe
                            show you how to level it up.
                        </Box>
                    </Box>

                    <Box
                        component='img'
                        src={fb}
                        sx={{
                            height: { xs: 250, sm: 350, md: 450 },
                            width: { xs: '100%', sm: 500, md: 700 },
                            ml: isMobile ? 0 : 12,
                            mt: isMobile ? 4 : 0,
                            borderRadius: '10px',
                            alignSelf: 'center',
                            mt: { xs: 2, sm: 2, md: 20 }
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;
