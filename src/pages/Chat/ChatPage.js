import React, { useContext, useState} from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ChatPage.css'
import Message from './components/Message';
import MessageInput from './components/MessageInput';
import SearchInput from './components/SearchInput';
import Settings from './components/Settings';
import UserHeader from './components/UserHeader';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo';


function ChatPage (){
  const [searchUser,setSearchUser]=useState("");
  const { user,selectedFriend,selectedUser } = useContext(LoginContext);
   const { pathname } = useLocation();
 
const {darkMode}=useContext(ThemeContext);

  

  if (!user && pathname === "/chat") return <Redirect to="/login" />
  if (!user && pathname === "/chat/:userid") return <Redirect to="/login" />

    return (

        <div className={darkMode ? "darkMode": "chat-container"}>
        <div className="left-side">
          <div className="left-side-item searchuser">
            <SearchInput searchText={searchUser} handleOnChange={setSearchUser}/>
          </div>
          <div className="left-side-item user-list">
            <UserList searchText={searchUser} />
            </div>
          <div className="left-side-item settings">
            <Settings />
          </div>
        </div>
  {selectedFriend ? 
      <div className="right-side userInfoTamboyut">
  <UserInfo />
  </div> :
        <div className="right-side">
       
          <div className="right-side-item header">
         
            <UserHeader />
          </div>
          <div className={`right-side-item ${selectedUser ? "message-form" : "startMessage"}`}>
          
              <Message />
              
          </div>
          <div className="right-side-item messageinput">
            <MessageInput />
          </div> 

        </div>
}
      </div>
    )
}

export default ChatPage;