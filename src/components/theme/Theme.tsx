import { Accessor, createContext, createSignal, useContext, type ParentComponent } from "solid-js";

export type Theme = 'dark' | 'light'
export type ThemeContextValue = {
    setDarkMode: (darkMode: boolean) => void,
    darkMode: Accessor<boolean>
};
const ThemeContext = createContext<ThemeContextValue>({
    setDarkMode: () => { },
    darkMode: () => false
});

export const ThemeProvider: ParentComponent = ({ children }) => {
    const [darkMode, setDarkMode] = createSignal<boolean>(localStorage.getItem("theme") === 'dark');
    localStorage.setItem("theme", darkMode() ? 'dark' : 'light')
    document.documentElement.setAttribute("data-theme", darkMode() ? 'dark' : 'light')
    return (
        <ThemeContext.Provider value={{ setDarkMode, darkMode }} >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
