import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import ThreatExtractor from './pages/ThreatExtractor';

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/threat-extractor" element={<ThreatExtractor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;