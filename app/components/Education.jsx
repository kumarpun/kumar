import Reveal from "./Reveal";
import Tilt from "./Tilt";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scene px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Where it started" />

        <Reveal>
          <Tilt max={5}>
            <div className="slab sheen slab-lift d3 p-8">
              <div className="z1">
                <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                  2014 - 2018
                </p>
                <h3 className="mt-2.5 font-[family-name:var(--font-display)] text-xl font-semibold">
                  Bachelor in Computer Engineering
                </h3>
                <p className="mt-1.5 text-muted">
                  S.E.A College of Engineering and Technology
                </p>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
