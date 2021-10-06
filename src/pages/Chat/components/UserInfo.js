import React, { useContext, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom';
import { LoginContext } from '../../../contexts/LoginContext'

export default function UserInfo() {
    const { selectedFriend,user,setSelectedFriend} = useContext(LoginContext);
    const { pathname } = useLocation();
   const [exit,SetExit]=useState(null);

   console.log(exit)


 const onhandleExit=()=>{
   setSelectedFriend(null)

 
 }
 

    if (selectedFriend && pathname === "/chat") return <Redirect to="/chat/:userid" />
    if (!selectedFriend && pathname === "/chat/:userid") return <Redirect to="/chat" />
    
    if (!user && pathname === "/chat/:userid") return <Redirect to="/login" />
    
    return (
        <div> 
            <div className="exitUser">
                             <button type="submit" className="exitUserX" onClick={onhandleExit} >X</button>
                 </div>
            
            <div className="userdetails">
                <div className="UserInfoImage">
                    <img src={`${selectedFriend.image}`}></img>
                </div>
                <div>
                    <div className="userFirstNameLastName">{`${selectedFriend.first_name} ${selectedFriend.last_name}`}</div>
                </div>
                <div>
                    <div className="showTime">{`Last seen 2 hours ago`}</div>
                </div>
            </div>
            <div className="userPhone">
                <div className="userMessage">
                    <div className="userMessageImage">
                    <i className="far fa-comment"></i>
                    </div>
                    <div className="userMessageText">
                                 Message
                    </div>

                </div>
                <div className="userMessage">
                    <div className="userMessageImage">
                    <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="userMessageText">
                            Call
                    </div>

                </div>
                <div className="userMessage">
                    <div className="userMessageImage">
                    <i className="fas fa-video"></i>
                    </div>
                    <div className="userMessageText">
                        Video
                    </div>

                </div>
            </div>

        </div>
    )
}
