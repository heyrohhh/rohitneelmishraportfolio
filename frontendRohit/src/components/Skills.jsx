export default function Skills() {
 const categories = [
  {
    title: "AWS & Cloud",
    items: ["ECS Fargate", "ECR", "ALB (Public & Private)", "VPC & Subnets", "Cloud Map", "CloudWatch", "IAM", "Secrets Manager", "SSM Session Manager", "NAT Gateway"]
  },
  {
    title: "IaC & CI/CD",
    items: ["Terraform (Modular)", "GitHub Actions", "Trivy Security Scanning", "Docker", "Remote State", "Multi-Environment IaC"]
  },
  {
    title: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "Alertmanager", "Redis Exporter", "PromQL", "Telegram Webhooks"]
  },
  {
    title: "Core IT & Operations",
    items: ["Linux Administration", "Bash Scripting", "Networking (VPC/Routing/NAT)", "Git / GitHub", "IT Operations Management"]
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