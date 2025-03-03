import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storedTheme =
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  const [theme, setTheme] = useState<'light' | 'dark'>(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const ThemeProviderValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={ThemeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
}
