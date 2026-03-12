export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 pt-20">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Software Engineer (QA)
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-accent">Kumar Pun</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-muted">
          A reliable Software QA Engineer always motivated to deliver complete
          test automation solutions using the latest technology. A great team
          player ready to tackle new challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
