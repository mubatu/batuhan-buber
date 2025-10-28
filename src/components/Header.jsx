import { useEffect, useState } from 'react';
import { LuSunMedium, LuMoon } from 'react-icons/lu';
import './Header.css';
import logoBlack from '../assets/logo-black.png?url';
import logoWhite from '../assets/logo-white.png?url';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Set current path, removing trailing slash for consistency
    setCurrentPath(window.location.pathname.replace(/\/$/, '') || '/');

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

  // Helper function to check if link is active
  const isActive = (path) => {
    return currentPath === path;
  };

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
      <nav className="nav-container">
        {/* Left navigation items */}
        <ul className="nav-section nav-left">
          <li>
            <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              About
            </a>
          </li>
          <li>
            <a href="/resume" className={`nav-link ${isActive('/resume') ? 'active' : ''}`}>
              Resume
            </a>
          </li>
        </ul>

        {/* Center logo */}
        <div className="logo-container">
          <img 
            src={isDark ? logoWhite : logoBlack} 
            alt="Logo" 
            className="logo" 
          />
        </div>

        {/* Right navigation items */}
        <ul className="nav-section nav-right">
          <li>
            <a href="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="/designs" className={`nav-link ${isActive('/designs') ? 'active' : ''}`}>
              Designs
            </a>
          </li>
        </ul>
      </nav>

      {/* Theme toggle in top-right corner */}
      <button 
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {isDark ? <LuSunMedium size={20} /> : <LuMoon size={20} />}
      </button>
    </header>
  );
}

