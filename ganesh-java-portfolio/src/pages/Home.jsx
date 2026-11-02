import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Boxes, BrainCircuit, Check, CircleDot,
  Cloud, Code2, Copy, Download, Github, GitBranch, GraduationCap, Layers3,
  Linkedin, Mail, MapPin, Network, Rocket, Server, ShieldCheck, Terminal, Zap,
  Award, CalendarDays, Database, Shield,
} from 'lucide-react';
import { profile, achievements, experience, projects, skills, credentials, education, secondaryDetails } from '../data.js';
import ProjectCard from '../components/ProjectCard.jsx';

function SectionHeading({ index, eyebrow, title, description, aside }) {
  return (
    <div className="section-heading">
      <div>
        <div className="section-kicker"><span>{index}</span> / {eyebrow}</div>
        <h2>{title}<span className="accent-period">.</span></h2>
        {description && <p>{description}</p>}
      </div>
      {aside && <div className="section-heading-aside">{aside}</div>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of a Java backend engineering environment">
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="hero-visual-grid" aria-hidden="true"/>
      <div className="hero-mini-label label-a"><CircleDot size={13}/> SYSTEM / ONLINE</div>
      <div className="hero-mini-label label-b"><GitBranch size={13}/> DISTRIBUTED / BACKEND</div>
      <div className="hero-terminal">
        <div className="terminal-head"><div className="terminal-dots"><i/><i/><i/></div><span>backend.config</span><Terminal size={15}/></div>
        <div className="terminal-body">
          <div><span className="code-line-num">01</span><span className="code-purple">engineer</span><span className="code-fg">: </span><span className="code-yellow">"Madatha Ganesh"</span></div>
          <div><span className="code-line-num">02</span><span className="code-purple">specialty</span><span className="code-fg">: </span><span className="code-yellow">"Java Backend"</span></div>
          <div className="code-spacer"><span className="code-line-num">03</span></div>
          <div><span className="code-line-num">04</span><span className="code-purple">stack</span><span className="code-fg">: [</span></div>
          <div><span className="code-line-num">05</span><span className="code-indent code-mint">"Spring Boot", "REST APIs",</span></div>
          <div><span className="code-line-num">06</span><span className="code-indent code-mint">"AWS", "Kubernetes"</span></div>
          <div><span className="code-line-num">07</span><span className="code-fg">]</span></div>
          <div className="code-spacer"><span className="code-line-num">08</span></div>
          <div><span className="code-line-num">09</span><span className="code-purple">approach</span><span className="code-fg">: </span><span className="code-yellow">"build. improve. ship."</span></div>
        </div>
        <div className="terminal-bottom"><span><span className="terminal-status-dot"/> DEPLOYMENT READY</span><span>JAVA / SPRING</span></div>
      </div>
      <div className="floating-chip chip-left"><Server size={17}/> Spring Boot</div>
      <div className="floating-chip chip-right"><Cloud size={17}/> Cloud-native</div>
    </div>
  );
}

function IconForSkill({ kind }) {
  const props = { size: 21, strokeWidth: 1.8 };
  if (kind === 'code') return <Code2 {...props}/>;
  if (kind === 'layers') return <Layers3 {...props}/>;
  if (kind === 'network') return <Network {...props}/>;
  if (kind === 'cloud') return <Cloud {...props}/>;
  if (kind === 'shield') return <Shield {...props}/>;
  return <Database {...props}/>;
}

export default function Home() {
  const [projectFilter, setProjectFilter] = useState('Featured');
  const [copied, setCopied] = useState(false);
  const filters = ['Featured', 'All', 'Event-driven', 'Security', 'REST APIs'];
  const visibleProjects = projects.filter(p => {
    if (projectFilter === 'Featured') return p.featured;
    if (projectFilter === 'All') return true;
    return p.category === projectFilter;
  });
  useEffect(() => { if (!copied) return; const t = setTimeout(() => setCopied(false), 2500); return () => clearTimeout(t); }, [copied]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard permission is not always available; opening mailto is a reliable fallback.
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-left" aria-hidden="true"/>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill"><span className="pulse-dot"/> JAVA BACKEND ENGINEER <span className="eyebrow-divider"/> {profile.location.toUpperCase()}</div>
            <p className="hero-greeting">Hey, I'm <strong>Ganesh.</strong></p>
            <h1>Engineering the<br/><span>backend</span> that<br/>powers products<span className="accent-period">.</span></h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-buttons">
              <Link to="/#projects" className="button button-solid">Explore my work <ArrowUpRight size={18}/></Link>
              <a href={profile.resumeUrl} className="button button-outline" target="_blank" rel="noopener noreferrer"><Download size={18}/> View résumé</a>
            </div>
            <div className="hero-foot">
              <div className="hero-employer"><span className="hero-employer-icon"><Boxes size={20}/></span><span><strong>Genpact</strong><small>Java Backend Engineer · {profile.experience}</small></span></div>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="Open LinkedIn"><Linkedin size={19}/></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="Open GitHub"><Github size={19}/></a>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="shell hero-bottom"><a href="/#about" className="scroll-cue"><ArrowDownRight size={18}/> SCROLL TO DISCOVER</a><span>PORTFOLIO / 2026</span></div>
      </section>

      <section className="proof-strip" aria-label="Professional experience highlights">
        <div className="shell proof-grid">
          {achievements.map((a, i) => <div className="proof-item" key={a.label}>
            <div className="proof-index">0{i+1} / REAL-WORLD IMPACT</div>
            <strong>{a.value}<span className="proof-symbol">↗</span></strong>
            <p>{a.label}</p>
            <small>{a.note}</small>
          </div>)}
          <div className="proof-note"><span className="tiny-star">✳</span><p>Production work, real systems, measurable scope.</p></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-left">
            <div className="section-kicker"><span>01</span> / A LITTLE ABOUT ME</div>
            <h2>Not just writing code.<br/><span>Building systems</span><br/>that hold up<span className="accent-period">.</span></h2>
            <div className="about-symbol" aria-hidden="true"><span>{'{'} </span><span>MG</span><span> {'}'}</span></div>
          </div>
          <div className="about-right">
            <p className="about-lead">{profile.about}</p>
            <p className="body-muted">My recent work includes a production vehicle-intake backend, a Java 8-to-17 migration spanning eight services, and CI/CD quality workflows. Outside work, I build focused projects to sharpen my knowledge of event-driven systems and application security.</p>
            <div className="about-pillars">
              <div><Server size={22}/><strong>Build</strong><span>REST APIs, backend services & secure workflows</span></div>
              <div><GitBranch size={22}/><strong>Modernize</strong><span>Java migrations and maintainable systems</span></div>
              <div><Rocket size={22}/><strong>Deliver</strong><span>Cloud deployment, CI/CD & quality gates</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <SectionHeading index="02" eyebrow="PROFESSIONAL EXPERIENCE" title="Production-first mindset" description="The work behind the technology stack: building, upgrading, shipping and maintaining backend services." aside={<span className="section-aside-type">OCT 2024 — PRESENT</span>}/>
          <div className="work-header">
            <div className="work-logo"><Boxes size={31}/></div>
            <div className="work-title"><h3>{experience.title}</h3><p>{experience.company} <span className="work-separator">/</span> {experience.account}</p></div>
            <div className="work-place"><MapPin size={15}/> {experience.location}<span>{experience.dates}</span></div>
          </div>
          <p className="work-summary">{experience.summary}</p>
          <div className="work-grid">
            {experience.highlights.map((item, i) => (
              <article className="work-card" key={item.id}>
                <div className="work-card-top"><span>{item.eyebrow}</span><span>0{i+1}</span></div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="experience-disclaimer"><ShieldCheck size={15}/> Professional work summarized at a high level; proprietary code and internal architecture are not shared.</p>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell">
          <SectionHeading index="03" eyebrow="SELECTED PROJECTS" title="Built to learn. Made to last" description="A closer look at backend architecture, security, event processing and practical implementation choices." aside={<span className="outlined-count">0{projects.length} PROJECTS</span>}/>
          <div className="project-toolbar" aria-label="Filter projects">
            {filters.map(filter => <button key={filter} className={`filter-button ${projectFilter === filter ? 'active' : ''}`} aria-pressed={projectFilter === filter} onClick={() => setProjectFilter(filter)} type="button">{filter}</button>)}
          </div>
          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map(project => <ProjectCard project={project} key={project.slug} compact={!project.featured}/>)}
          </div>
          <div className="projects-note"><Github size={18}/> Each project has an architecture overview and engineering notes. <a href={profile.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="shell">
          <SectionHeading index="04" eyebrow="TECHNICAL TOOLKIT" title="The tools behind the work" description="A backend-focused toolkit shaped by professional experience, engineering fundamentals and personal projects." />
          <div className="skills-grid">{skills.map((group,i) => (
            <div className="skill-card" key={group.name}>
              <div className="skill-card-head"><span className="skill-icon"><IconForSkill kind={group.icon}/></span><span className="skill-index">0{i+1}</span></div>
              <h3>{group.name}</h3>
              <div className="skill-tag-grid">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
          ))}</div>
          <div className="skills-bottom"><Zap size={18}/><p>Strongest focus: Java, Spring Boot, REST APIs, microservices, cloud deployments and secure backend development.</p></div>
        </div>
      </section>

      <section className="section credentials-section" id="credentials">
        <div className="shell">
          <SectionHeading index="05" eyebrow="EDUCATION & CREDENTIALS" title="Always growing" description="Academic background and continuing learning that support my software engineering journey." />
          <div className="credentials-layout">
            <article className="education-card">
              <span className="card-overline"><GraduationCap size={18}/> EDUCATION</span>
              <span className="edu-year">{education.dates}</span>
              <h3>{education.school}</h3>
              <p>{education.qualification}</p>
              <div className="cgpa"><strong>{education.cgpa}</strong><span>CGPA</span></div>
              <div className="edu-extra"><Award size={18}/><span>{education.extra}</span></div>
            </article>
            <div className="cert-card">
              <div className="cert-header"><span className="card-overline"><Award size={18}/> CERTIFICATIONS</span><span>0{credentials.length} TOTAL</span></div>
              {credentials.map((cert, i) => <div className="cert-row" key={cert.name}>
                <span className="cert-counter">0{i+1}</span>
                <div><strong>{cert.name}</strong><span>{cert.provider}</span></div>
                <time>{cert.year}</time>
              </div>)}
            </div>
          </div>
          <div className="personal-notes"><span><BrainCircuit size={17}/> Beyond code</span><p>Volunteering: {secondaryDetails.volunteering}</p><p>Languages: {secondaryDetails.languages.join(' · ')}</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <div className="section-kicker"><span>06</span> / LET'S CONNECT</div>
            <h2>Let's build<br/>what's <em>next</em><span className="accent-period">.</span></h2>
            <p>Hiring for Java backend engineering? Have an interesting technical conversation in mind? I'd be glad to connect.</p>
            {profile.showPublicAvailability && <div className="availability-note"><CircleDot size={16}/> Exploring Java Backend Developer / SDE-1 opportunities · {profile.joiningNotice} notice</div>}
            <div className="contact-actions">
              <a className="button button-solid" href={`mailto:${profile.email}?subject=${encodeURIComponent('Java Backend Engineering Opportunity')}`}><Mail size={18}/> Email me <ArrowUpRight size={16}/></a>
              <button type="button" className="button button-outline" onClick={copyEmail} aria-live="polite">{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Email copied!' : 'Copy email'}</button>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-card-label">DIRECT CONTACT</span>
            <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}<ArrowUpRight size={21}/></a>
            <div className="contact-card-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={15}/></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={15}/></a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"><Download size={18}/> Résumé PDF <ArrowUpRight size={15}/></a>
            </div>
            <div className="contact-card-bottom"><MapPin size={16}/> {profile.location}<span>GMT +5:30</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
