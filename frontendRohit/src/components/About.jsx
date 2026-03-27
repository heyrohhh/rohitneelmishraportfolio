export default function About() {
  return (
    <section className="mb-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
        01. Professional Summary
      </h2>

      <div className="text-gray-300 space-y-4 max-w-3xl leading-relaxed">
        <p>
          Junior DevOps & Cloud Engineer with hands-on experience building and deploying
          production-grade infrastructure on AWS and Kubernetes. Currently at{" "}
          <strong>Positive Gems Pvt. Ltd.</strong> as an IT Systems & Automation Executive —
          owning a full internal platform built on Node.js, React, and MySQL, provisioned on AWS
          with Docker, Jenkins CI/CD, and zero-trust access via SSM Session Manager.
        </p>

        <p>
          Independently architected and deployed a complete AWS ECS Fargate environment — 18
          microservices from Google's Online Boutique, provisioned end-to-end with modular
          Terraform, GitHub Actions matrix CI/CD with Trivy security scanning, and a full
          observability stack (Prometheus, Grafana, Alertmanager with Telegram webhooks). Currently
          migrating the same platform to AKS with Helm and Jenkins multibranch pipelines.
        </p>

        <p>
          Background in Linux production systems, networking, and IT infrastructure — including
          VLAN configuration, DNS troubleshooting, firewall policies, and incident management —
          skills I now apply directly to secure VPC design, service discovery, secrets management,
          and platform reliability on AWS and Azure.
        </p>

        <div className="pt-6 mt-6 border-t border-gray-900 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <p className="text-sm font-mono text-gray-400">
            Pursuing AWS Solutions Architect Associate — actively building on ECS Fargate,
            Kubernetes, Terraform, and full-stack observability. Open to entry-level DevOps /
            Cloud / SRE roles.
          </p>
        </div>
      </div>
    </section>
  );
}