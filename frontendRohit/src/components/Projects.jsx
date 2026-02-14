export default function Projects() {
  const projects = [
    {
      title: "Google Microservices Demo Migration (GCP → AWS)",
      desc: "Migrated production-grade microservices architecture from GCP Kubernetes to AWS ECS Fargate with complete IaC and CI/CD automation.",
      tools: ["AWS ECS Fargate", "Terraform", "GitHub Actions", "Docker", "ECR", "ALB", "Cloud Map", "CloudWatch"],
      link: "https://github.com/heyrohhh/microservices-demo.git",
      details: [
        "Migrated 12+ microservices from GCP Kubernetes to AWS ECS Fargate with zero server management.",
        "Designed complete infrastructure using Terraform including VPC, ALB, ECS clusters, and Cloud Map for service discovery.",
        "Built intelligent CI/CD pipeline with GitHub Actions using dorny/paths-filter to detect service-level changes and deploy only modified services.",
        "Implemented Application Load Balancer with path-based routing and custom health checks for frontend service.",
        "Configured AWS Cloud Map for internal service discovery and inter-service communication.",
        "Solved Docker Hub rate-limit issues by migrating all images to AWS ECR.",
        "Debugged and disabled GCP-specific Profiler causing runtime failures on AWS.",
        "Used CloudWatch logs extensively for debugging task failures, image pull errors, and health check issues.",
        "Practiced local Kubernetes deployment (Docker Desktop) to understand orchestration differences between ECS and K8s."
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