import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* EDIT HERE: Dark mode button label */}
      <button aria-label="Toggle dark mode" onClick={toggleDark}>
        {dark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
