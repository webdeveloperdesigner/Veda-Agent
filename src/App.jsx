import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import WhatsNew from './pages/WhatsNew';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white relative font-plus selection:bg-brand-orange selection:text-white flex flex-col">
        <Navbar />

        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/whats-new" element={<WhatsNew />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
