const skillCategories = [
  {
    title: "Test Automation",
    skills: ["Cypress", "Appium", "Playwright", "Postman", "Jmeter"],
  },
  {
    title: "Testing Types",
    skills: [
      "Manual Testing(Web & Mobile)",
      "API Testing",
      "GraphQL Testing",
      "Load Testing (JMeter)",
      "Penetration Testing (Burp Suite)",
      "Socket Testing",
    ],
  },
  {
    title: "CI/CD & DevOps",
    skills: [
      "GitHub Actions",
      "CircleCI",
      "Bitbucket Pipelines"
    ],
  },
  {
    title: "Development",
    skills: ["Node.js", "Next.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-card py-14 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
