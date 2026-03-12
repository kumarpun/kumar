export default function Resume() {
  return (
    <section className="bg-card py-12 px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Download My Resume
        </h2>
        <p className="max-w-md text-muted">
          Want a detailed overview of my experience and skills? Grab a copy of
          my resume.
        </p>
        <a
          href="/Kumarresume.pdf"
          download
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
}
