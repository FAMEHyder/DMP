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
import Engagement from '../image/engagement.png';
import Publishing from '../image/publishing.png';
import Analytics from '../image/Analytics.png';
import Listening from '../image/Listening.png';
import Advocacy from '../image/Advocacy.png';
import Influencer_Marketing from '../image/Influencer_Marketing.png';
import { FaTiktok, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, } from 'react-icons/fa';



const animation = { duration: 354210, easing: (t) => t };

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [buttonItems, setButtonItems] = useState('Engagement');

    const contentMap = {
        Engagement: {
            text: 'Engagement is the heartbeat of successful social media strategy. It reflects how actively your audience interacts with your content — through likes, comments, shares, and messages. High engagement not only boosts your visibility in platform algorithms but also builds trust, loyalty, and a sense of community around your brand. Its not just about posting — its about starting conversations, responding authentically, and creating content that resonates. In the attention economy, engagement is currency.',
            image: Engagement,
            bgcolor: 'lightgreen'
        },
        Publishing: {
            text: 'Publishing is the foundation of your brand’s voice in the digital world. It involves strategically planning, creating, and distributing content across your social media channels to reach the right audience at the right time. Effective publishing goes beyond simply posting — it ensures consistency, aligns with your goals, and leverages scheduling, automation, and platform insights to maximize impact. Whether it’s a product update, a behind-the-scenes video, or a trending meme, smart publishing keeps your presence active, relevant, and connected.',
            image: Publishing,
            bgcolor: 'lightblue'
        },
        Analytics: {
            text: 'Analytics turns raw data into actionable insights. It helps you understand what’s working, what’s not, and where to pivot. From reach and impressions to click-through rates and audience demographics, analytics provides a clear picture of your performance across platforms. It empowers you to make informed decisions, refine your content strategy, and prove ROI. In short, analytics isnt just numbers — its the compass guiding your social media success.',
            image: Analytics,
            bgcolor: 'pink'
        },
        Listening: {
            text: 'Listening is about more than just hearing — it’s about understanding the conversations happening around your brand, industry, and competitors in real time. Social listening tracks mentions, keywords, hashtags, and sentiment to uncover what your audience truly thinks and feels. It helps you spot trends, address concerns before they escalate, and engage meaningfully with your community. In a world where reputation moves at the speed of a tweet, listening gives you the power to stay proactive, not reactive.    ',
            image: Listening,
            bgcolor: 'lightyellow'
        },
        Advocacy: {
            text: 'Advocacy harnesses the power of people to amplify your brand message. Whether it’s employees, loyal customers, or passionate fans, advocates help extend your reach through authentic, word-of-mouth promotion. Unlike paid ads, advocacy feels genuine — it builds trust, credibility, and community. Empowering advocates with shareable content, recognition, and incentives turns them into brand champions who speak louder than any marketing campaign ever could. In today’s trust-driven market, advocacy isn’t optional — it’s essential.',
            image: Advocacy,
            bgcolor: 'silver'
        },
        Influencer_Marketing: {
            text: 'Influencer Marketing is about leveraging trusted voices to tell your brand’s story. By partnering with individuals who already have the attention and trust of your target audience, you can cut through the noise and deliver messages that feel personal, not promotional. It’s not just about follower count — it’s about alignment, authenticity, and impact. The right influencer can spark engagement, build credibility, and drive real results, turning influence into action.',
            image: Influencer_Marketing,
            bgcolor: 'skyblue'
        },
    }
    const handleButtonClick = (label) => {
        setButtonItems(label);
    };
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
            s.moveToIdx(s.track.details.abs + 0, true, animation);
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
                    height: { xs: '420vh', sm: '330vh', md: '130vh', lg: '130vh' },
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
                            pr: 2,
                            ':hover': {
                                backgroundColor: 'theme.palette.primary.dark',
                                opacity: '.8',
                                transform: 'scale(.98)',
                                boxShadow: '2px 2px 2px 2px black',
                                backgroundColor: 'lightblue',
                                cursor: 'pointer',
                                zIndex: 10,
                                transition: 'all 0.3s ease'
                            }
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
                            pr: 2,
                            ':hover': {
                                backgroundColor: 'theme.palette.primary.dark',
                                opacity: '.8',
                                transform: 'scale(.98)',
                                boxShadow: '2px 2px 2px 2px black',
                                backgroundColor: 'lightblue',
                                cursor: 'pointer',
                                zIndex: 10,
                                transition: 'all 0.3s ease'
                            }
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
                            pr: 2,
                            ':hover': {
                                backgroundColor: 'theme.palette.primary.dark',
                                opacity: '.8',
                                transform: 'scale(.98)',
                                boxShadow: '2px 2px 2px 2px black',
                                backgroundColor: 'lightblue',
                                cursor: 'pointer',
                                zIndex: 10,
                                transition: 'all 0.3s ease'
                            }
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
                        width: { xs: '55vh', sm: '140vh', md: '200vh' },
                        backgroundSize: 'cover',
                        alignContent: 'center',
                        ml: 4,
                        borderRadius: 3,
                        ':hover': {
                            backgroundColor: 'theme.palette.primary.dark',
                            opacity: '.8',
                            transform: 'scale(.98)',
                            boxShadow: '2px 2px 2px 2px black',
                            backgroundColor: 'lightblue',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all 0.3s ease'
                        }
                    }}
                ></Box>
            </Grid>

            {/* here is the buttons Section  */}

            <Grid width={'100%'}
                sx={{
                    height: { xs: '200vh', sm: '210vh', md: '130vh' },
                    ml: { sm: 4, md: 8 }
                }}
            >
                {/* This is the box that contain the button s */}
                <Box

                    flexDirection={isMobile ? 'column' : "row"}
                    sx={{
                        mt: 5,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        mb: 4,


                    }}>
                    <Button
                        startIcon={<MailIcon />}
                        onClick={() => handleButtonClick('Engagement')}
                        sx={{
                            color: '#4caf50',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                color: '#4caf50',
                                transform: 'scale(.9)',
                                fontWeight: 800
                            }
                        }}
                    >
                        Engagement
                    </Button>

                    <Button
                        startIcon={<PublishIcon />}
                        onClick={() => handleButtonClick('Publishing')}
                        sx={{
                            color: '#2196f3',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                color: '#2196f3',
                                transform: 'scale(.9)',
                                fontWeight: 800
                            }
                        }}
                    >
                        Publishing
                    </Button>

                    <Button
                        startIcon={<BarChartIcon />}
                        onClick={() => handleButtonClick('Analytics')}
                        sx={{
                            color: '#9c27b0',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                color: '#9c27b0',
                                transform: 'scale(.9)',
                                fontWeight: 800
                            }
                        }}
                    >
                        Analytics
                    </Button>

                    <Button
                        startIcon={<HearingIcon />}
                        onClick={() => handleButtonClick('Listening')}
                        sx={{
                            color: '#ff9800',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                color: '#ff9800',
                                transform: 'scale(.9)',
                                fontWeight: 800
                            }
                        }}
                    >
                        Listening
                    </Button>

                    <Button
                        startIcon={<CampaignIcon />}
                        onClick={() => handleButtonClick('Advocacy')}
                        sx={{
                            color: '#f44336',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                color: '#f44336',
                                transform: 'scale(.9)',
                                fontWeight: 800
                            }
                        }}
                    >
                        Advocacy
                    </Button>

                    <Button
                        startIcon={<PeopleIcon />}
                        onClick={() => handleButtonClick('Influencer_Marketing')}
                        sx={{
                            color: '#3f51b5',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                color: '#3f51b5',
                                transform: 'scale(.9)',
                                fontWeight: 800
                            }
                        }}
                    >
                        Influencer Marketing
                    </Button>

                </Box>

                {/* this is the box that contain the paragraph and the image  */}
                <Box height={'70%'} width={"90%"} ml={4}
                    display={'flex'}
                    flexDirection={isMobile ? 'column' : 'row'}
                    bgcolor={contentMap[buttonItems]?.bgcolor}
                    sx={{

                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        borderRadius: 5,

                    }}
                >
                    {/* this is the image box  */}
                    {/* Image Box */}
                    <Box
                        component="img"
                        src={contentMap[buttonItems]?.image}
                        alt={buttonItems}
                        sx={{
                            height: '80vh',
                            width: { xs: '50vh', sm: '50vh', md: '80vh' },
                            borderRadius: '20px',
                            boxShadow: '2px 2px 2px 2px black'
                        }}
                    />

                    {/* Paragraph Box */}
                    <Box
                        sx={{
                            height: '90vh',
                            width: { xs: '50vh', sm: '100vh', md: '70vh' },
                            fontSize: { xs: 12, sm: 14, md: 25 },
                            textShadow: '.5px .5px black'
                        }}
                    >
                        <strong>{buttonItems}</strong>
                        <br />
                        <br />
                        {contentMap[buttonItems]?.text}
                    </Box>

                </Box>
            </Grid>

            <Grid
                sx={{
                    width: '100%',
                    display: 'flex'
                }}
            >
                <Box

                    sx={{
                        width: '50%',
                        height: '60vh',

                    }}

                >
                    <Typography fontFamily={'cambria'} fontSize={40} pl={4} pr={4}>Trusted partnerships & integrations across leading platforms    </Typography>
                    <Typography fontSize={25} pl={4} pr={4}> SDMS builds and maintains strong network partnerships and integrations to help you unify your customer touch points and keep pace with changes in the social landscape.</Typography>
                </Box>

                <Box
                    sx={{
                        width: '50%',
                        height: '60vh',
                        fontSize: '10vh',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}
                >
                    {[
                        { icon: <FaTiktok />, color: '#000000' },
                        { icon: <FaInstagram />, color: '#E1306C' },
                        { icon: <FaFacebook />, color: '#1877F2' },
                        { icon: <FaLinkedin />, color: '#0077B5' },
                        { icon: <FaYoutube />, color: '#FF0000' },
                        { icon: <FaTwitter />, color: '#000000' },
                    ].map((item, i) => (
                        <Button
                            key={i}
                            sx={{
                                bgcolor: item.color,
                                color: '#ffffff',
                                fontSize: '10vh',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: `10px 8px 20px ${item.color}80`, // 80 = ~50% opacity
                                '&:hover': {
                                    bgcolor: '#ffffff',
                                    color: item.color,
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            {item.icon}
                        </Button>
                    ))}
                </Box>

            </Grid>

        </Grid>
    );
};

export default Home;
