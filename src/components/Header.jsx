import { useEffect, useState } from 'react';
import { LuSunMedium, LuMoon } from 'react-icons/lu';
import './Header.css';
import logoBlack from '../assets/logo-black.png?url';
import logoWhite from '../assets/logo-white.png?url';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Sync state with the theme that's already applied by the inline script
    const syncTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Update current path
    const updatePath = () => {
      setCurrentPath(window.location.pathname.replace(/\/$/, '') || '/');
    };
    
    // Initialize on mount
    syncTheme();
    updatePath();

    // Listen for Astro view transitions
    const handlePageLoad = () => {
      syncTheme();
      updatePath();
    };

    document.addEventListener('astro:page-load', handlePageLoad);
    
    return () => {
      document.removeEventListener('astro:page-load', handlePageLoad);
    };
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

