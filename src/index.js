import React from 'react';
import './index.css';
import { render } from "react-dom";
import './index.css';
import App from './App';
import Listado from './components/Listado';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import ResponsiveAppBar from './components/Header';
import { Container } from '@mui/material';
import SearchResults from './components/SearchResults';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <ResponsiveAppBar />
  <Container>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listado" element={<Listado />} />
      <Route path="/detalle/:movieId" element={<Detalle />} />
      <Route path="/search/:search" element={<SearchResults />} />
    </Routes>
    </Container>
    <Footer />
  </BrowserRouter>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
