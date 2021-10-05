import React, { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';

function UserHeader() {

    const {selectedUser,selectFriend}=useContext(LoginContext)

    if (!selectedUser) return null;
  
    return (
        <>
        <div className="headerInfo">
      <div className="headerImage">
        <img src={`${selectedUser.image}`}></img>
    </div>  
    <div className="headerUserName">{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>
    </div>
    <button className="headerUserInfo" onClick={()=>{selectFriend(selectedUser.id)}}>...</button>
    
    </>
    )
}

export default UserHeader;
