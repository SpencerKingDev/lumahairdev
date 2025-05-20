import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }} >
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}