import { createContext, useState } from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const appTheme = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
