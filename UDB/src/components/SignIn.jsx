import React, { useState } from 'react';
import { Container, Box, Typography, TextField,Button } from '@mui/material';
import axios from 'axios';
import logo from '../image/orignal.jpg';
import {useNavigate} from 'react-router-dom';

// This is the functional component of the react 
export const SignIn = () => {
    // logic of the code goes here 
    const navigate = useNavigate();
    const [userName , setuserName ] = useState('');
    const [Email,setEmail] = useState('');
    const [password ,setPassword]=useState('')
    const [error, setError] = useState('');

    const handleLogin = ()=>{
        e.preventDefault();
        setError();

        const handleLogin = async (e) => {
            e.preventDefault();
            setError('');
        
            try {
              const response = await axios.post('http://localhost:8000/user/login', {
                userName,
                password,
              });
        
              if (response.status === 200) {
               
                login(response.data)
                navigate('/');
              }
            } catch (err) {
              setError(err.response?.data?.message || 'Login failed. Please try again.');
            }
          };
        }
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
                    border: '5px solid blue',
                    borderRadius: '105px',


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
            <form style={{ width: '100%' }} onSubmit={handleLogin}>
                {error && (
                    <Typography
                        variant='body2'
                        color='red'
                        sx={{ mt: 1, mb: 1, textAlign: 'center' }}
                    >
                        {error}
                    </Typography>
                )}

                <TextField
                    label='Email'
                    type='Email'
                    placeholder='abs@gmail.com'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField
                    label="Password"
                    type="password"
                    placeholder="********"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        padding: { xs: 1, sm: 1.5 },
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                    }}
                >
                    Login
                </Button>

            </form>
            <Button
                onClick={() => navigate('/signup')}
                sx={{
                    mt: 2,
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    color: 'blue',
                    textTransform: 'none',
                }}
            >
                Don't have an account? Sign up now
            </Button>

        </Container>

    )
};
//  here we are exporting the code 
export default SignIn;