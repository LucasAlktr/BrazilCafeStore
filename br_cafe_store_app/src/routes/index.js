import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';

const MySiteRoutes = ({ reservation }) => {
  console.log("reservation in Routes:", reservation);
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu reservation={reservation} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default MySiteRoutes;