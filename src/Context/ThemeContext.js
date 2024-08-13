import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleLightMode = () => {
        setIsLightMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
