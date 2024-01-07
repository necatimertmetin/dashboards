// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Authorization from './components/authorization/authorization';
import Panel from './components/admin/panel';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/dashboard" element={<Panel />} />
      </Routes>
    </Router>
  );
}

export default App;
