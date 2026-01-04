
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import SupportPage from './pages/SupportPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
