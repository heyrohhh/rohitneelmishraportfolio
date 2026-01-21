export default function Projects() {
  const projects = [
    {
      title: "CloudBook-Orchestrator: Full-Cycle DevOps",
      desc: "End-to-end containerized application with automated CI/CD and secure AWS deployment.",
      tools: ["GitHub Actions", "AWS EC2", "Nginx", "SSL/Certbot", "Docker", "MySQL"],
      link: "https://github.com/heyrohhh/CloudBook-Orchestrator.git",
      details: [
        "Built automated CI/CD pipelines in GitHub Actions for zero-downtime deployment.",
        "Deployed on AWS EC2 using Nginx and secured with Let's Encrypt SSL.",
        "Provisioned infrastructure with controlled security group access.",
        "Managed persistent database storage using Docker volumes."
      ]
    },
    {
      title: "AWS Portfolio Deployment with CI/CD & SSL",
      desc: "Production-grade React portfolio deployed on AWS using Docker, Ansible, Terraform, and GitHub Actions.",
      tools: [
        "AWS EC2",
        "Terraform",
        "Ansible",
        "Docker",
        "Nginx",
        "Certbot",
        "GitHub Actions"
      ],
      link: "https://github.com/heyrohhh/rohitneelmishraportfolio.git",
      details: [
        "Provisioned AWS EC2 and security groups using Terraform.",
        "Built a multi-stage Docker image to serve a React application via Nginx.",
        "Designed CI/CD pipeline with GitHub Actions to build and deploy images automatically.",
        "Implemented two-phase HTTP → HTTPS SSL bootstrapping using Certbot webroot validation.",
        "Separated build-time and runtime concerns by managing Nginx configuration via Ansible.",
        "Resolved real-world deployment issues including Docker port conflicts and SSL sequencing failures."
      ]
    },
    {
      title: "KubeMastery-Labs",
      desc: "Hands-on Kubernetes orchestration labs demonstrating workload management and service networking.",
      tools: ["Kubernetes", "Docker", "YAML", "kubectl", "Docker Desktop"],
      link: "https://github.com/heyrohhh/KubeMastery-Labs.git",
      details: [
        "Designed multi-pod deployments with self-healing behavior.",
        "Used ConfigMaps and Secrets for environment-specific configuration.",
        "Implemented NodePort and ClusterIP services for traffic routing."
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