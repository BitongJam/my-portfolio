import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle('dark-mode');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      {/* EDIT HERE: Dark mode button label */}
      <button aria-label="Toggle dark mode" onClick={toggleDark}>
        {dark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
