import { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "../contexts";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkTheme((curr) => !curr);
  };

  const currentTheme = useMemo(() => localStorage.getItem("theme"), []);

  useEffect(() => {
    if (!currentTheme) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setDarkTheme(true);
      }
    } else {
      setDarkTheme(currentTheme === "dark");
    }
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
    document.body.className = darkTheme ? "dark" : "light";
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
