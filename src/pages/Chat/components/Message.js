
import React, { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';
import "../ChatPage.css"
function Message() {
    const {user,selectedUser}=useContext(LoginContext)
 
    return (
        <div className="messageTextUser">
         
            {selectedUser
        ? selectedUser.messages.map((message,key) => {
            return <div key={key}  className={`messaage-container ${message.sender===user.id ? "from-me" :""}`}>
                <div key={key} className="messageInfoUser">{message.text}</div>
                </div>
          })
        : <div ><span >Mesajlaşmaya başlamak için bir sohbet seçin</span></div>}
         
        </div>
    )
}

export default Message;
