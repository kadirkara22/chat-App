import React, { useContext, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { ThemeContext } from "../contexts/ThemeContext";
import "./LoginPage.css"
import "./Chat/ChatPage.css";

function LoginPage() {

    const {user, login} = useContext(LoginContext);
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
     const { pathname } = useLocation();
  

     const handleSubmitLogin=()=>{
         login ({
             id:Math.random()*10,
            username,
            firstName,
            lastName
         }   
         )
     };   
 
 
    if (user && pathname === "/login") return <Redirect to="/chat" />
    if (user && pathname === "/") return <Redirect to="/chat" />
    
    return (
        <form className="AppForm">
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <input type="text" className="inputLogin" onChange={(e) => {
                        setUsername(e.target.value)
                    }} name="userName" id="userName" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="text" className="inputLogin" onChange={(e) => {
                        setFirstName(e.target.value)
                    }} name="firstName" id="firstName" placeholder="firstName" />
                </div>
                <div className="form-group">
                    <input type="text" className="inputLogin" onChange={(e) => {
                        setLastName(e.target.value)
                    }} name="lastName" id="lastName" placeholder="lastName" />
                </div>
                <button type="submit" onClick={handleSubmitLogin} >Login</button>

            </div>
        </form>

    )
}

export default LoginPage;