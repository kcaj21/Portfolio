import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from '../Components/Profile';
import Header from '../Components/Header';
import Projects from '../Components/Projects';

const PortfolioContainer = () => {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    <Route path="/Portfolio" element={<Profile />} />
    <Route path="/Projects" element={<Projects />} />
    </Routes>
    </Router>
    </>
  );
}

export default PortfolioContainer