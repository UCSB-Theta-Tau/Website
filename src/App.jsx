import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Actives, Alumni, Brotherhood, History, Home, Professionalism, Rush, Service } from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/history" element={<History />} />
        <Route path="/brotherhood" element={<Brotherhood />} />
        <Route path="/professionalism" element={<Professionalism />} />
        <Route path="/service" element={<Service />} />

        <Route path="/actives" element={<Actives />} />
        <Route path="/alumni" element={<Alumni />} />

        <Route path="/rush" element={<Rush />} />
      </Routes>
    </Router>
  );
}

export default App;
