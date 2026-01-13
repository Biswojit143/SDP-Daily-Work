import { createContext, useContext, useEffect, useState } from "react";

const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("text-base");

  // Load preferences when user logs in
  useEffect(() => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem(user));
      if (saved) {
        setTheme(saved.theme);
        setFontSize(saved.fontSize);
      }
    }
  }, [user]);

  // Save preferences per user
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        user,
        JSON.stringify({ theme, fontSize })
      );
    }
  }, [theme, fontSize, user]);

  return (
    <PreferenceContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
};

export const usePreference = () => useContext(PreferenceContext);
