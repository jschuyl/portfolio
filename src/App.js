import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import { PortfolioMain } from './views/PortfolioMain';
import Foot from './components/Foot';
import Head from './components/Head';
import AboutMe from './views/AboutMe';
import ContactMe from './views/ContactMe';

function App() {
  return (
  <div className='main-body'>
    <Head />
    <div className=''>
    <Routes>
      <Route path='/portfolio' element={<PortfolioMain />} />
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/contactme' element={<ContactMe />} />
    </Routes>
    </div>
    <Foot />
  </div>
  );
}

export default App;
