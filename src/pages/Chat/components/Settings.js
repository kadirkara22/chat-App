import React, { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';
import { ThemeContext } from '../../../contexts/ThemeContext';



function Settings() {
    const { logout } = useContext(LoginContext);
    const { changeTheme } = useContext(ThemeContext);

    const handlechange = () => {
        changeTheme();
    }

    return (
        <div className="darkLogOut">
            <div>
                <label class="switch">
                    <input type="checkbox" onClick={handlechange}/>
                    <span class="slider round"></span>
                </label>
            </div>
            <button className="logout" type="submit" onClick={logout} >LogOut</button>
        </div>
    )
}

export default Settings;
