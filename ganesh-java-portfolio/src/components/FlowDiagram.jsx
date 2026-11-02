import { ArrowRight, GitBranch, LockKeyhole } from 'lucide-react';

export default function FlowDiagram({ project }) {
  return (
    <div className={`flow-diagram accent-${project.accent}`} aria-label={`Conceptual data flow for ${project.title}`}>
      <div className="flow-title"><span>{project.category === 'Security' ? <LockKeyhole size={16}/> : <GitBranch size={16}/>}</span> SYSTEM FLOW <span className="flow-note">Simplified / conceptual</span></div>
      <div className="flow-nodes">
        {project.flow.map((node, i) => (
          <div className="flow-step" key={`${node.title}-${i}`}>
            <div className="flow-node"><strong>{node.title}</strong><small>{node.detail}</small></div>
            {i < project.flow.length - 1 && <ArrowRight className="flow-arrow" aria-hidden="true" size={18}/>}
          </div>
        ))}
      </div>
      {project.slug === 'expensecore' && <div className="flow-footnote">Token invalidation: SHA-256 token hash → Redis denylist with TTL · Traceability: SLF4J / MDC correlation IDs</div>}
    </div>
  );
}
