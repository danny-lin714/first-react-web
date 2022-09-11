import React,{useState} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Register({lang,event}) {
    var [inputValue_user, setInputValue_user] = useState('')
    var [inputValue_acc, setInputValue_acc] = useState('')
    var [inputValue_pwd, setInputValue_pwd] = useState('')
    
    const add_user=(user,acc,pwd)=>{
        fetch("http://localhost:5000/user",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_name":user,
                "user_account": acc,
                "user_password": pwd
            })
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }
    return (
        <div className='container'>
            <img src="images/img-2.jpg" alt=""/>
            <h1>Register</h1>
            <div className="input-area">
                <form>
                    <TextField  placeholder='Username'
                                value={inputValue_user}
                                onChange={(e) => setInputValue_user(e.target.value)}/>
                    <TextField  placeholder='Account'
                                value={inputValue_acc}
                                onChange={(e) => {
                                    setInputValue_acc(e.target.value)
                                }}/>
                    <TextField type='password' placeholder='Password'
                               value={inputValue_pwd}
                               onChange={(e) => setInputValue_pwd(e.target.value)}/>
                    <div><button type='submit' onClick={add_user(inputValue_user,inputValue_acc,inputValue_pwd)}></button></div>
                </form>
            </div>
        </div>
    );
}

export default Register;
