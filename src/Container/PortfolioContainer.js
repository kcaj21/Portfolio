import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from '../Components/Profile';
import NavBar from '../Components/NavBar';


const PortfolioContainer = () => {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
    <Route path="/Portfolio" element={<Profile />} />
    </Routes>
    </Router>
    </>
  );
}

export default PortfolioContainer