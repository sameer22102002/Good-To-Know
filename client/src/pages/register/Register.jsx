import "./register.css";
import { useContext, useRef } from 'react'
import axios from "axios" 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value)
    {
        passwordAgain.current.setCustomValidity("passwords don't match!");
    }else
    {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        axios.post("/auth/register", user);
        navigate("/login");
      }catch(err){
        console.log(err);
      }
    }
};

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GoodToKnoW</h3>
          <span className="loginDesc">
            Connecting the world around you on GoodToKnoW.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} type="email" className="loginInput" />
            <input placeholder="Password" required ref={password} minLength='6' type="password" className="loginInput" />
            <input placeholder="Re-type Password" required ref={passwordAgain} type="password" className="loginInput" />
            <button className="loginButton" type="submit" >Sign Up</button>
            
              <button className="loginRegisterButton"><Link to={"/login"} style={{"text-decoration": "none",color: "inherit"}} > Log into Account</Link></button>
            
          </form>
        </div>
      </div>
    </div>
  );
}