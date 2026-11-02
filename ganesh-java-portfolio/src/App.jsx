import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import { profile } from './data.js';

function useLocationScroll() {
  const location = useLocation();
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 40);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.hash]);
}

function DocumentMeta() {
  const location = useLocation();
  useEffect(() => {
    const isHome = location.pathname === '/';
    document.title = isHome
      ? `${profile.name} | Java Backend Engineer`
      : document.title;
    if (isHome) {
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = `${profile.name} — Java Backend Engineer with 2+ years of experience in Spring Boot, REST APIs, Java modernization, AWS and Kubernetes. Explore projects and experience.`;
    }
  }, [location.pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'dark'; } catch { return 'dark'; }
  });
  useLocationScroll();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* private browsing */ }
  }, [theme]);
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <DocumentMeta />
      <Header theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
