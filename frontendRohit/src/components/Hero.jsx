import './Hero.css';

const METRICS = [
  { val: '99.9%',  label: 'System Uptime' },
  { val: '<2%',    label: 'Job Failure Rate' },
  { val: '30%',    label: 'Cost Reduction' },
  { val: '<2min',  label: 'MTTD' },
  { val: '18',     label: 'Microservices Deployed' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />

      <div className="hero-badge">
        <span className="live-dot" />
        Available for opportunities
      </div>

      <h1 className="hero-h1">
        <span className="hero-first">Rohit</span>
        <span className="hero-last">Mishra</span>
      </h1>

      <p className="hero-role">DevOps Engineer ↗ Cloud Infrastructure & SRE</p>

      <p className="hero-desc">
        Building production-grade platforms on AWS — from async job pipelines
        processing 1,500+ jobs/day to 18-service ECS Fargate deployments with full
        observability. I own reliability, not just deployments.
      </p>

      <div className="hero-metrics">
        {METRICS.map(m => (
          <div key={m.label} className="metric-card">
            <span className="metric-val">{m.val}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-cta">
        <a href="#projects" className="btn-primary">↓ View Projects</a>
        <a href="mailto:rm8619700@gmail.com" className="btn-outline">✉ Get in Touch</a>
        <a href="https://github.com/heyrohhh" className="btn-outline" target="_blank" rel="noreferrer">⌥ GitHub</a>
      </div>
    </section>
  );
}
