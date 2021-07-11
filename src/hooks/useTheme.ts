import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export function useTheme() {
  return useContext(themeContext);
}