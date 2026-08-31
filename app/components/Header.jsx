"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Toolkit" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle({ className = "" }) {
  const { dark, setDark } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {dark ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.7-6.7l-1.4 1.4M7.7 16.3l-1.4 1.4m12 0l-1.4-1.4M7.7 7.7L6.3 6.3M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
          />
        )}
      </svg>
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/75 shadow-[var(--lift-1)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight"
        >
          Kumar<span className="text-accent">Pun</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 font-mono text-[11px] tracking-widest text-muted uppercase transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-border"
          >
            <span
              className={`h-px w-4 bg-foreground transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <ul className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 font-mono text-[11px] tracking-widest text-muted uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
