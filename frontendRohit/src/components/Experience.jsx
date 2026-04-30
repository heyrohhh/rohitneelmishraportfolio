import useReveal from '../hooks/useReveal';
import './Experience.css';

const JOBS = [
  {
    company: 'Positive Gems Pvt. Ltd.',
    role: 'DevOps Engineer (IT Systems & Automation)',
    period: 'July 2025 – Present · Gurugram',
    current: true,
    bullets: [
      'Designed and operated async job pipeline (API → Redis → ECS → RDS) — 1,500 jobs/day, p95 <190ms, 99.9% uptime.',
      'Reduced job failure rate from 12–15% to under 2% via retry/backoff tuning; 85–90% auto-recovery on transient failures.',
      'Provisioned all infrastructure with Terraform (remote state, modular) — eliminated drift, cut infra cost by 30%.',
      'Zero-downtime deployments with ALB health checks + Jenkins automated rollback. MTTD <2 min with Prometheus + Alertmanager.',
      'Designed Razorpay webhook flow using Lambda, DynamoDB TTL, SQS, DLQ — zero payment event data loss.',
    ],
  },
  {
    company: 'Indo Internet Pvt. Ltd. (KollegeApply)',
    role: 'IT & Infrastructure Support Executive',
    period: 'January 2025 – June 2025',
    bullets: [
      'Administered Linux production servers — package management, cron scheduling, service lifecycle operations.',
      'Resolved persistent DNS misconfiguration causing repeated outages; reduced recurring ticket volume post-fix.',
      'Introduced structured RCA documentation format adopted by the team for all subsequent outage reports.',
    ],
  },
  {
    company: 'Collegedunia Web Pvt. Ltd.',
    role: 'IT Support Executive — Server & Networking',
    period: 'June 2024 – January 2025',
    bullets: [
      'Managed server room hardware, physical network infra — patch panels, switches, cabling.',
      'Linux system admin: user provisioning, service health, storage management.',
      'Identified and permanently resolved recurring service failure from misconfigured cron jobs; documented correct config.',
    ],
  },
];

function ExpItem({ job }) {
  const ref = useReveal();
  return (
    <div className={`exp-item reveal ${job.current ? 'exp-current' : ''}`} ref={ref}>
      <div className="exp-meta">
        <span className="exp-company">{job.company}</span>
        {job.current && <span className="exp-badge">CURRENT</span>}
      </div>
      <div className="exp-role">{job.role}</div>
      <div className="exp-period">{job.period}</div>
      <ul className="exp-list">
        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Experience() {
  const headerRef = useReveal();

  return (
    <section id="experience">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">04</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>
      <div className="exp-timeline">
        {JOBS.map(j => <ExpItem key={j.company} job={j} />)}
      </div>
    </section>
  );
}
