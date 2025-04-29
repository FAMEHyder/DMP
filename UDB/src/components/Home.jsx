import React from 'react';
import {
    Box,
    Grid,
    useTheme,
    useMediaQuery,
    Button,
    Typography
} from '@mui/material';
import FirstImage from '../image/fb.png';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 300000, easing: (t) => t };

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [sliderRefs, instanceRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            setInterval(() => {
                s.next();
            }, 2000); // Adjust time (ms) between slides
        },
    });


    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        }

    });

    const slideStyles = {
        height: 60,
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
        margin: '0!important',
        padding: '0!important',
        textTransform: 'uppercase'
    };

    return (
        <Grid container>
            {/* Main hero section */}
            <Grid
                container
                sx={{
                    background: 'linear-gradient(to bottom right, rgb(8, 39, 33),rgb(8, 39, 33),rgb(4, 75, 63), rgb(30, 147, 46))',
                    px: { xs: 2, md: 4 },
                    py: { xs: 4, md: 6 },
                    height: 800
                }}
            >
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

                        <Box mt={2}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 2
                            }}
                        >
                            <Button variant='contained' color='primary'>
                                30 Days Free Trial
                            </Button>
                            <Button variant='outlined' sx={{ borderColor: 'white', color: 'white' }}>
                                See the Products
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        component='img'
                        src={FirstImage}
                        sx={{
                            height: { xs: 250, sm: 350, md: 450 },
                            width: { xs: '100%', sm: 500, md: 700 },
                            ml: isMobile ? 0 : 12,
                            mt: { xs: 4, md: 20 },
                            borderRadius: '10px',
                            alignSelf: 'center',
                        }}
                    />
                </Grid>
                {/* Keen Slider Section */}
                <Grid container justifyContent="center" sx={{ my: 6 }}>
                    <Box
                        ref={sliderRef}
                        className="keen-slider"

                    >
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Facebook
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            instagram
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            x (tweeter)
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            ticktock
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            telegram
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Youtube
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Linked In
                        </Box>
                        <Box
                            className="keen-slider__slide"
                            sx={{
                                ...slideStyles,
                                width: 'auto',
                                minWidth: '400px !important',
                                maxWidth: '100% !important',
                                padding: 0,
                                margin: 0,
                                flexShrink: 1,
                                display: 'inline-flex', // or 'flex' based on layout
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            GitHub
                        </Box>

                    </Box>
                </Grid>
            </Grid>
            <Grid >
                <Typography fontSize={50} fontWeight={600}>Diving bussines impact should be easier</Typography>
                <Box fontSize={32}>Sat-Tara’s unified social media management platform enables your team to extract real business
                    value, strengthen your market position and drive revenue—quickly.
                </Box>
                <Box display={'flex'} gap={5} justifyContent={'space-around'}>
                    <Box
                        sx={{
                            height: 300,
                            width: 350,
                            borderRadius: 5,
                            bgcolor: 'green',
                            alignContent: 'center',
                            fontSize: 20
                        }}
                    >
                        <Typography>
                            <strong>See value faster</strong>
                            <br />
                            Get the insights your team has been waiting for—now. You won’t spend months
                            onboarding, wondering how much of your budget went to learning how to use 
                            our platform.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: 300,
                            width: 350,
                            borderRadius: 5,
                            bgcolor: 'green',
                            alignContent: 'center',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            height: 300,
                            width: 350,
                            borderRadius: 5,
                            bgcolor: 'green',
                            alignContent: 'center',
                        }}
                    ></Box>
                </Box>
            </Grid>

        </Grid>
    );
};

export default Home;
