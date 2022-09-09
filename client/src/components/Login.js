import React,{useState,useEffect} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Login({lang,event}) {

    const add_user=()=>{
        const body={
            user_name: {username},
            user_account: {account},
            user_password: {password}
        }
        fetch("http://localhost:5000/user",{
            method: "POST",
            body:JSON.stringify(body)
        }).then(() => {
            alert("登入成功!");
            navigate("/home");
          })
          .catch((e) => {
            if (e.response.error) {
              alert("帳號或密碼錯誤！");
            }
          });
    }
    return (
        <div className='container'>
            <h1>LOGIN</h1>
            <div className="input-area">
                <form action='/'>
                    <TextField placeholder='Account'/>
                    <TextField placeholder='Password'/>
                    <div><button onClick={add_user}></button></div>
                </form>
            </div>

        </div>
    );
}

export default Login;
