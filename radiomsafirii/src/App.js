import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Keep this import
import Home from './pages/Home';
import Sermons from './pages/Sermons';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Support from './pages/Support';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
        {/* Add additional routes as necessary */}
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;
