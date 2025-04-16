import { Box, Typography, Grid, Link } from '@mui/material';
import { Facebook, WhatsApp, Instagram} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../authContext/auth';
const Footer = () => {
  const navigate = useNavigate();
  const {user} = useAuthStore();

  const handleclick= (path)=> {
    if (!user) {
      alert('Sign in required! Click Ok to sign in');
      navigate('/signin');
      return;
    }
    navigate(path); 
   
      
  }
  return (
    <Box sx={{ backgroundColor: 'darkblue', color: 'white', padding: '20px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>About Us</Typography>
          <Typography variant="body2">
            Iqra Youth Educational Foundation is dedicated to providing quality
            education in the Roundu region. Our mission is to nurture young minds 
            through innovative teaching practices and create a brighter future 
            for our community.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Typography variant="body2">
            <Link href="/" color="inherit" underline="hover">Home</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
          </Typography>
          <Typography variant="body2">
            <Link  color="inherit" underline="hover" onClick={()=>handleclick('/pre_board')}> Register for Pre-Board Exams</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/members" color="inherit" underline="hover">Meet our Members</Link>
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">Phone: +92-344 5254658 & +92 346 4640837</Typography>
          <Typography variant="body2">Email: iyefofficial@gmail.com</Typography>
          <Typography variant="body2">Address: Roundu Skardu, Gilgit-Baltistan</Typography>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
            <Link href="https://www.facebook.com/profile.php?id=100083205736945" target="_blank" color="inherit" underline="none">
              <Facebook />
            </Link>
          
            <Link href="https://chat.whatsapp.com/Ee1j1Utvi3n2JQA24KrajX" target="_blank" color="inherit" underline="none">
              <WhatsApp />
            </Link>
            <Link href="https://www.instagram.com/iyef14?igsh=YWh3cTc4YnlnamJ6" target="_blank" color="inherit" underline="none">
              <Instagram />
            </Link>
          </Box>
        </Grid>
      </Grid>
      
      <Box mt={4}>
        <Typography variant="body2" align="center">
          © 2024 Iqra Youth Educational Foundation. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;