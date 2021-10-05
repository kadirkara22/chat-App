import React, { useContext, useState } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';

function MessageInput() {

const{handleSendNewMessage}=useContext(LoginContext);
 const [message,setMessage]=useState("");  
 
 const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        {handleSendNewMessage(message); setMessage('')}
    }
  }

    return (
        <div className="messageInputSend" >
           <input  type="text" onKeyDown={handleKeyDown}
            value={message}
            onChange={(e)=>{
               setMessage(e.target.value);
           }} 
           className="sentMessageInfo" placeholder="mesaj giriniz.." autoFocus="autofocus"></input>
           <button className="SendMessage" 
           onClick={()=>{handleSendNewMessage(message);
           setMessage('')
        }} >Send</button>
        </div>
    )
}

export default MessageInput;
