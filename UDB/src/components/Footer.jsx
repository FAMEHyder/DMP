import { Box, Typography, Grid, Link } from '@mui/material';
import { Facebook, WhatsApp, Instagram} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../authContext/auth.jsx';
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
    <Box sx={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>About Us</Typography>
          <Typography variant="body2">
            SAT-TARA DIGITAL MARKETING SERVER
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
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">Phone: +92-3417405991 & +92 3554526991</Typography>
          <Typography variant="body2">Email: famehyder9999@gmail.com</Typography>
          <Typography variant="body2">Address: Roundu Skardu, Gilgit-Baltistan</Typography>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
            <Link href="facebook profile link will go here" target="_blank" color="inherit" underline="none">
              <Facebook />
            </Link>
          
            <Link href="whatsup link will go here" target="_blank" color="inherit" underline="none">
              <WhatsApp />
            </Link>
            <Link href="instagram link will go here" target="_blank" color="inherit" underline="none">
              <Instagram />
            </Link>
          </Box>
        </Grid>
      </Grid>
      
      <Box mt={4}>
        <Typography variant="body2" align="center">
          © 2024 SAT-TARA DIGITAL MARKETING SERVER. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;