import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Service';
import Arts from './components/pages/Arts';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/arts' element={<Arts/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
