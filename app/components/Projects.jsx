import Reveal from "./Reveal";
import Tilt from "./Tilt";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Australian Tenders",
    domain: "australiantenders.com.au",
    url: "https://australiantenders.com.au",
    summary:
      "Tender search and alerts. I own the Cypress suite and the Bitbucket pipeline it runs in.",
    tech: ["Express.js", "EJS", "MySQL", "AWS", "Cypress", "Bitbucket Pipelines"],
  },
  {
    name: "DiGii Social",
    domain: "digiisocial.com",
    url: "https://digiisocial.com",
    summary:
      "Real-time social platform. Socket.io traffic is the hard part to test, so that is where the coverage went.",
    tech: ["Node.js", "React", "MySQL", "AWS", "Socket.io", "Cypress", "GitHub Actions"],
  },
  {
    name: "Plant with Willow",
    domain: "plantwithwillow.com.au",
    url: "https://plantwithwillow.com.au",
    summary:
      "Flutter app with a Python backend. Tested the ordering flow across devices.",
    tech: ["Flutter", "Python", "Cypress"],
  },
  {
    name: "BD Water",
    domain: "bdwater.com.au",
    url: "https://bdwater.com.au",
    summary:
      "Ordering and delivery scheduling on an Angular front end over a Node and Mongo stack.",
    tech: ["Angular", "Node.js", "MongoDB", "AWS"],
  },
  {
    name: "EnthuZiastic",
    domain: "enthu.com",
    url: "https://enthu.com",
    summary:
      "Live class marketplace. GraphQL coverage on the API, Appium on mobile, both running in parallel on CI.",
    tech: ["Svelte", "GraphQL", "MySQL", "Cypress", "Appium", "GitHub Actions"],
  },
  {
    name: "Vivint",
    domain: "vivint.com",
    url: "https://vivint.com",
    summary: "Smart home platform. Manual and regression passes across releases.",
    tech: ["Manual Testing", "Regression"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scene px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Products"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 90}>
              <Tilt max={8} className="h-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slab sheen slab-lift d3 group block h-full p-7"
                >
                  <div className="z1 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                          {project.name}
                        </h3>
                        <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">
                          {project.domain}
                        </p>
                      </div>
                      <svg
                        className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H8m9 0v9"
                        />
                      </svg>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
