import React, { createContext, useContext, useState, useEffect } from 'react';

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    setDarkMode: (mode: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
        setIsDarkMode(savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    const setDarkMode = (mode: boolean) => {
        setIsDarkMode(mode);
        localStorage.setItem('darkMode', JSON.stringify(mode));
    };


    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);


    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

// Custom Hook para usar el contexto
export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
};
