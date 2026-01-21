export default function Projects() {
  const projects = [
   {
  title: "CloudBook-Orchestrator: Full-Cycle DevOps",
  desc: "End-to-end containerized application with automated CI/CD and secure AWS deployment.",
  tools: ["GitHub Actions", "AWS EC2", "Nginx", "SSL/Certbot", "Docker", "MySQL"],
  link: "https://github.com/heyrohhh/awsBms",
  details: [
    "Built automated CI/CD pipelines in GitHub Actions for zero-downtime deployment.",
    "Deployed on AWS EC2 using a reverse proxy (Nginx) and secured via Let's Encrypt (SSL).",
    "Provisioned cloud infrastructure with focus on security group rules and network isolation.",
    "Managed production database persistence using Docker Volumes."
  ]
},
   {
  title: "KubeMastery-Labs",
  desc: "A hands-on Kubernetes orchestration lab showcasing proficiency in managing scalable workloads, service discovery, and persistent storage.",
  tools: ["Kubernetes", "Docker", "YAML", "kubectl", "Docker Desktop"],
  link: "https://github.com/heyrohhh/KubeMastery-Labs.git",
  details: [
    "Architected multi-service deployments with automated self-healing capabilities.",
    "Configured ConfigMaps and Secrets to manage environment-specific variables securely.",
    "Implemented NodePort and ClusterIP services for optimized internal load balancing."
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