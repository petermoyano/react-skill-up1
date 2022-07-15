import SignIn from './components/SignIn';
import Register from './components/Register';
import './App.css';
import React from 'react';
import './index.css';


import Listado from './components/Listado';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import ResponsiveAppBar from './components/Header';
import { Container, createTheme, Paper } from '@mui/material'
import SearchResults from './components/SearchResults';
import { FavsContext } from "./FavsContext"
import { ThemeProvider } from '@emotion/react';


function App() {
  const favsInLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
  const [Favs, setFavs] = React.useState(favsInLocalStorage)
  const [themeMode, SetThemeMode] = React.useState("light")
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#823200'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App">
        <FavsContext.Provider value={{ Favs, setFavs }}>
          <ResponsiveAppBar themeMode={themeMode} SetThemeMode={SetThemeMode} />
          <Container>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/movies" element={<Listado />} />
              <Route path="/detalle/:movieId" element={<Detalle />} />
              <Route path="/search/:search" element={<SearchResults />} />
            </Routes>
          </Container>
          <Footer />
        </FavsContext.Provider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
