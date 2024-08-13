import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../assets/websie logo.png';

const StyledAppBar = styled(AppBar)({
  background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
  backdropFilter: 'blur(60px)', // Stronger blur effect
  boxShadow: 'none', // Remove box shadow
  position: 'fixed',
  width: '100%',
  height: '80px', // Keep navbar height the same
});

const Logo = styled('img')({
  height: '150px', // Adjusted logo height
  width: 'auto',
  marginRight: '50px', // Space between logo and nav items
  marginTop: '10px',
  '@media (max-width: 600px)': {
    height: '50px', // Adjust height for smaller screens
  },
});

const NavItemsContainer = styled('div')(({ isMobile }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: isMobile ? '1rem' : '2rem',
  flexWrap: 'nowrap',
  '@media (max-width: 600px)': {
    display: 'none', // Hide on mobile
  },
}));

const RightItemsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto', // Pushes the container to the far right
  '@media (max-width: 600px)': {
    display: 'none', // Hide on mobile
  },
});

const NavLink = styled(Typography)(({ theme }) => ({
  color: '#FCF5E5', // Grey text color
  textDecoration: 'none', // No underline
  fontSize: '16px', // Adjust font size to match Yuku's links
  fontWeight: 500, // Adjust font weight to match Yuku's links
  margin: '0 1.5rem',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#fcceff', // White text on hover
  },
  '@media (max-width: 600px)': {
    margin: '0', // Remove margin on mobile
  },
}));

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6" style={{ flexShrink: 0 }}>
          <Logo src={logo} alt="Logo" />
        </Typography>
        <NavItemsContainer isMobile={isMobile}>
          <NavLink variant="body1">About Us</NavLink>
          <NavLink variant="body1">NFT Marketplace</NavLink>
          <NavLink variant="body1">AI Avatar</NavLink>
          <NavLink variant="body1">3D Spaces</NavLink>
        </NavItemsContainer>
        <RightItemsContainer>
          <NavLink variant="body1" href="www.google.com"><a>Get Started</a></NavLink>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Get Started
</a>

      
        </RightItemsContainer>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ marginLeft: 'auto' }} // Ensure it is pushed to the right
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="NFT Marketplace" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="AI Avatar" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="3D Spaces" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Get started" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
