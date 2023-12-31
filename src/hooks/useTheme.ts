import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
