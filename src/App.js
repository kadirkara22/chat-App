import React from 'react';
import './App.css'
import LoginContextProvider from "./contexts/LoginContext";
import ThemeContextProvider from './contexts/ThemeContext';

import Routes from './routes';


function App() {
 

  return (
     
    <LoginContextProvider>
      <ThemeContextProvider>
      <Routes />
      </ThemeContextProvider>
      </LoginContextProvider>
      
  );
}

export default App; 
