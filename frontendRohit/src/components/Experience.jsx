export default function Experience() {
    return (
        <section className="mb-32">
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">04. Experience</h2>

            {/* PositiveGems */}
            <div className="border-l border-gray-800 pl-8 relative mb-12">
                <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[4.5px] top-2"></div>
                <h3 className="text-xl font-bold">IT Systems & Automation Executive</h3>
                <p className="text-blue-500 font-mono text-sm">
                    Positive Gems Pvt. Ltd. | July 2025 – Present
                </p>
                <ul className="mt-6 space-y-3 text-gray-400 text-sm list-disc ml-4">
                    <li>Owned end-to-end delivery of an internal call automation platform (Node.js, React, MySQL) — responsible for system design, deployment architecture, and ongoing production maintenance.</li>
                    <li>Provisioned AWS infrastructure — public/private VPC subnets, EC2, Route 53, CloudWatch, and SSM Session Manager for zero-trust access (no bastion, no public SSH).</li>
                    <li>Containerized application using Docker and built Jenkins CI/CD pipeline to automate image build, deployment, and rollback workflows on EC2.</li>
                    <li>Designed and deployed an event-driven webhook service integrating Shiprocket with Avtar AI — handled real-time event ingestion, payload validation, and API communication.</li>
                    <li>Automated internal IT workflows using Bash and Python scripting — reduced manual operational effort by 60% across repeated admin tasks.</li>
                    <li>Maintained and hardened Linux production servers — enforced user access controls, sudo policies, and SSH key hygiene across infrastructure.</li>
                </ul>
            </div>

            {/* KollegeApply */}
            <div className="border-l border-gray-800 pl-8 relative mb-12">
                <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[4.5px] top-2"></div>
                <h3 className="text-xl font-bold">IT & Infrastructure Support Executive</h3>
                <p className="text-blue-500 font-mono text-sm">
                    Indo Internet Pvt. Ltd. (KollegeApply) | Jan 2025 – Jun 2025
                </p>
                <ul className="mt-6 space-y-3 text-gray-400 text-sm list-disc ml-4">
                    <li>Administered Linux servers in a production environment — handled package management, cron scheduling, and service restarts under live conditions.</li>
                    <li>Supported network configuration tasks including VLAN setup, DNS troubleshooting, and firewall rule reviews.</li>
                    <li>Triaged and escalated infrastructure incidents — maintained incident logs and contributed to post-incident root cause documentation.</li>
                </ul>
            </div>

            {/* Collegedunia */}
            <div className="border-l border-gray-800 pl-8 relative mb-12">
                <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[4.5px] top-2"></div>
                <h3 className="text-xl font-bold">IT Support Executive — Server Room & Networking</h3>
                <p className="text-blue-500 font-mono text-sm">
                    Collegedunia Web Pvt. Ltd. | Jun 2024 – Jan 2025
                </p>
                <ul className="mt-6 space-y-3 text-gray-400 text-sm list-disc ml-4">
                    <li>Managed server room hardware and physical network infrastructure including patch panels, switches, and cabling.</li>
                    <li>Handled Linux system administration tasks — user provisioning, service health checks, and storage management.</li>
                    <li>Monitored network and system health; escalated issues and documented resolutions in internal ticketing system.</li>
                </ul>
            </div>

        </section>
    );
}