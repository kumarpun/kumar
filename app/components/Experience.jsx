import Reveal from "./Reveal";
import Tilt from "./Tilt";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Software Engineer (QA)",
    company: "Tekkon Technology",
    location: "Kathmandu, Nepal",
    period: "September 2019 - Present",
    current: true,
    responsibilities: [
      "Analyse requirements and raise the gaps before development starts",
      "Build and maintain the Cypress end-to-end suite",
      "Run suites on GitHub Actions and CircleCI on every commit",
      "Test REST APIs with Postman and verify state in MySQL",
      "Run load tests with JMeter and report the breaking point",
      "Cover web and mobile releases through manual and automated passes",
      "Publish test reports to AWS so the whole team can read them",
      "Test socket connections for real-time features",
      "Probe for vulnerabilities with Burp Suite",
    ],
  },
  {
    role: "Software QA Engineer (Part-time)",
    company: "EnthuZiastic",
    location: "India",
    period: "June 2021 - March 2025",
    current: true,
    responsibilities: [
      "Run manual test passes across web and mobile",
      "Write Cypress specs in Cucumber so non-engineers can read them",
      "Wire suites into GitHub Actions with parallel execution",
      "Test the GraphQL API layer end to end",
      "Automate mobile flows with Appium and Python",
      "Run cross-device suites on SauceLabs",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Seva Development",
    location: "Kathmandu, Nepal",
    period: "July 2018 - September 2019",
    current: false,
    responsibilities: [
      "Set up reporting environments and automation servers",
      "Built the test framework and published its reports",
      "Automated with Protractor and Appium, tracked in TestLink and Jira",
      "Improved the team's QA process end to end",
      "Worked across the MEAN stack to understand the code under test",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scene px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have done it"
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[5.5px] w-px bg-gradient-to-b from-accent via-border to-transparent"
          />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <Reveal key={experience.period} delay={index * 110}>
                <div className="relative pl-10">
                  <span
                    aria-hidden="true"
                    className={`absolute top-2 left-0 h-3 w-3 rounded-full border-2 border-accent bg-background ${
                      experience.current ? "pulse-dot" : ""
                    }`}
                  />
                  <Tilt max={5}>
                    <article className="slab sheen slab-lift d3 p-7">
                      <div className="z1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                            {experience.role}
                          </h3>
                          <span className="font-mono text-[11px] tracking-widest text-muted uppercase">
                            {experience.period}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm text-accent">
                          {experience.company} · {experience.location}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {experience.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Tilt>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
