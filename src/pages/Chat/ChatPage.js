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


function ChatPage (){
  const [searchUser,setSearchUser]=useState("");
  const { user,selectedFriend } = useContext(LoginContext);
   const { pathname } = useLocation();

const {darkMode}=useContext(ThemeContext);

  if (!user && pathname === "/chat") return <Redirect to="/login" />
  

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
  
        <div className="right-side">



          <div className="right-side-item header">
         
            <UserHeader />
          </div>
          <div className="right-side-item message-form">
          {selectedFriend ? selectedFriend.first_name :null}
              <Message />
              
          </div>
          <div className="right-side-item messageinput">
            <MessageInput />
          </div>
        </div>
      </div>
    )
}

export default ChatPage;