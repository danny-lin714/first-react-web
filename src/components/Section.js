import React from 'react';
import { Button } from './Button';
import './Section.css';
import '../App.css'
function Section() {
  return (
    <div className='hero-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'            
            >
                GET STARTED
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'            
            >
                WATCH TAILER<i className='far fa-play-circle'/>
            </Button>

        </div>
      
    </div>
  );
}

export default Section;
