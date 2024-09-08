import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // The default object present there are available themeMode(default variable)
    themeMode : "light",
    darkTheme : () => {}, // This two darkTheme, lightTheme are method of themeMode variable
    lightTheme : () => {},
})

// Here i directly use Context.Provider without create contextProvider.jsx file
export const ThemeProvider = ThemeContext.Provider

// Export custom hook
export default function useTheme (){
    return useContext(ThemeContext)
}