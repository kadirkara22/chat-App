import React, { useState } from 'react';

export const ThemeContext=React.createContext();

const ThemeContextProvider=(props)=>{
const [darkMode,setDarkMode]=useState(false);

const changeTheme=()=>{
    setDarkMode(!darkMode)
}
console.log(darkMode)
    return (
<ThemeContext.Provider value={{changeTheme,darkMode}}>
{props.children}
</ThemeContext.Provider>
    )
}


export default ThemeContextProvider;