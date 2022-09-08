import React,{useState,useEffect} from 'react';
import { Button } from './Button';
import './Section.css';
import '../App.css'
import {Link} from 'react-router-dom'
function Section({lang,event}) {
    const images=[
        "images/img-2.jpg",
        "images/img-3.jpg",
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
        <img src={images[(count%2)]} alt='alter'/>
        <h1>{lang? "ADVENTURE AWAITS" : "木頭"}</h1>
        <p>{lang? "ADVENTURE AWAITS" : "木頭"}</p>
        <div className="hero-btns">
            <Link to="/user">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'            
                >
                    GET STARTED
                </Button>
            </Link>
            <Link to="/user">
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'            
                >
                    WATCH TAILER<i className='far fa-play-circle'/>
                </Button>
            </Link>
            
            

        </div>
        <button class="button scroll-indicator" onClick={event}>
            <span class="scroll-indicator__label">Baixe para ver mais</span> 
            <div class="scroll-indicator__line"></div>
        </button>
      
    </div>
  );
}

export default Section;
