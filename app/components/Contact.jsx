import Reveal from "./Reveal";
import Tilt from "./Tilt";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: "cumarpun1234@gmail.com",
    href: "mailto:cumarpun1234@gmail.com",
    external: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "Phone",
    value: "+977-9811991697",
    href: "tel:+9779811991697",
    external: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h2.6a1 1 0 01.97.76l1 4a1 1 0 01-.29.98l-1.6 1.5a15 15 0 006.1 6.1l1.5-1.6a1 1 0 01.98-.29l4 1a1 1 0 01.76.97V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: "Kumar Pun",
    href: "https://www.linkedin.com/in/kumar-pun-48b382179/",
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 9v9M6.5 6.2v.1M11 18v-5a3 3 0 016 0v5M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"
      />
    ),
  },
  {
    label: "GitHub",
    value: "kumarpun",
    href: "https://github.com/kumarpun",
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.9a3.4 3.4 0 00-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0018.9 4a4.9 4.9 0 00-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 00-6.8 0C5.7.1 4.6.4 4.6.4A4.9 4.9 0 004.5 4a5.2 5.2 0 00-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 00-.9 2.6V21"
      />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scene px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-14">
          <Reveal className="font-mono text-xs tracking-widest text-accent uppercase">
            Contact
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Tell me what needs testing
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              Open to QA and test automation roles, and to a conversation about
              a suite that has stopped being trusted. Email is fastest.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contactLinks.map((link, index) => (
            <Reveal key={link.label} delay={index * 80}>
              <Tilt max={10} className="h-full">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="slab sheen slab-lift d3 group flex h-full flex-col items-center gap-3 p-6"
                >
                  <span className="z2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-accent transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </svg>
                  </span>
                  <span className="z1 font-mono text-[11px] tracking-widest text-muted uppercase">
                    {link.label}
                  </span>
                  <span className="z1 text-xs break-all text-foreground/80">
                    {link.value}
                  </span>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
