import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get stored theme or default to light
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    // Apply theme
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
      setIsDark(true);
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      html.classList.add('dark');
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDark(newIsDark);
  };

  return (
    <header className="header">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-1"></div>
        
        <ul className="flex items-center justify-center md:gap-12 sm:gap-10 gap-8">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#designs" className="nav-link">
              Designs
            </a>
          </li>
        </ul>

        <div className="flex-1 flex justify-end">
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

