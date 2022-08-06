import React,{useState,useEffect} from 'react';
import { Button } from './Button';
import './Section.css';
import '../App.css'
function Section() {
    const images=[
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg",
        "images/img-4.jpg",
    ]

    const [count,setCount]=useState(0);

    useEffect(()=>{
        let id=setInterval(()=>{
            setCount(count=>count+1)
        },3000)
        return ()=>clearInterval(id)
    },[])


  return (
    <div className='hero-container'>
        <img src={images[(count%4)]} alt='alter'/>
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
