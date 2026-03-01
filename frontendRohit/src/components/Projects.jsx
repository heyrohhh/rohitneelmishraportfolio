export default function Projects() {
  const projects = [
  {
    title: "Production-Grade Microservices Deployment on AWS",
    desc: "Migrated Google's Online Boutique microservices demo from GCP Kubernetes to a fully custom AWS ECS Fargate architecture with end-to-end infrastructure automation.",
    tools: ["AWS ECS Fargate", "ECR", "ALB", "Cloud Map", "Secrets Manager", "Terraform", "GitHub Actions", "Docker", "Trivy", "Prometheus", "Grafana", "Alertmanager", "Redis Exporter"],
    link: "https://github.com/heyrohhh/microservices_demo",
    details: [
      "Designed and provisioned a secure VPC with public/private subnets across 2 AZs, NAT Gateway, and route tables — no public IPs on ECS tasks.",
      "Deployed 18 ECS Fargate services (cart, checkout, payment, frontend, redis, monitoring stack, and more) all running concurrently with 1/1 tasks healthy.",
      "Built modular Terraform infrastructure covering ECS cluster, ALB (public + private), ECR, Cloud Map, Secrets Manager, and IAM roles.",
      "Implemented selective CI/CD pipeline in GitHub Actions: detects changed services, runs parallel matrix builds, Trivy scans for HIGH/CRITICAL vulnerabilities, then deploys — blocking pipeline if scan fails.",
      "Configured AWS Cloud Map for DNS-based internal service discovery, enabling Prometheus to dynamically discover scrape targets without static IPs.",
      "Integrated full observability stack: Prometheus scraping live metrics, 5 custom alert rules (FrontendDown, HighCPU, 5xxError, LatencyHigh, P99High), Alertmanager sending notifications to Telegram.",
      "Implemented secure bastion access via AWS SSM Session Manager with port forwarding — no SSH keys, no bastion EC2.",
      "Stored all sensitive credentials (Telegram token, Grafana admin password) in AWS Secrets Manager, injected at ECS task runtime — zero hardcoded secrets."
    ]
  }
];

  return (
    <section className="mb-20">
      <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">03. Projects</h2>
      <div className="space-y-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#111] p-6 border border-gray-800 hover:border-blue-900 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tools.map(t => <span key={t} className="text-[10px] bg-blue-900/20 text-blue-400 px-2 py-1 rounded font-mono">{t}</span>)}
            </div>
            <a href={p.link} className="text-xs font-mono text-blue-500">GITHUB_REPO →</a>
          </div>
        ))}
      </div>
    </section>
  );
}