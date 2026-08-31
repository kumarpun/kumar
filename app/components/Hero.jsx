import Tilt from "./Tilt";
import Reveal from "./Reveal";

const specs = [
  { name: "loads the checkout page", ms: 412 },
  { name: "blocks a payment with an expired card", ms: 386 },
  { name: "keeps the cart after a session refresh", ms: 274 },
];

const signals = [
  { label: "p95 response", value: "184 ms" },
  { label: "load peak", value: "500 users" },
  { label: "socket events", value: "clean" },
];

/* the front pane of the rig — the specs themselves. Shared by the desktop
   stack and the standalone mobile card. */
function SpecPane({ className = "", style }) {
  return (
    <div className={`pane overflow-hidden p-5 ${className}`} style={style}>
      <div
        aria-hidden="true"
        className="sweep pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-[var(--sheen)] to-transparent"
      />
      <div className="flex items-center justify-between font-mono text-[11px]">
        <span className="tracking-widest text-muted uppercase">
          checkout.cy.js
        </span>
        <span className="text-[var(--pass)]">3 passing</span>
      </div>
      <ul className="mt-4 space-y-3">
        {specs.map((spec) => (
          <li
            key={spec.name}
            className="flex items-center gap-3 font-mono text-xs"
          >
            <span aria-hidden="true" className="text-[var(--pass)]">
              ✓
            </span>
            <span className="flex-1 text-foreground/85">{spec.name}</span>
            <span className="text-muted">{spec.ms}ms</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="scene relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        {/* ---------------- statement ---------------- */}
        <div>
          <Reveal className="mb-6 flex items-center gap-2.5 font-mono text-xs tracking-widest text-muted uppercase">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--pass)]" />
            Software Engineer (QA)
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="mt-1 block bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">
                Kumar Pun
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I write the tests that catch a bug before your users do. Six years
              building automation suites across web, mobile, and API — Cypress,
              Appium, JMeter, and the pipelines that run them on every commit.
            </p>
          </Reveal>

          <Reveal
            delay={270}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--lift-2)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold shadow-[var(--lift-1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
            >
              See the work
            </a>
          </Reveal>

          <Reveal
            delay={360}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-7 font-mono text-xs text-muted"
          >
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                6+
              </div>
              <div className="mt-1 tracking-wide">years testing</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                6
              </div>
              <div className="mt-1 tracking-wide">products shipped</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                3
              </div>
              <div className="mt-1 tracking-wide">platforms covered</div>
            </div>
          </Reveal>
        </div>

        {/* mobile: the full rig doesn't fit, but the page shouldn't go flat.
            One pane, resting angle, no pointer tilt — touch has no leave event
            to reset with, so the angle stays fixed. */}
        <Reveal delay={450} className="scene-near mt-14 lg:hidden">
          <div
            className="tilt d3"
            style={{ "--base-rx": "6deg", "--base-ry": "-13deg" }}
          >
            <SpecPane className="relative" />
          </div>
        </Reveal>

        {/* ---------------- the rig: a test run, stacked in depth ---------------- */}
        <Reveal delay={200} className="hidden lg:block">
          <Tilt
            max={9}
            className="d3"
            style={{ "--base-rx": "9deg", "--base-ry": "-19deg" }}
          >
            <div className="drift-slow relative mx-auto h-[340px] w-full max-w-[520px]">
              {/* front — the specs themselves */}
              <SpecPane
                className="absolute top-0 left-[6%] w-[88%]"
                style={{ transform: "translateZ(88px)" }}
              />

              {/* back — what the suite measures */}
              <div
                className="pane absolute bottom-0 left-[3%] w-[94%] p-5"
                style={{ transform: "translateZ(0px)" }}
              >
                <div className="font-mono text-[11px] tracking-widest text-muted uppercase">
                  GraphQL &amp; load
                </div>
                <dl className="mt-3.5 space-y-2.5">
                  {signals.map((signal) => (
                    <div
                      key={signal.label}
                      className="flex items-baseline justify-between font-mono text-xs"
                    >
                      <dt className="text-muted">{signal.label}</dt>
                      <dd className="text-foreground">{signal.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
