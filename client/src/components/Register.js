import React,{useState} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Register({lang,event}) {
    const [inputValue_user, setInputValue_user] = useState('')
    const [inputValue_acc, setInputValue_acc] = useState('')
    const [inputValue_pwd, setInputValue_pwd] = useState('')

    return (
        <div className='container'>
            <img src="images/img-2.jpg" alt=""/>
            <h1>Register</h1>
            <div className="input-area">
                <form action='/'>
                    <TextField placeholder='Username'
                               value={inputValue_user}
                               onChange={(e) => setInputValue_user(e.target.value)}/>
                    <TextField placeholder='Account'
                               value={inputValue_acc}
                               onChange={(e) => setInputValue_acc(e.target.value)}/>
                    <TextField type='password' placeholder='Password'
                               value={inputValue_pwd}
                               onChange={(e) => setInputValue_pwd(e.target.value)}/>
                    <div><button></button></div>
                </form>
            </div>

        </div>
    );
}

export default Register;
