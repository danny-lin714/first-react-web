import React,{useState,useEffect} from 'react';
import { Button } from './Button';
import './Section.css';
import '../App.css'
import {Link} from 'react-router-dom'
function Section({set,lang,event}) {
    const images=[
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg"
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
        <img className='background' src={images[(count%3)]} alt='alter'/>
        <h1>{lang? "WOODER" : "木創藝"}</h1>
        <p>{lang? "Tongxiao sculptor" : "通霄雕刻家"}</p>
        <div className='translation'onClick={event=>set()}><p>T</p></div>
        
        <div className="hero-btns">
            <Link to="/arts">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'            
                >
                    {lang? "PORTFOLIO" : "作品集"}
                </Button>
            </Link>
{/*             
            <Link to="/user">
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'            
                >
                    WATCH TAILER<i className='far fa-play-circle'/>
                </Button>
            </Link>
*/}
            
            

        </div>
        <button class="button scroll-indicator" onClick={event}>
            <span class="scroll-indicator__label">introduction</span> 
            <div class="scroll-indicator__line"></div>
        </button>
      
    </div>
  );
}

export default Section;
