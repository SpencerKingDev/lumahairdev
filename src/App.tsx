import React from 'react';
import './App.css';
import { Box, Typography, Button } from '@mui/material';
import NavBar from './components/NavBar';
import logo from './assets/Logo.png';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }} >
      <NavBar />
      <Box sx={{ my: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="Luma Hair Studio Logo"
            sx={{
              width: '100%', // Default width
              maxWidth: '450px', // Limit maximum width
              '@media (max-width: 768px)': {
                width: '400px', // Adjust width for smaller screens
              },
              '@media (max-width: 500px)': {
                width: '300px', // Further adjust width for very small screens
              },
            }}
          />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant='h1'>
            This is the dev site page
          </Typography>
          <Button variant='contained'
            href='http://www.vagaro.com/lumahairstudio'
            target='_blank'
            sx={{
              backgroundColor: 'rgb(100, 137, 146)',
              mt: 2
            }}
            size='large'
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;