import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

type ScreenModeContextType = {
  isDarkMode: boolean;
  changeTheme: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const themeContext = createContext({} as ScreenModeContextType);

export function ThemeContextProvider(props: AuthContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeTheme() {
    localStorage.setItem('ui_theme_dark', String(!isDarkMode))
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (!localStorage.getItem('ui_theme_dark')){
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setIsDarkMode(localStorage.getItem('ui_theme_dark') === "true" ? true : false);
    }
  }, []);
  
  return (
    <themeContext.Provider value={{ isDarkMode, changeTheme }}>
      { props.children }
    </themeContext.Provider>
  );
}