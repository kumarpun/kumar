import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Kumar Pun | Software Engineer (QA)",
  description:
    "Portfolio of Kumar Pun — Software QA Engineer specializing in test automation, CI/CD, and quality assurance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Dark ships as the default (class is already on <html>). This runs
            before first paint and only strips it for a visitor who has
            explicitly chosen light, so neither theme flashes the other. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`,
          }}
        />
        {/* scroll reveals are JS-driven; without JS they must never hide content */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="backdrop" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
