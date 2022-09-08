import React from "react";
import '../../App.css'
import "../Section.css"
import {Link} from "react-router-dom"
import { Button } from '../Button';

export default function User(){
    return (
        <>
        <div className='hero-container'>
        <img src="images/img-2.jpg" alt='alter'/>
        <h1>ADVENTURE AWAITS</h1>
            <div className="hero-btns">
                <Link to="/sign-in">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'            
                    >
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'            
                    >
                        Register
                    </Button>
                </Link>
            </div>
        </div>
        </>
    )
}