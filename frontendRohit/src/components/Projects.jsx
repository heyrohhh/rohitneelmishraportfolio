import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Production Call Automation System',
    status: { label: 'PRODUCTION ↑ LIVE', color: 'green' },
    desc: 'End-to-end async job processing platform on AWS ECS Fargate — API → Redis queue → BullMQ workers → RDS. Processes ~1,500 jobs/day with p95 latency under 190ms, 99.9% uptime, and automated recovery from transient failures.',
    tools: ['AWS ECS Fargate','Redis + BullMQ','RDS','ALB','Terraform','Jenkins CI/CD','Prometheus','Grafana','SQS + DLQ','Lambda','DynamoDB'],
    metrics: [
      { val: '99.9%',   label: 'Uptime',         color: 'var(--green)' },
      { val: '<190ms',  label: 'P95 Latency',     color: 'var(--accent2)' },
      { val: '15%→2%',  label: 'Failure Rate',    color: 'var(--orange)' },
    ],
    details: [
      'Designed async workflow: API queues jobs to Redis (BullMQ), concurrency-3 workers process and write to RDS — fully decoupled, burst-tolerant architecture.',
      'Implemented 3-retry exponential backoff + DLQ routing. Achieved 85–90% auto-recovery on transient failures with zero job loss.',
      'Architected Razorpay webhook payment flow using Lambda, DynamoDB TTL session expiry, SQS, and DLQ — captures all failed events for audit.',
      'Provisioned all infra with Terraform (remote state, modular layout) — eliminated config drift, reduced infra cost by 30%.',
      'Zero-downtime deployments with ALB health checks + automated rollback via Jenkins. MTTD reduced to under 2 minutes.',
    ],
  },
  {
    title: 'Log-Driven RCA & Observability Engine',
    link: 'https://github.com/heyrohhh/rca_production',
    desc: 'Converts unstructured AWS CloudWatch logs into structured JSON events with per-request state classification, enabling incident management and RCA without a dedicated log aggregation service.',
    tools: ['AWS CloudWatch','Boto3','Python','JSON Structuring','Distributed Tracing'],
    details: [
      'Converted unstructured CloudWatch logs via Boto3 into structured JSON with state classification: success, failure, in-progress, rejected — per request.',
      'Detected silent distributed workflow failures using 2-minute time-window correlation of request IDs and lead IDs across backend and worker logs.',
      'Surfaced incomplete job chains invisible to individual service monitors — engineered for environments without ELK or dedicated log aggregation.',
    ],
  },
  {
    title: '18-Service Microservices Platform on AWS ECS',
    link: 'https://github.com/heyrohhh/microservices_demo',
    desc: "Migrated Google's Online Boutique from GCP Kubernetes to fully custom AWS ECS Fargate — 18 concurrent services, modular Terraform, change-triggered GitHub Actions matrix CI/CD, and complete observability.",
    tools: ['AWS ECS Fargate','ECR','ALB','Cloud Map','Secrets Manager','Terraform','GitHub Actions','Trivy','Prometheus','Grafana','Alertmanager'],
    details: [
      'Provisioned secure VPC with public/private subnets across 2 AZs, NAT Gateway — no public IPs on ECS tasks.',
      'All 18 ECS Fargate services running concurrently (cart, checkout, payment, frontend, redis, monitoring stack, etc.) — 1/1 tasks healthy.',
      'Change-triggered GitHub Actions: detects modified services, runs parallel matrix builds, Trivy scans for HIGH/CRITICAL vulns, then deploys — blocks on scan failure.',
      'AWS Cloud Map DNS-based service discovery enabling Prometheus to dynamically discover scrape targets without static IPs.',
      '5 custom alert rules (FrontendDown, HighCPU, 5xxError, LatencyHigh, P99High) → Alertmanager → Telegram.',
      'Zero hardcoded secrets — all credentials in AWS Secrets Manager, injected at ECS task runtime.',
    ],
  },
];

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal();

  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        {project.status && (
          <span className={`project-status status-${project.status.color}`}>{project.status.label}</span>
        )}
        {project.link && (
          <a href={project.link} className="project-link" target="_blank" rel="noreferrer">GITHUB_REPO →</a>
        )}
      </div>

      <p className="project-desc">{project.desc}</p>

      <div className="project-tools">
        {project.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}
      </div>

      {project.metrics && (
        <div className="project-metrics">
          {project.metrics.map(m => (
            <div key={m.label} className="project-metric">
              <span className="pm-val" style={{ color: m.color }}>{m.val}</span>
              <span className="pm-label">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <button className="expand-btn" onClick={() => setOpen(o => !o)}>
        {open ? '− HIDE DETAILS' : '+ SHOW DETAILS'}
      </button>

      {open && (
        <ul className="project-detail-list">
          {project.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projects">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>
      {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
    </section>
  );
}
