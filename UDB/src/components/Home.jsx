import React, { useState, useLocation } from 'react';
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
import Dec from '../image/Dec.png';
import MailIcon from '@mui/icons-material/Mail';
import PublishIcon from '@mui/icons-material/Publish';
import BarChartIcon from '@mui/icons-material/BarChart';
import HearingIcon from '@mui/icons-material/Hearing';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import pic from '../image/fb.png';



const animation = { duration: 354210, easing: (t) => t };

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [buttonItems, setButtonItems] = useState('');

    const handleButtonClick = () => {

    }
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
                <Grid container justifyContent="center" sx={{ my: 6, mt: { xs: 45, sm: 40, md: 10 } }}>
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

            {/* Three Boxes sections */}
            <Grid

                sx={{
                    height:{xs:'420vh',sm:'330vh',md:'130vh',lg:'130vh'},
                    background: 'linear-gradient(to top right, rgb(8, 39, 33),rgb(8, 39, 33),rgb(4, 75, 63), rgb(30, 147, 46))',
                }}
            >
                <Typography fontSize={50} fontWeight={600} color='white' pl={2} pr={2}>Diving bussines impact should be easier</Typography>
                <Box fontSize={32} color={'white'} pl={2} pr={2}>Sat-Tara’s unified social media management platform enables your team to extract real business
                    value, strengthen your market position and drive revenue—quickly.
                </Box>
                <Box container display={'flex'} gap={5} justifyContent={'space-around'} mt={2} mb={2} flexDirection={isMobile ? 'column' : 'row'}

                >
                    <Box

                        sx={{
                            height: 300,
                            width: { xs: 280, sm: 300, md: 350 },
                            borderRadius: 5,
                            backgroundColor: 'whitesmoke',
                            alignContent: 'center',
                            fontSize: 25,
                            pl: 2,
                            pr: 2
                        }}
                    >

                        <strong>See value faster</strong>
                        <br />
                        <br />
                        Get the insights your team has been waiting for—now. You won’t spend months
                        onboarding, wondering how much of your budget went to learning how to use
                        our platform.

                    </Box>
                    <Box
                        sx={{
                            height: 300,
                            width: { xs: 280, sm: 300, md: 350 },
                            borderRadius: 5,
                            backgroundColor: 'whitesmoke',
                            alignContent: 'center',
                            fontSize: 25,
                            pl: 2,
                            pr: 2
                        }}
                    >
                        <strong>Capture insights with ease</strong>
                        <br />
                        <br />
                        Accelerate business processes with AI-powered workflows designed to save marketers
                        valuable time, provide better access to your team to focus on more strategic thinking.
                    </Box>
                    <Box
                        sx={{
                            height: 300,
                            width: { xs: 280, sm: 300, md: 350 },
                            borderRadius: 5,
                            backgroundColor: 'whitesmoke',
                            alignContent: 'center',
                            fontSize: 25,
                            pl: 2,
                            pr: 2
                        }}
                    >
                        <strong>Transition seamlessly</strong>
                        <br />
                        <br />
                        Elevate your business without rebuilding your tech stack. Our global Salesforce partnership
                        and social network integrations make it easy to work within your current processes.
                    </Box>
                </Box>
                <Box
                    component={'img'}
                    src={Dec}

                    sx={{
                        mt: 5,
                        height: 200,
                        width:{xs:'55vh',sm:'140vh',md:'200vh'},
                        backgroundSize:'cover',
                        alignContent: 'center',
                        ml: 4,
                        borderRadius: 3
                    }}
                ></Box>
            </Grid>

            {/* here is the buttons Section  */}

            <Grid  width={'100%'} 
                sx={{
                    height:{xs:'200vh',sm:'210vh',md:'130vh'},
                    ml:{sm:4,md:8}
                }}
            >
                {/* This is the box that contain the button s */}
                <Box 
                
                flexDirection={isMobile ? 'column':"row"}
                sx={{
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    mb: 4,


                }}>
                    <Button color={'black'} startIcon={<MailIcon />} onClick={() => { handleButtonClick }}> Engagement </Button>
                    <Button color={'black'} startIcon={<PublishIcon />}> Publishing </Button>
                    <Button color={'black'} startIcon={<BarChartIcon />}> Analystics </Button>
                    <Button color={'black'} startIcon={<HearingIcon />}> listening </Button>
                    <Button color={'black'} startIcon={<CampaignIcon />}> Advocacy </Button>
                    <Button color={'black'} startIcon={<PeopleIcon />}> Influencer Marketing </Button>
                </Box>

                {/* this is the box that contain the paragraph and the image  */}
                <Box height={'70%'} width={"90%"} ml={4}
                display={'flex'}
                flexDirection={isMobile ? 'column' : 'row'}
                    sx={{
                        bgcolor: 'lightgreen',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        borderRadius: 5,

                    }}
                >
                    {/* this is the image box  */}
                    <Box
                        component={'img'}
                        src={pic}
                        sx={{
                            height: '90vh',
                            width: {xs:'50vh',sm:'50vh',md: '80vh'},
                            borderRadius: '5px'

                        }}
                    ></Box>


                    {/* this is the para box  */}
                    <Box 
                    sx={{
                        height:'90vh',
                        width:{xs:'50vh',sm:'100vh', md:'70vh'} ,
                        fontSize:{xs:12,sm:14,md:20},
                        
                    }}
                    >
                        <strong>Lorem ipsum dolor</strong>
                        <br />
                        <br />

                        sit amet consectetur adipisicing elit.
                        Soluta adipisci ullam illum, libero autem eligendi nostrum,
                        perferendis id commodi vero ab quam repellendus totam officia
                        labore, ut fuga earum? Consequatur aspernatur alias eos cum.
                        Vel ducimus asperiores repudiandae atque accusamus placeat quas
                        debitis. Facere officia ex quo sunt inventore aliquid nihil?
                        Aliquid rem pariatur hic reiciendis mollitia! Ad in quam optio,
                        totam rerum fugiat magnam vero repellendus quasi pariatur,
                        nostrum et id. Et odio architecto voluptas necessitatibus.
                        Cupiditate, in consequatur! Iste dolorum soluta pariatur alias,
                        quisquam quas aliquam quae quia minus! Porro veritatis, sint
                        alias voluptatum fuga architecto molestiae facere?
                    </Box>
                </Box>
            </Grid>

        </Grid>
    );
};

export default Home;
