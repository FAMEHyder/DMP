import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import logo from '../image/orignal.jpg';

// This is the functional component of the react 
const SignIn = () => {
    // logic of the code goes here 

    return (
        // style of the code goes here 
        <Container
            maxWidth="lg"
            sx={{
                padding: { xs: 2, sm: 3, md: 4, lg: 5 },
                bgcolor: 'white',
                mt: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 2, sm: 3, md: 4 },
                height: 'auto',
                width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
                boxShadow: '0 5px 8px 5px rgba(255, 105, 135,.3)',
                borderRadius: '9px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    height: '35vh',
                    width: '200px',
                    backgroundImage: `url(${logo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    border:'2px solid blue',
                    borderRadius:'105px',
                    

                }}
            ></Box>
            <Typography
                variant='h4'
                fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem' }}
                fontFamily={'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}
                color="blue"
                fontWeight={600}
                sx={{ mt: { xs: 1, sm: 2 }, textAlign: 'center' }}

            >
                Sign In
            </Typography>
        </Container>

    )
}
//  here we are exporting the code 
export default SignIn;