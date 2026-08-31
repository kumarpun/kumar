export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-muted uppercase sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Kumar Pun</span>
        <span>Built and tested in Kathmandu</span>
      </div>
    </footer>
  );
}
