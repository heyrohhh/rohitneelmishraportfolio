export default function About() {
  return (
    <section className="mb-24"> {/* Reduced bottom margin from 32 to 24 */}
      <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
        01. Professional Summary
      </h2>

      <div className="text-gray-300 space-y-4 max-w-3xl leading-relaxed">
        <p>
          I started my career in July 2024 as an IT & Admin Support Executive after completing college.
          Currently, I work at <strong>PositiveGems Pvt. Ltd.</strong>, where I handle day-to-day IT and
          administrative support, manage IT operations, and take responsibility for selecting and
          implementing software based on business requirements.
        </p>

        <p>
          Alongside support responsibilities, I independently manage small technical implementations
          and ensure stable, cost-effective IT operations across the organization.
        </p>

        <p>
          Through hands-on exposure to systems, infrastructure, and operational workflows, I identified
          limitations in support-focused roles for my long-term growth. This led me to transition toward
          DevOps engineering, where I am actively building skills in automation, containerization,
          cloud infrastructure, CI/CD pipelines, and infrastructure as code.
        </p>

        {/* MICRO-SECTION: CURRENT FOCUS */}
        <div className="pt-6 mt-6 border-t border-gray-900 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <p className="text-sm font-mono text-gray-400">
            Currently focusing on Kubernetes workloads, CI/CD automation, and AWS infrastructure using Terraform.
          </p>
        </div>
      </div>
    </section>
  );
}