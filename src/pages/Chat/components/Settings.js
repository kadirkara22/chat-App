import React, { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';
import { ThemeContext } from '../../../contexts/ThemeContext';


function Settings() {
    const { logout } = useContext(LoginContext);
    const {changeTheme}=useContext(ThemeContext);

    return (
        <div>
         <button className="logout" type="submit" onClick={logout} >LogOut</button>
         <button type="submit" className="thema" onClick={changeTheme} >Thema</button>
         
        </div>
    )
}

export default Settings;
