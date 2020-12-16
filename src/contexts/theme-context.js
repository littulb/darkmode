import React, {createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const ThemeContext = (props) => {
    const [ darkMode, setDarkMode ] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <AppContext.Provider 
            value = {{
                darkMode,
                toggleTheme
            }}>
            {props.children}
        </AppContext.Provider>
    );
}
export default ThemeContext;