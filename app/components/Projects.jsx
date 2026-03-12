const projects = [
  {
    name: "Australian Tenders",
    url: "https://www.australiantenders.com.au/",
    description:
      "A tender solution for suppliers, buyers, and issuers. A central repository for tender opportunities where users can search and discover tenders.",
    tech: [
      "Express.js",
      "EJS",
      "MySQL",
      "AWS",
      "Cypress",
      "Bitbucket Pipelines",
    ],
  },
  {
    name: "DiGii Social",
    url: "https://digiisocial.com/",
    description:
      "A secure, school-based platform that educates and prepares children on how to interact responsibly with others online. Training wheels for social media.",
    tech: [
      "Node.js",
      "Express.js",
      "React",
      "MySQL",
      "AWS",
      "WebSocket/Socket.io",
      "Cypress",
      "GitHub Actions",
    ],
  },
  {
    name: "Plant with Willow",
    url: "https://plantwithwillow.com.au/",
    description:
      "An Australian e-commerce platform selling smart plant monitoring technology with IoT sensors and a mobile app to track plant health metrics like moisture, light, and humidity.",
    tech: ["Flutter", "Python", "Cypress"],
  },
  {
    name: "BD Water",
    url: "https://www.bdwater.com.au/",
    description:
      "A platform where users can trade and request water licenses.",
    tech: ["Angular", "Node.js", "MongoDB", "AWS"],
  },
  {
    name: "EnthuZiastic",
    url: "https://enthu.com/",
    description:
      "A community-driven platform for enthusiasts passionate about learning and sharing new skills every day by enrolling in courses.",
    tech: [
      "Svelte",
      "Node.js",
      "GraphQL",
      "MySQL",
      "Cypress",
      "Appium",
      "GitHub Actions",
    ],
  },
  {
    name: "Vivint",
    url: "https://www.vivint.com/",
    description:
      "A smart home security platform offering home automation, security cameras, and monitoring services for residential customers.",
    tech: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-card py-14 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:text-accent">
                  {project.name}
                </h3>
                <svg
                  className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-card px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
