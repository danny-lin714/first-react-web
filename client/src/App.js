import React, { Component,useState,useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Service';
import Arts from './components/pages/Arts';
import LoadingPage from './components/LoadingPage';
import User from './components/pages/User';

function App() {
  const [lang,setLang] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const handleClick = () => {
    setLang(lang => !lang);
  };

  return (
    <>
      {loading===false ?(
        <Router>
        <Navbar setLang={handleClick} lang={lang}/>
        <Routes>
          <Route path="/" element={<Home lang={lang}/>}/>
          <Route path='/services' element={<Services lang={lang}/>}/>
          <Route path='/arts' element={<Arts lang={lang}/>}/>
          <Route path='/user' element={<User lang={lang}/>}/>
          
        </Routes>
      </Router>
      ):(
      <LoadingPage/>
      )}
    </>
  );
}

export default App;
