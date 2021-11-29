import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
