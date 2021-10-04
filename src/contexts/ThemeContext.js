import React, { useState } from 'react';

export const ThemeContext =  React.createContext();

const ThemeContextProvider=(props)=> {

const [theme,setTheme]=useState();

    return (
      <ThemeContext.Provider value={{}}>
        {props.children}
      </ThemeContext.Provider>
    )
 

  
}
export default ThemeContextProvider;

