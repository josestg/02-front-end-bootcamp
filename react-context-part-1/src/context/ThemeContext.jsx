import { createContext, useState } from "react";

const initialValue = {
  theme: "light",
  onToggle: () => {},
};

export const ThemeContext = createContext(initialValue);

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(initialValue.theme);

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const value = { theme: theme, onToggle: switchTheme };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
