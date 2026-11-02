import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data.js';

export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={`project-card accent-${project.accent} ${compact ? 'compact' : ''}`}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-number">/{project.number}</span>
        {project.category === 'Event-driven' ? (
          <div className="art-pipeline"><i/><span/><i/><span/><i/></div>
        ) : project.category === 'Security' ? (
          <div className="art-shield"><div className="art-shield-inner">●</div></div>
        ) : (
          <div className="art-brackets">{'{ }'}</div>
        )}
        <span className="project-art-label">{project.category.toUpperCase()} / JAVA</span>
      </div>
      <div className="project-card-content">
        <div className="project-meta"><span>{project.type}</span><span>CASE STUDY {project.number}</span></div>
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.slice(0, compact ? 4 : 5).map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-card-actions">
          <Link className="inline-link" to={`/projects/${project.slug}`}>Explore case study <ArrowUpRight size={16}/></Link>
          <a className="icon-button project-github" href={project.repoUrl || profile.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${project.repoUrl ? 'view repository' : 'visit GitHub profile'}`} title={project.repoUrl ? 'Project repository' : 'GitHub profile — project link not yet provided'}><Github size={18}/></a>
        </div>
      </div>
    </article>
  );
}
