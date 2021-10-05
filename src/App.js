import React from 'react';
import './App.css'
import LoginContextProvider from "./contexts/LoginContext";
import ThemeContextProvider from './contexts/ThemeContext';


import Routes from './routes';


function App() {
 

  return (
    <ThemeContextProvider> 
    <LoginContextProvider>
      <Routes />
      </LoginContextProvider>
      </ThemeContextProvider>
      
  );
}

export default App; 
