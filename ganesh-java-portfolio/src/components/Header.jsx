import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data.js';

const navigation = [
  ['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'],
  ['Skills', 'skills'], ['Credentials', 'credentials'], ['Contact', 'contact'],
];

export default function Header({ theme, onToggleTheme }) {
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  useEffect(() => setOpened(false), [location.pathname, location.hash]);
  useEffect(() => {
    if (!opened) return;
    const handler = e => { if (e.key === 'Escape') setOpened(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [opened]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" to="/" aria-label="Madatha Ganesh — home">
          <span className="wordmark-box">MG<span>.</span></span>
          <span className="wordmark-description">JAVA BACKEND<br />ENGINEER</span>
        </Link>
        <nav className={`site-nav ${opened ? 'open' : ''}`} aria-label="Primary navigation" id="primary-nav">
          {navigation.map(([label,id]) => <Link key={id} to={`/#${id}`} onClick={() => setOpened(false)}>{label}</Link>)}
          <a className="nav-mobile-resume" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpened(false)}>View résumé <ArrowUpRight size={16}/></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Switch color theme">
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <a className="resume-button" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"><Download size={15}/> Résumé</a>
          <button className="icon-button menu-toggle" type="button" onClick={() => setOpened(o => !o)} aria-label={opened ? 'Close navigation' : 'Open navigation'} aria-expanded={opened} aria-controls="primary-nav">{opened ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </div>
    </header>
  );
}
