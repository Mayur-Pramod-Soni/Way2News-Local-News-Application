// ThemeContext.js
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import "./Styles.css"

const ThemeContext = createContext();

export const useThemeSet = ()=>{
  return useContext(ThemeContext);
}

export const ThemeProvider =({children})=>{
  const [isDarkMode , setIsDarkMode] = useState(false)

  const toggleTheme = ()=>{
    setIsDarkMode((prevState) => !prevState);
  }

const themeset = isDarkMode ? "dark" : "light" ;

useEffect(()=>{
  document.documentElement.setAttribute("data-theme" , themeset)
},[isDarkMode])

return(
  <ThemeContext.Provider value={{themeset, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
)
}