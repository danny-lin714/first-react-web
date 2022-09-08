import React,{useState,useEffect} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Login({lang,event}) {


    return (
        <div className='container'>
            <h1>LOGIN</h1>
            <div className="input-area">
                <form action='/'>
                    <TextField placeholder='Account'/>
                    <TextField placeholder='Password'/>
                    <div><button></button></div>
                </form>
            </div>

        </div>
    );
}

export default Login;
