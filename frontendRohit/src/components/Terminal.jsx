import useReveal from '../hooks/useReveal';
import './Terminal.css';

const LINES = [
  { type: 'cmd',    prompt: '$', text: ' whoami' },
  { type: 'output info', text: 'rohit.mishra — DevOps Engineer, Gurugram' },
  { type: 'cmd',    prompt: '$', text: ' cat summary.txt' },
  { type: 'output', text: 'Junior DevOps & Cloud Engineer with hands-on ownership of production AWS systems.' },
  { type: 'output', text: 'Currently at Positive Gems — async job pipeline: 1,500 jobs/day, 99.9% uptime.' },
  { type: 'output', text: 'Deployed 18 microservices on ECS Fargate with Terraform + GitHub Actions matrix CI/CD.' },
  { type: 'output', text: 'Full observability: Prometheus → Grafana → Alertmanager → Telegram (MTTD < 2 min).' },
  { type: 'cmd',    prompt: '$', text: ' systemctl status career' },
  { type: 'status', text: 'Active:' },
  { type: 'cursor' },
];

export default function Terminal() {
  const ref = useReveal();

  return (
    <section className="terminal-section">
      <div className="terminal reveal" ref={ref}>
        <div className="terminal-header">
          <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
          <span className="term-title">rohit@aws-prod ~ — bash</span>
        </div>

        {LINES.map((line, i) => {
          if (line.type === 'cursor') return (
            <div className="term-line" key={i}>
              <span className="term-prompt">$</span>
              <span className="term-cursor" />
            </div>
          );
          if (line.type === 'status') return (
            <div className="term-line term-output" key={i}>
              <span className="term-success">● Active:</span>
              <span style={{ color: 'var(--text2)' }}> active (running) — Pursuing AWS SAA, Q3 2026</span>
            </div>
          );
          if (line.type.startsWith('cmd')) return (
            <div className="term-line" key={i}>
              <span className="term-prompt">{line.prompt}</span>
              <span className="term-cmd">{line.text}</span>
            </div>
          );
          return (
            <div className={`term-line term-output${line.type.includes('info') ? ' term-info' : ''}`} key={i}>
              {line.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}
