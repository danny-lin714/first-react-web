import React, { Component,useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Service';
import Arts from './components/pages/Arts';
import SignUp from './components/pages/SignUp';

function App() {
  const [lang,setLang] = useState(true)

  const handleClick = () => {
    setLang(lang => !lang);
  };

  return (
    <>
      <Router>
        <Navbar setLang={handleClick} lang={lang}/>
        <Routes>
          <Route path="/" element={<Home lang={lang}/>}/>
          <Route path='/services' element={<Services lang={lang}/>}/>
          <Route path='/arts' element={<Arts lang={lang}/>}/>
          <Route path='/sign-up' element={<SignUp lang={lang}/>}/>
          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
