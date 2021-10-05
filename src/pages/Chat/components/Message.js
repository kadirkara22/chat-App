
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
        : null}
         
        </div>
    )
}

export default Message;
