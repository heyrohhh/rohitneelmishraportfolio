export default function Skills() {
  const categories = [
    {
      title: "AWS & Cloud",
      items: ["ECS Fargate", "EC2 & Auto-Scaling (ASG)", "ECR", "ALB", "VPC & Subnets", "Cloud Map", "CloudWatch", "IAM", "Secrets Manager", "SSM Session Manager", "NAT Gateway", "Route 53", "S3", "DynamoDB"]
    },
    {
      title: "Containers & Orchestration",
      items: ["Docker", "Kubernetes (K8s)", "ECS (Task Definitions, Autoscaling)", "Helm (Chart Authoring)", "AKS (Azure Kubernetes Service)", "HPA", "Ingress", "ConfigMaps & Secrets"]
    },
    {
      title: "IaC & CI/CD",
      items: ["Terraform (Modular Architecture)", "Remote State & Multi-Env IaC", "GitHub Actions (Matrix Builds)", "Jenkins (Multibranch Pipelines)", "Trivy Security Scanning", "Docker Image Versioning"]
    },
    {
      title: "Monitoring & Observability",
      items: ["Prometheus", "Grafana", "Alertmanager", "Redis Exporter", "PromQL", "Telegram Webhooks", "CloudWatch Alarms", "Structured Logging"]
    },
    {
      title: "Scripting & Development",
      items: ["Bash", "Python", "Node.js", "React", "MySQL", "Webhook / API Integration"]
    },
    {
      title: "Systems & Networking",
      items: ["Linux Administration", "VPC Design (Subnets, Routing, NAT)", "VLAN Configuration", "DNS Troubleshooting", "Firewall Rules", "Git / GitHub", "HTTP Metrics Analysis"]
    }
  ];

  return (
    <section className="mb-32">
      <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">02. Technical Stack</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-blue-500 font-mono mb-4 underline decoration-blue-800 underline-offset-8">{cat.title}</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              {cat.items.map(item => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}