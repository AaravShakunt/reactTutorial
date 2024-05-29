import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import './index.css';
// import Signup from './components/Signup';

function App() {
  return (
    <Router>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

function Signup() {
  return (
    <div>
      <h2>Signup Page</h2>
    </div>
  );
}

export default App;
