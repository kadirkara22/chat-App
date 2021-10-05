import React, { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';
import "../ChatPage.css"

function UserList({searchText}) {

    const { userList,selectUser } = useContext(LoginContext);

    const filteredUserList = userList.filter((u) =>
         `${u.username}${u.first_name}${u.last_name}`.toLowerCase().includes(searchText.toLowerCase())
         );
    return (
        <div>

            {
                 filteredUserList.map((item, i) => {
                        return (

                            <div className="userInfo" key={i}>
                                <div className="userImage">
                                    <img src={`${item.image}`}/>
                                </div>

                                <div className="userText" onClick={() => selectUser(item.id)}>
                                    <div className="userName">{`${item.first_name} ${item.last_name}`} </div>
                                    <div className="messageAndCount">
                                        <div className="messageText">{`${item.messages[0].text.slice(0, 45)} ...`}</div>
                                        <div className="countMessage">{`${item.messages.length}`}</div>
                                    </div>
                                </div>

                            </div>



                        )
                    }) 
                
            }
        </div>
    )
}

export default UserList;
