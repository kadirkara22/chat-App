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
                <label className="switch">
                    <input type="checkbox" onClick={handlechange}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <button className="logout" type="submit" onClick={logout} ><i className="fa fa-sign-out"></i></button>
            
        </div>
    )
}

export default Settings;
