import { Routes, Route, HashRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';

const siteRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default siteRoutes;