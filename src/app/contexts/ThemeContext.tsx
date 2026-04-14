import { createContext, useContext, useState, ReactNode } from 'react';

type ThemeType = 'green' | 'purple';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  accentColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('green');

  const toggleTheme = () => {
    setTheme(prev => prev === 'green' ? 'purple' : 'green');
  };

  const accentColor = theme === 'green' ? 'text-green-500' : 'text-purple-500';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
