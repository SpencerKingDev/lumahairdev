import React from "react";
import { Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }} >
        <Box sx={{ my: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              About Us Page
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}