import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content, prompt } from "../content";
import { socials } from "../socials";
import type { Theme } from "../hooks/useTheme";

interface Command {
  name: string;
  hint: string;
  run: () => void;
}

interface Props {
  open: boolean;
  onClose: () => void;
  setTheme: (t: Theme) => void;
}

/** Optional keyboard navigation for visitors who like to type. */
export function CommandPalette({ open, onClose, setTheme }: Props) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const [note, setNote] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    return [
      ...content.sections.map((s) => ({ name: `cd ${s.nav}`, hint: s.heading, run: go(s.id) })),
      ...socials.map((s) => ({
        name: `open ${s.key}`,
        hint: s.display,
        run: () => (s.key === "email" ? (window.location.href = s.url) : window.open(s.url, "_blank", "noopener")),
      })),
      {
        name: "copy email",
        hint: content.links.email,
        run: () => void navigator.clipboard?.writeText(content.links.email).catch(() => undefined),
      },
      { name: "theme dark", hint: "Dark theme", run: () => setTheme("dark") },
      { name: "theme light", hint: "Light theme", run: () => setTheme("light") },
    ];
  }, [setTheme]);

  const list = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length || q.trim() === "help") return commands;
    return commands.filter((c) => words.every((w) => `${c.name} ${c.hint}`.toLowerCase().includes(w)));
  }, [q, commands]);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      setNote("");
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  const runAt = (i: number) => {
    const c = list[i];
    if (!c) {
      setNote(`command not found: ${q.trim()}. Type help to see all commands.`);
      return;
    }
    onClose();
    setTimeout(c.run, 60);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(sel);
    }
  };

  useEffect(() => {
    document.getElementById(`cmd-${sel}`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="window w-full max-w-xl overflow-hidden"
            initial={{ y: -8, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -8, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-sm">
              <span className="shrink-0 text-accent">{prompt}</span>
              <span className="shrink-0 text-muted">:~$</span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKey}
                placeholder="type a command, or help"
                aria-label="Command"
                aria-controls="cmd-list"
                aria-activedescendant={list[sel] ? `cmd-${sel}` : undefined}
                className="min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-muted/70 focus-visible:outline-none"
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <ul id="cmd-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2 font-mono text-[13px]">
              {list.map((c, i) => (
                <li
                  id={`cmd-${i}`}
                  key={c.name}
                  role="option"
                  aria-selected={i === sel}
                  onMouseMove={() => setSel(i)}
                  onClick={() => runAt(i)}
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-md px-3 py-2 ${i === sel ? "bg-surface2 text-accent" : "text-ink"}`}
                >
                  <span className="shrink-0">{c.name}</span>
                  <span className="truncate text-xs text-muted">{c.hint}</span>
                </li>
              ))}
              {list.length === 0 && (
                <li className="px-3 py-2 text-muted">{note || `command not found: ${q.trim()}`}</li>
              )}
            </ul>
            <p className="border-t border-line px-4 py-2 font-mono text-[11px] text-muted">
              up/down to move · enter to run · esc to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
