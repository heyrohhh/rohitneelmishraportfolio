export default function About() {
  return (
    <section className="mb-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
        01. Professional Summary
      </h2>

      <div className="text-gray-300 space-y-4 max-w-3xl leading-relaxed">
        <p>
          Cloud & DevOps Engineer with hands-on experience designing and deploying production-grade
          microservices infrastructure on AWS. Currently working at <strong>Positive Gems Pvt. Ltd.</strong> as
          an IT & Admin Support Executive, where I manage Linux systems, user access control, and
          internal IT infrastructure.
        </p>

        <p>
          I independently architected and deployed a complete AWS ECS Fargate environment — 18 containerized
          services, modular Terraform infrastructure, GitHub Actions CI/CD with Trivy security scanning,
          and a full observability stack (Prometheus, Grafana, Alertmanager) — built from the ground up
          as a portfolio-defining project demonstrating real-world DevOps practices.
        </p>

        <p>
          My background in IT operations gave me direct exposure to Linux administration, networking,
          and production system management — skills I now apply to cloud infrastructure, secure VPC design,
          service discovery, and secrets management on AWS.
        </p>

        <div className="pt-6 mt-6 border-t border-gray-900 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <p className="text-sm font-mono text-gray-400">
            Currently pursuing AWS Solutions Architect Associate — actively building on ECS Fargate, Terraform, and full-stack observability.
          </p>
        </div>
      </div>
    </section>
  );
}