import { useEffect, useState } from "react";
import { FileText, Menu, Moon, Search, Sun, X } from "lucide-react";
import { content, prompt } from "../content";
import { social } from "../socials";
import type { Theme } from "../hooks/useTheme";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

export function TabBar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const sections = content.sections.filter((s) => s.id !== "whoami");
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const resume = social("resume");

  // Highlight the section currently in view.
  useEffect(() => {
    const els = content.sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const tab = (id: string) =>
    `rounded-md px-2.5 py-1.5 font-mono text-[13px] transition-colors ${
      active === id ? "bg-surface2 text-accent" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-[1360px] items-center gap-3 px-4 sm:px-6" aria-label="Sections">
        <a href="#whoami" className="shrink-0 font-mono text-sm">
          <span className="text-accent">{prompt}</span>
          <span className="text-muted">:~</span>
        </a>

        <ul className="mx-auto hidden items-center gap-0.5 xl:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={tab(s.id)} aria-current={active === s.id ? "true" : undefined}>
                {s.nav}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg border border-line px-2.5 py-1.5 font-mono text-xs text-muted hover:border-accent hover:text-ink sm:flex"
          >
            <Search className="h-3.5 w-3.5" aria-hidden />
            <span>Run a command</span>
            <kbd className="rounded border border-line bg-surface2 px-1.5 text-[11px]">{isMac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted hover:border-accent hover:text-ink"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
          </button>
          {resume && (
            <a href={resume.url} target="_blank" rel="noreferrer" className="btn-primary hidden py-1.5 sm:inline-flex">
              <FileText className="h-4 w-4" aria-hidden /> Resume
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted hover:text-ink xl:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-bg/95 xl:hidden">
          <ul className="mx-auto grid max-w-[1360px] grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3 sm:px-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)} className={`block ${tab(s.id)}`}>
                  <span className="text-accent/70">cd </span>
                  {s.nav}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => { setOpen(false); onOpenPalette(); }} className={`block w-full text-left ${tab("")}`}>
                <span className="text-accent/70">$ </span>run a command
              </button>
            </li>
            {resume && (
              <li className="sm:hidden">
                <a href={resume.url} target="_blank" rel="noreferrer" className={`block ${tab("")}`}>
                  <span className="text-accent/70">open </span>resume
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
