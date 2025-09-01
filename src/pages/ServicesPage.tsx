import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import { servicesDescription } from "../txt/serviceText";
import AppColors from "../assets/colors";
import logo from '../assets/Logo.png'

export default function ServicesPage() {
  return (
    <>
      <Box sx={{ backgroundColor: AppColors.backgroundSecondary, minHeight: '100vh' }}>
        <Container maxWidth="md" sx={{ padding: 2 }} disableGutters={true}>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Box sx={{ my: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h1' sx={{ fontSize: '2rem', color: 'primary.main', mt: 1, mb: 2 }} gutterBottom>
                  All services at Luma are personalized with intention, using clean, consciously chosen products in a calming one-on-one setting
                </Typography>
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
                {servicesDescription.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    price={service.price}
                    description={service.description}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}