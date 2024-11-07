import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    function handleToggleTheme(){
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
        <ThemeContext.Provider value={{theme: theme,  handleToggleTheme: handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;