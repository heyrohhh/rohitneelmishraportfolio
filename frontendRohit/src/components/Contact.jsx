import useReveal from '../hooks/useReveal';
import './Contact.css';

const LINKS = [
  { href: 'mailto:rm8619700@gmail.com',                  label: '✉ rm8619700@gmail.com' },
  { href: 'https://linkedin.com/in/rohitmishra-techops', label: 'in LinkedIn',             external: true },
  { href: 'https://github.com/heyrohhh',                 label: '⌥ GitHub',               external: true },
  { href: 'tel:+916283426683',                           label: '✆ +91 6283426683' },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="contact-section reveal" ref={ref}>
      <div className="contact-glow" />
      <div className="contact-eyebrow">05. Let's Connect</div>
      <h2 className="contact-title">
        Open to DevOps,<br />SRE & Cloud Roles
      </h2>
      <p className="contact-sub">Available for full-time opportunities · Gurugram / Remote</p>
      <div className="contact-links">
        {LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="contact-link"
            {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
