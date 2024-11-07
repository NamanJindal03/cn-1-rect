import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    function handleToggleTheme(){
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
        <ThemeContext value={{theme: theme, handleToggleTheme: handleToggleTheme}}>
            {children}
        </ThemeContext>
    )
}
export default ThemeProvider;