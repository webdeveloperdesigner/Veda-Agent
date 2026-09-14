import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import WhatsNew from './pages/WhatsNew';
import Versions from './pages/Versions';
import Status from './pages/Status';
import Changelog from './pages/Changelog';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-white relative font-plus selection:bg-brand-orange selection:text-white flex flex-col">
          <Navbar />

          <main className="relative z-10 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/whats-new" element={<WhatsNew />} />
              <Route path="/versions" element={<Versions />} />
              <Route path="/status" element={<Status />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/500" element={<ServerError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
