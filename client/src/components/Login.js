import React,{useState} from 'react';
import { TextField } from './TextField';
import './Login.css';
import '../App.css'

function Login({lang,event}) {

    const [inputValue_acc, setInputValue_acc] = useState('')
    const [inputValue_pwd, setInputValue_pwd] = useState('')



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
            <img src="images/img-5.jpg" alt=""/>
            <h1>LOGIN</h1>
            <div className="input-area">
                <form action='/'>

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

export default Login;
