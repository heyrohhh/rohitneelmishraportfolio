export default function Skills() {
  const categories = [
    {
      title: "DevOps & Cloud",
      items: ["Git / GitHub", "GitHub Actions", "Docker / Compose", "Kubernetes", "AWS (EC2/VPC)", "Terraform"]
    },
    {
      title: "Core IT & Operations",
      items: ["Linux Administration", "Bash Scripting", "Networking Basics", "IT Operations Management"]
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