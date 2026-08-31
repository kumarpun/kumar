import Reveal from "./Reveal";
import Tilt from "./Tilt";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Based in", value: "Kathmandu, Nepal" },
  { label: "Current role", value: "Software Engineer (QA), Tekkon Technology" },
  // { label: "Also at", value: "EnthuZiastic (part-time QA)" },
  { label: "Coverage", value: "Web · Mobile · API" },
];

export default function About() {
  return (
    <section id="about" className="scene px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="How I work" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <Reveal>
              <p>
                I have spent six years making sure software behaves the way it
                promises. That means reading requirements closely enough to spot
                the gap before a line of code is written, then turning what is
                left into automated coverage that runs on every commit.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                My day-to-day is Cypress for the web, Appium for mobile, Postman
                and GraphQL for the API layer, JMeter when the question is
                &ldquo;does it hold at 500 users&rdquo;, and Burp Suite when the
                question is &ldquo;can someone break in&rdquo;. The suites live
                in GitHub Actions, CircleCI, and Bitbucket Pipelines, with
                reports published where the whole team can read them.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Automation is the part people notice. The part that matters more
                is the process around it: reproducible bug reports, a test plan
                that maps to real risk, and a suite the team actually trusts
                when it goes red.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <Tilt max={6}>
              <dl className="slab sheen slab-lift divide-y divide-border overflow-hidden">
                {facts.map((fact) => (
                  <div key={fact.label} className="px-6 py-5">
                    <dt className="font-mono text-[11px] tracking-widest text-muted uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
