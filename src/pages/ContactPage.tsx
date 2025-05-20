import React from "react";
import { Typography, Box } from "@mui/material";

export default function ContactPage() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }} >
        <Box sx={{ my: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Contact Page
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}