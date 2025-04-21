import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
  Skeleton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../image/orignal.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu

  const handleClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setDrawerOpen(false);
      setLoading(false);
    }, 500); // simulate delay
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Open dropdown
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close dropdown
  };

  const navItems = [
    { label: 'SIGN UP', path: '/signup' },
    { label: 'SIGN IN', path: '/signin' },
    { label: 'CONTACT US', path: '/contact' },
    { label: 'ABOUT US', path: '/about' }
  ];

  const platformItems = [
    { label: 'Facebook', path: '/facebook' },
    { label: 'Twitter', path: '/twitter' },
    { label: 'Instagram', path: '/instagram' }
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
      <Box sx={{ fontSize: '24px', color: 'black', fontFamily: 'poppins,sans-serif', fontWeight: 900, textAlign: 'center', py: 1 }}>
        WELCOME TO THE SAT-TARA DIGITAL MARKETING SERVER
      </Box>
      <Toolbar sx={{ height: '70px', bgcolor: 'green' }}>
        <Box display='flex' alignItems='center' flexGrow={1}>
          {loading ? (
            <Skeleton variant="circular" width={65} height={65} />
          ) : (
            <Box
              component='img'
              src={logo}
              onClick={() => handleClick('/')}
              sx={{
                height: '65px',
                width: '65px',
                borderRadius: '90px',
                border: '2px solid white',
                cursor: 'pointer',
                
              }}
            />
          )} <Typography onClick={() => handleClick('/')} sx={{fontFamily:'poppins,sans-serif', color:'white', fontWeight:800,fontSize:25, cursor:'pointer', ml:1}}>SAT-TARA</Typography>
        </Box> 

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 250 }}>
                <List>
                  {navItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => handleClick(item.path)}>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                  <ListItem button onClick={handleMenuClick}>
                    <ListItemText primary="PLATEFORMS" />
                    <ArrowDropDownIcon />
                  </ListItem>
                </List>
              </Box>
            </Drawer>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {platformItems.map((item, index) => (
                <MenuItem key={index} onClick={() => handleClick(item.path)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box display='flex' justifyContent='end' flexGrow={1}>
            {loading
              ? navItems.map((_, i) => (
                  <Skeleton key={i} variant="text" width={90} height={40} sx={{ mx: 1 }} />
                ))
              : navItems.map((item, index) => (
                  <Button key={index} color='inherit' onClick={() => handleClick(item.path)}>
                    {item.label}
                  </Button>
                ))}
            <Button
              color='inherit'
              onClick={handleMenuClick}
              endIcon={<ArrowDropDownIcon />}
            >
              PLATEFORMS
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {platformItems.map((item, index) => (
                <MenuItem key={index} onClick={() => handleClick(item.path)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
