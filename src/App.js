import Login from './components/Login';
import './App.css';
import React from 'react';
import './index.css';


import Listado from './components/Listado';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import ResponsiveAppBar from './components/Header';
import { Container } from '@mui/material';
import SearchResults from './components/SearchResults';
import { FavsContext } from "./FavsContext"

function App() {
  const favsInLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
  const [Favs, setFavs] = React.useState(favsInLocalStorage)

  return (

    <div className="App">
      <FavsContext.Provider value={{Favs, setFavs}}>
        <ResponsiveAppBar />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/detalle/:movieId" element={<Detalle />} />
            <Route path="/search/:search" element={<SearchResults />} />
          </Routes>
        </Container>
        <Footer />
      </FavsContext.Provider>
    </div>

  );
}

export default App;
