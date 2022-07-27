import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Bar from './components/bar';

function App() {
  return (
    <>
      <Router>
        <Bar/>
        <Routes>
          <Route PATH="/" exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
