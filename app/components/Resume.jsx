import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function Resume() {
  return (
    <section className="scene-near px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Tilt max={4}>
            <div className="slab sheen slab-lift d3 flex flex-col items-start gap-6 p-9 sm:flex-row sm:items-center sm:justify-between">
              <div className="z1">
                <p className="font-mono text-[11px] tracking-widest text-accent uppercase">
                  Résumé
                </p>
                <h2 className="mt-2.5 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                  The whole thing on one page
                </h2>
                <p className="mt-2 text-muted">
                  Roles, tools, and dates in PDF form.
                </p>
              </div>
              <a
                href="/Kumarresume.pdf"
                download
                className="z1 inline-flex shrink-0 items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--lift-2)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                Download résumé
              </a>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
