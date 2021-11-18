import React from 'react'
import "./Fg_pass.css"
import logo from "../../assets/images/logo.png" 
import { Link } from "react-router-dom"

function ForgotPassword() {
    return (
        <div className="fg_pass">
            <div className="logo">
            <Link to="/"><img src={logo} alt="company logo" /></Link>              
            </div> 
            <h2>Forgot Your Password</h2>
            <div className="row">
                <label htmlFor="email">Enter your email address</label>
                <input type="email" name="" id="" />
                <button>Verify your email</button> 
            </div>       
              
        </div>
    )
}

export default ForgotPassword
