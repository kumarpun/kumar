import Reveal from "./Reveal";
import Tilt from "./Tilt";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Test Automation",
    note: "Suites that run unattended",
    skills: ["Cypress", "Appium", "Playwright", "Postman", "JMeter"],
  },
  {
    title: "Testing Types",
    note: "What gets covered",
    skills: [
      "Manual Testing (Web & Mobile)",
      "API Testing",
      "GraphQL Testing",
      "Load Testing (JMeter)",
      "Penetration Testing (Burp Suite)",
      "Socket Testing",
    ],
  },
  {
    title: "CI/CD & DevOps",
    note: "Where the suites run",
    skills: ["GitHub Actions", "CircleCI", "Bitbucket Pipelines", "AWS"],
  },
  {
    title: "Development",
    note: "Enough to read the code under test",
    skills: ["Node.js", "Next.js", "MySQL", "Python"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scene px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I test with"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 90}>
              <Tilt max={7} className="h-full">
                <div className="slab sheen slab-lift d3 h-full p-7">
                  <div className="z1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                      {category.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] tracking-widest text-muted uppercase">
                      {category.note}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-accent hover:text-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
