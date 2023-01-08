import React from 'react';
import {
  BrowserRouter,
  //createBrowserRouter,
  //createRoutesFromElements,
  Route,
  Routes,
  //RouterProvider,
} from "react-router-dom";
import PortfolioMain from './components/PortfolioMain';
import Foot from './components/Foot';
import Head from './components/Head';
import AboutMe from './routes/AboutMe';
import ContactMe from './routes/ContactMe';

function App() {
  return (<>
  <BrowserRouter>
    <Head />
    <Routes>
      <Route path='/' element={
        <PortfolioMain />
      } />
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/contactme' element={<ContactMe />} />
    </Routes>
    <Foot />
  </BrowserRouter>
  </>
  );
}

export default App;
