const experiences = [
  {
    role: "Software Engineer (QA)",
    company: "Tekkon Technology",
    location: "Kathmandu",
    period: "September 2019 - Present",
    responsibilities: [
      "Requirement analysing and task design",
      "Write and maintain automation code using Cypress",
      "CI/CD using GitHub Actions and CircleCI to run tests on cloud",
      "API testing using Postman",
      "Data management and testing on MySQL",
      "Performance testing using JMeter",
      "Web and mobile app testing",
      "AWS for test report publishing",
      "Socket testing",
      "Security testing using Burp Suite for penetration testing",
    ],
  },
  {
    role: "Software QA Engineer (Part-time)",
    company: "EnthuZiastic",
    location: "India",
    period: "June 2021 - Present",
    responsibilities: [
      "Manual testing on web and mobile applications",
      "Automated testing using Cypress with Cucumber",
      "Implemented CI/CD using GitHub Actions",
      "Parallel test execution",
      "GraphQL API testing",
      "Mobile app automation using Appium with Python",
      "Mobile automation CI using GitHub Actions and SauceLabs",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Seva Development",
    location: "Kathmandu",
    period: "July 2018 - September 2019",
    responsibilities: [
      "Set up test case reporting environments and test-case templates",
      "Set up test script frameworks and automation servers in cloud",
      "Automated test report generation and publishing",
      "Used Protractor, Appium, TestLink, and Jira",
      "Evaluated and enhanced QA processes, methodologies, and tools",
      "Built knowledge on the MEAN stack",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          Experience
        </h2>
        <div className="relative space-y-12 border-l-2 border-border pl-8">
          {experiences.map((exp) => (
            <div key={exp.period} className="relative">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <p className="mb-1 text-sm font-medium text-accent">
                {exp.period}
              </p>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="mb-4 text-muted">
                {exp.company} / {exp.location}
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
