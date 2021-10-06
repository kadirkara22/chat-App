import React, { useEffect, useState } from "react";

import MockUserList from "../mock-users.json";

export const LoginContext = React.createContext(); 

const LoginContextProvider=(props)=>{
    
    const [user,setUser] = useState(null);
    const [searchUser]=useState("")

    const [selectedUser, setSelectedUser] = useState(null);

    const [selectedFriend, setSelectedFriend] = useState(null);

    const [userList,setUserList]=useState(MockUserList.users);


    const selectUser = (userId) => {
      const user = userList.find((user) => user.id === userId);
      setSelectedUser(user);
      
    };

    const selectFriend = (userId) => {
      const user = userList.find((user) => user.id === userId);
      setSelectedFriend(user);
    
    };
    

    const login = (user) => {
    setUser(user);
        localStorage.setItem("chat_app_user", JSON.stringify(user));
  
      };

      const logout = () => {
        setUser(null);
        localStorage.removeItem("chat_app_user");
      };

const handleSendNewMessage=(messageText)=>{

  const newSelectedUser={
    
      ...selectedUser,
      messages:[
        ...selectedUser.messages,
        {
          id:Math.random()*10,
          text:messageText,
          sender:user.id,
        },
      ]
    } 
setSelectedUser(newSelectedUser)

const newUserList=userList.map((u)=>{
  if(u.id===selectedUser.id) return newSelectedUser;
  else return u
});
setUserList(newUserList);

localStorage.setItem('chat_app_user_list',JSON.stringify(newUserList))
};

    
      useEffect(() => {
        const userNameFromStorage = localStorage.getItem("chat_app_user");
        const userListFromStorage = localStorage.getItem("chat_app_user_list");
    
        if (userNameFromStorage) {
          const userObject = JSON.parse(userNameFromStorage);
          //console.log(userObject);
          setUser(userObject);
        }

        if(userListFromStorage){
          const users=JSON.parse(userListFromStorage)
          setUserList(users)
        }
      }, []); 


    return (
<LoginContext.Provider value={{user,login,logout,userList,selectUser,selectedUser,searchUser,selectedFriend,setSelectedFriend,selectFriend,handleSendNewMessage}}>
    {props.children}
</LoginContext.Provider>
    )
}

export default LoginContextProvider;



