import React from "react";
import './LoginSignup.css';
import user_icon from '../Assets/user_icon.jpeg'
import email_icon from '../Assets/email_icon.jpeg'
import password_icon from '../Assets/password_icon.jpeg'

const LoginSignup = () =>
{
    return(
        <div className="container">
             <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
             </div>
             <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="" />  
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                  <img src={email_icon} alt="" />  
                  <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                  <img src={password_icon} alt="" />  
                  <input type="password" placeholder="Password" />
                </div>
             </div>
             <div className="forgot-password">Lost your password?<span>Click here</span></div>
                <div className="submit-container">
                  <button className="submit">Signup</button>
                  <button className="submit">Login</button>
                </div>
        </div>
    )
}

export default LoginSignup;