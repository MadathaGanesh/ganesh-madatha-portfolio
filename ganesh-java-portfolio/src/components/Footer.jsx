import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link to="/" className="footer-logo">MG<span>.</span></Link>
          <p>Thoughtful engineering. Dependable systems.</p>
        </div>
        <div className="footer-links" aria-label="Social profiles">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={19}/></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={19}/></a>
          <a href={`mailto:${profile.email}`} aria-label="Send email"><Mail size={19}/></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}.</span>
        <a href="/#home">Back to top <ArrowUpRight size={14}/></a>
      </div>
    </footer>
  );
}
