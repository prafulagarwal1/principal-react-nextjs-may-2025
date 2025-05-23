import { createContext, useContext, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme,
    contrastTheme: Theme,
    toggleTheme: () => void,
    setTheme?: (theme: string) => void
}

// you pass the "default" context to createContext()
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    contrastTheme: 'dark',
    toggleTheme: () => {} // a no-operation function
});

export {
    ThemeContext as default,
}

export type {
    Theme
}