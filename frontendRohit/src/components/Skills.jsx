import useReveal from '../hooks/useReveal';
import './Skills.css';

const CATEGORIES = [
  {
    icon: '☁', title: 'AWS & Cloud',
    items: ['ECS Fargate','EC2 + ASG','RDS','ECR','ALB','VPC','IAM','CloudWatch','Secrets Manager','SSM','S3','DynamoDB','SQS + DLQ','Lambda'],
  },
  {
    icon: '⬡', title: 'Containers & Orchestration',
    items: ['Docker','Kubernetes','ECS Task Defs','Helm','AKS','HPA','Ingress','ConfigMaps'],
  },
  {
    icon: '⚙', title: 'IaC & CI/CD',
    items: ['Terraform','Remote State','GitHub Actions','Jenkins','Trivy','Matrix Builds','Auto-Rollback'],
  },
  {
    icon: '◉', title: 'Monitoring & Observability',
    items: ['Prometheus','Grafana','Alertmanager','PromQL','Redis Exporter','Telegram Webhooks','CloudWatch Alarms'],
  },
  {
    icon: '⌨', title: 'Queue & Async Systems',
    items: ['Redis','BullMQ','AWS SQS','DLQ','Exponential Backoff','Concurrency Control'],
  },
  {
    icon: '⊞', title: 'Systems & Dev',
    items: ['Linux Admin','Bash','Python','Node.js','VLAN / DNS','Firewall Rules','Git'],
  },
];

export default function Skills() {
  const headerRef = useReveal();
  const gridRef   = useReveal();

  return (
    <section id="stack">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">02</span>
        <h2 className="section-title">Technical Stack</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid reveal" ref={gridRef}>
        {CATEGORIES.map(cat => (
          <div key={cat.title} className="skill-group">
            <div className="skill-group-title">
              <span className="skill-icon">{cat.icon}</span> {cat.title}
            </div>
            <div className="skill-tags">
              {cat.items.map(item => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
