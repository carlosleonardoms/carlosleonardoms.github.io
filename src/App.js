import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/Landing'
import About from './pages/About'
import PortfolioPage from './pages/Portfolio'

function App() {
  return (
    <Routes>
      <Route exact path="/myPortfolio" element={<LandingPage/>}/>
      <Route path="/Portfolio" element={<PortfolioPage/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
  );
}

export default App;
