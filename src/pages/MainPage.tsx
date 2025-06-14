import React from 'react';
import '../App.css';
import { Box, Button, Typography, Container } from '@mui/material';
import logo from '../assets/Logo.png'
import AppColors from '../assets/colors';

function MainPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }} >
      <Box sx={{ my: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="Luma Hair Studio Logo"
            sx={{
              width: '100%',
              maxWidth: '450px',
              '@media (max-width: 768px)': {
                width: '375px',
              },
              '@media (max-width: 500px)': {
                width: '300px',
              },
            }}
          />
          <Container sx={{ p: 3 }} maxWidth='sm'>
            <Typography variant='h3' sx={{ fontSize: '1rem', color: 'warning.main', mt: 2, mb: 1 }}>
              Website Under Construction
            </Typography>
            <Typography variant='h1' sx={{ fontSize: '2.5rem', color: 'primary.main', mt: 1, mb: 2 }}>
              A Single Chair Studio Where Hair Meets Intention
            </Typography>
            <Typography variant='body1' sx={{ color: 'primary.main', mb: 2 }}>
              Luma is a modern, single-chair hair studio created for those who value a more personal, elevated salon experience.
              It’s a space designed for you to relax, feel like yourself, and leave feeling beautiful—without the noise or rush of a busy salon.
              With one-on-one attention in a warm, welcoming environment, every visit is all about you.
            </Typography>
            <Typography variant='body1' sx={{ color: 'primary.main', mb: 2 }}>
              Specializing in custom color and dimensional balayage blondes, Luma blends creativity with care, using clean, consciously selected
              products that support both your hair’s health and your overall well-being.
              As a chemically conscious studio, every effort is made to eliminate unnecessary ingredients and focus on what your hair truly needs.
            </Typography>
            <Typography variant='body1' sx={{ color: 'primary.main', mb: 2 }}>
              Whether you’re looking for a soft refresh or a full transformation, every service is thoughtfully tailored to enhance your natural beauty.
            </Typography>
            <Typography variant='body1' sx={{ color: 'primary.main', mb: 2 }}>
              Because at Luma, beauty should feel good—honest, effortless, and uniquely yours.
            </Typography>
          </Container>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant='contained'
            href='https://www.vagaro.com/lumahairstudio/services'
            target='_blank'
            sx={{
              backgroundColor: AppColors.buttonPrimary,
              mt: 2,
              mb: 2,
            }}
            size='large'
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;