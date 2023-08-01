import { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls.js';
import { AuthContext } from "../../context/AuthContext.js"
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };
    console.log(user); 
    
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">GoodToKnoW</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on GoodToKnoW.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox"  onSubmit={handleClick}>
                    <input placeholder="Email" type="email" className="loginInput" ref = {email} required/>
                    <input placeholder="Password" type="password" className="loginInput" ref = {password} required minLength="6"/> 
                    <button className='loginButton' disabled={isFetching} >{isFetching ? <CircularProgress color='inherit' size="25px"/> : "Log In"}</button>
                    <span className='loginForgot'>Forgot Password</span>
                        <button className='loginRegisterButton'>{isFetching ? <CircularProgress color='inherit' size="25px"/> : <Link to={"/register"} style={{"text-decoration": "none",color: "inherit"}} > Create a New Account</Link>}</button>
                  
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login