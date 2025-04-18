import { createContext, useContext, useState, useEffect } from 'react';

type Theme = {
  primary: string;
  accent: string;
  background: string;
};

const themes = {
  grey: {
    primary: 'gunmetal',
    accent: 'lavender',
    background: 'platinum',
  },
  default: {
    primary: 'blue',
    accent: 'indigo',
    background: 'gray',
  }
} as const;

type ThemeContextType = {
  currentTheme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
  themeColors: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('grey');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as keyof typeof themes;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: keyof typeof themes) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme,
      themeColors: themes[currentTheme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}