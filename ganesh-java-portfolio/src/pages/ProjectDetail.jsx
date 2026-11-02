import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, Layers3, CheckCircle2 } from 'lucide-react';
import { projects, profile } from '../data.js';
import FlowDiagram from '../components/FlowDiagram.jsx';
import NotFound from './NotFound.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — Case Study | ${profile.name}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = project.description;
    return () => { document.title = `${profile.name} | Java Backend Engineer`; };
  }, [project]);
  if (!project) return <NotFound />;
  return (
    <div className="case-study-page">
      <div className="shell case-top">
        <Link className="breadcrumb" to="/#projects"><ArrowLeft size={17}/> All projects</Link>
        <div className="case-eyebrow"><span className="pulse-dot"/> PROJECT {project.number} <span className="case-eyebrow-separator">/</span> {project.category.toUpperCase()}</div>
        <h1>{project.title}<span className="accent-period">.</span></h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <div className="tag-list case-tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
        <div className="case-top-actions">
          <a className="button button-solid" href={project.repoUrl || profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> {project.repoUrl ? 'View source on GitHub' : 'Visit GitHub profile'} <ArrowUpRight size={16}/></a>
          <span className="case-source-note">{project.type}</span>
        </div>
      </div>
      <section className="shell case-diagram-section" aria-label="Architecture overview">
        <FlowDiagram project={project} />
      </section>
      <section className="shell case-detail-grid" aria-labelledby="case-about-heading">
        <div className="case-main">
          <span className="section-kicker">01 / OVERVIEW</span>
          <h2 id="case-about-heading">Under the hood<span className="accent-period">.</span></h2>
          <p className="case-intro">{project.description}</p>
          {project.narrative.map((part,i) => (
            <div className="case-narrative" key={part.title}>
              <span className="case-narrative-num">0{i+1}</span>
              <div><h3>{part.title}</h3><p>{part.body}</p></div>
            </div>
          ))}
        </div>
        <aside className="case-aside">
          <div className="case-aside-card">
            <div className="aside-heading"><Layers3 size={19}/> What I implemented</div>
            <ul className="case-highlights">{project.highlights.map(item => <li key={item}><CheckCircle2 size={17}/><span>{item}</span></li>)}</ul>
          </div>
          <div className="case-aside-card slim">
            <h3>Source & verification</h3>
            <p>This case study summarizes details from {project.featured ? 'my resume' : 'my earlier LinkedIn profile'}. It does not represent a live hosted demo.</p>
            {!project.repoUrl && <p className="aside-alert">A project-specific repository link is not configured yet. The GitHub button currently opens my GitHub profile.</p>}
          </div>
        </aside>
      </section>
      <section className="shell next-project-wrap">
        <div className="next-project-label">KEEP EXPLORING</div>
        {(() => {
          const next = projects[(projects.findIndex(p => p.slug === project.slug) + 1) % projects.length];
          return <Link className="next-project" to={`/projects/${next.slug}`}><span>{next.title}</span><ArrowUpRight size={30}/></Link>;
        })()}
      </section>
    </div>
  );
}
