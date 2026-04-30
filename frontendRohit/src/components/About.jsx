import { useMemo } from 'react';
import useReveal from '../hooks/useReveal';
import './About.css';

const STATS = [
  { key: 'Current Role',  val: 'DevOps Engineer @ Positive Gems' },
  { key: 'Location',      val: 'Gurugram, Haryana' },
  { key: 'Experience',    val: '~2 years (infra + DevOps)' },
  { key: 'Education',     val: 'BCA — MDU (2021–2024)' },
  { key: 'Cert Target',   val: 'AWS SAA — Q3 2026', highlight: true },
];

function UptimeBar() {
  const blocks = useMemo(() => (
    Array.from({ length: 90 }, (_, i) => {
      const r = Math.random();
      return r > 0.997 ? 'down' : r > 0.99 ? 'warn' : '';
    })
  ), []);

  return (
    <div>
      <div className="uptime-label">JOB QUEUE UPTIME — LAST 90 DAYS</div>
      <div className="uptime-row">
        {blocks.map((cls, i) => (
          <div key={i} className={`uptime-block ${cls}`} title={cls || 'healthy'} />
        ))}
      </div>
      <div className="uptime-footer">
        <span>90 days ago</span><span>99.9% uptime</span><span>today</span>
      </div>
    </div>
  );
}

export default function About() {
  const ref1 = useReveal();

  return (
    <section id="about">
      <div className="about-grid reveal" ref={ref1}>
        {/* Left */}
        <div>
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </div>
          <div className="about-text">
            <p>I'm a DevOps Engineer who started in Linux server rooms and network closets — hands on patch panels, VLAN configs, and DNS troubleshooting. That foundation directly informs how I think about VPC design, service discovery, and platform reliability today.</p>
            <p>At Positive Gems, I own the full stack: designed an async job pipeline (API → Redis → ECS → RDS) that processes ~1,500 jobs/day with p95 latency under 190ms, reduced job failures from 15% to under 2%, and provisioned all infra with Terraform eliminating configuration drift.</p>
            <p>I build for reliability, not just deployment — fault-tolerant architecture, zero-downtime deploys, automated rollbacks, and observability that catches issues before users do.</p>
            <div className="about-highlight">
              <div className="about-highlight-title">CURRENT FOCUS</div>
              Pursuing AWS Solutions Architect Associate (Q3 2026) · Migrating ECS platform to AKS with Helm & Jenkins multibranch pipelines · Open to DevOps / SRE / Cloud roles.
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="terminal" style={{ marginTop: '56px' }}>
            <div className="terminal-header">
              <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
              <span className="term-title">system.metrics</span>
            </div>
            <UptimeBar />
            <div className="about-stats">
              {STATS.map(s => (
                <div className="about-stat" key={s.key}>
                  <span className="stat-key">{s.key}</span>
                  <span className="stat-val" style={s.highlight ? { color: 'var(--orange)' } : {}}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
