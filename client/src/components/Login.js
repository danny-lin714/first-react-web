import React,{useState} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Login({lang,event}) {

    const [inputValue_acc, setInputValue_acc] = useState('')
    const [inputValue_pwd, setInputValue_pwd] = useState('')
    
    const add_user=()=>{
        fetch("http://localhost:5000/user",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_name":inputValue_user,
                "user_account": inputValue_acc,
                "user_password": inputValue_pwd
            })
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }
    const set_user=(e)=>{
        setInputValue_user(e.target.value)
    }
    const set_acc=(e)=>{
        setInputValue_acc(e.target.value)
    }
    const set_pwd=(e)=>{
        setInputValue_pwd(e.target.value)
    }


    
    return (
        <div className='container'>
            <img src="images/img-5.jpg" alt=""/>
            <h1>LOGIN</h1>
            <div className="input-area">
                <form action='/'>

                    <TextField placeholder='Account'
                               setValue={set_acc}/>
                    <TextField type='password' placeholder='Password'
                               setValue={set_pwd}/>
                    <div><button></button></div>

                </form>
            </div>

        </div>
    );
}

export default Login;
