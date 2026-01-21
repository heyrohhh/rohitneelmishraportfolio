export default function Contact() {
  return (
    <section className="border-t border-gray-900 pt-24 pb-28">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

        <p className="text-gray-500 font-mono text-sm mb-10">
          Open to DevOps and Cloud Infrastructure roles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 font-mono text-sm text-gray-400">
          <a
            href="mailto:rm8619700@gmail.com"
            className="hover:text-blue-500 transition"
          >
            EMAIL
          </a>

          <span className="hidden sm:block text-gray-700">|</span>

          <a
            href="https://linkedin.com/in/rohitmishra-techops"
            className="hover:text-blue-500 transition"
          >
            LINKEDIN
          </a>

          <span className="hidden sm:block text-gray-700">|</span>

          <a
            href="https://github.com/heyrohhh"
            className="hover:text-blue-500 transition"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
