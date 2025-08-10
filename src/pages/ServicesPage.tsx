import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import { servicesDescription } from "../txt/serviceText";
import AppColors from "../assets/colors";

export default function ServicesPage() {
  return (
    <>
      <Box sx={{ backgroundColor: AppColors.backgroundSecondary, minHeight: '100vh' }}>
        <Container maxWidth="md" sx={{ padding: 2 }} disableGutters={true}>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Box sx={{ my: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Services Page
                </Typography>
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