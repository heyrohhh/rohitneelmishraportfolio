import { useTheme } from '../context/ThemeContext';
import './Nav.css';

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav">
      <div className="nav-logo">RM.DEV</div>
      <div className="nav-links">
        {['About', 'Stack', 'Projects', 'Experience', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '☀ LIGHT' : '☾ DARK'}
        </button>
      </div>
    </nav>
  );
}
