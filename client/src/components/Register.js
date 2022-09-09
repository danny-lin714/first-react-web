import React,{useState} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Register({lang,event}) {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='container'>
            <img src="images/img-2.jpg" alt=""/>
            <h1>Register</h1>
            <div className="input-area">
                <form action='/'>
                    <TextField placeholder='Username'
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}/>
                    <TextField placeholder='Account'
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}/>
                    <TextField type='password' placeholder='Password'
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}/>
                    <div><button></button></div>
                </form>
            </div>

        </div>
    );
}

export default Register;
