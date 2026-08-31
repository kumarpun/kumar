import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, lede }) {
  return (
    <div className="mb-14">
      <Reveal className="font-mono text-xs tracking-widest text-accent uppercase">
        {eyebrow}
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={150}>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{lede}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
