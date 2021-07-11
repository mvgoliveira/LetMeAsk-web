import { createContext, ReactNode, useState } from "react";

type ScreenModeContextType = {
  isDarkMode: boolean;
  changeScreenMode: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const themeContext = createContext({} as ScreenModeContextType);

export function ThemeContextProvider(props: AuthContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  function changeScreenMode() {
    setIsDarkMode(!isDarkMode);
  }
  
  return (
    <themeContext.Provider value={{ isDarkMode, changeScreenMode }}>
      { props.children }
    </themeContext.Provider>
  );
}