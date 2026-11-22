import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { content, img } from "../content";
import type { Project } from "../types/content";
import { Chips, iconFor, LinkButtons } from "./LinkButtons";
import { Reveal } from "./Reveal";
import { Window } from "./Window";

const dates = (p: Project) => [p.start, p.end].filter(Boolean).join(" - ");

/** Image, or (if a project has none) a small terminal panel listing its stack. */
function Cover({ p, tall }: { p: Project; tall?: boolean }) {
  if (p.image) {
    return (
      <img
        src={img(p.image)}
        alt={`${p.name} screenshot`}
        loading="lazy"
        width={800}
        height={500}
        className={`w-full object-cover object-top ${tall ? "max-h-[360px]" : "aspect-[16/10]"}`}
      />
    );
  }
  const items = [...(p.stack ?? []), ...(p.languages ?? [])];
  return (
    <div className={`flex w-full flex-col justify-center bg-bg/70 p-5 font-mono text-xs leading-6 ${tall ? "min-h-[200px]" : "aspect-[16/10]"}`} aria-hidden="true">
      <p>
        <span className="text-accent">$</span> <span className="text-ink">cat {p.id}/stack.txt</span>
      </p>
      <p className="mt-1 text-muted">{items.join("  ·  ")}</p>
    </div>
  );
}

function Card({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const stack = p.stack ?? [];
  return (
    <article
      onClick={onOpen}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-line bg-surface2/40 transition-colors hover:border-accent/60"
    >
      <div className="overflow-hidden border-b border-line">
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          <Cover p={p} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">
            <button type="button" onClick={onOpen} className="text-left">
              {p.name}
            </button>
          </h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden />
        </div>
        <p className="mt-1 text-muted">{p.tagline}</p>
        {(p.context || dates(p)) && (
          <p className="mt-2 font-mono text-xs text-muted">
            {[p.context, dates(p)].filter(Boolean).join("  ·  ")}
          </p>
        )}
        {p.team && p.team.length > 0 && (
          <p className="mt-2 font-mono text-xs text-muted">with {p.team.map((m) => m.label).join(", ")}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.slice(0, 6).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
          {stack.length > 6 && <span className="chip">+{stack.length - 6}</span>}
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.links.map((l) => {
            const Icon = iconFor(l);
            return (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                title={l.label}
                aria-label={`${p.name}: ${l.label}`}
                className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function Detail({ p, onClose }: { p: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <motion.div
        className="my-8 w-full max-w-3xl"
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Window title={`~/projects/${p.id}`}>
          <div className="relative">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/90 text-muted hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <div className="max-h-[360px] overflow-hidden border-b border-line">
              <Cover p={p} tall />
            </div>
          </div>
          <div className="p-5 sm:p-7">
            <h3 id="project-title" className="text-2xl font-semibold sm:text-3xl">
              {p.name}
            </h3>
            <p className="mt-1 text-muted">{p.tagline}</p>
            {(p.context || dates(p)) && (
              <p className="mt-2 font-mono text-xs text-muted">
                {p.context &&
                  (p.contextUrl ? (
                    <a href={p.contextUrl} target="_blank" rel="noreferrer" className="link">
                      {p.context}
                    </a>
                  ) : (
                    p.context
                  ))}
                {p.context && dates(p) && "  ·  "}
                {dates(p)}
              </p>
            )}
            <ul className="mt-6 space-y-2.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-[0.6em] h-1 w-2.5 shrink-0 bg-accent/70" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            {p.team && p.team.length > 0 && (
              <p className="mt-6 text-muted">
                <span className="font-mono text-xs">team </span>
                {p.team.map((m, i) => (
                  <span key={m.url}>
                    {i > 0 && ", "}
                    <a href={m.url} target="_blank" rel="noreferrer" className="link">
                      {m.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
            <div className="mt-6 space-y-2">
              <Chips items={p.stack} label="stack" />
              <Chips items={p.languages} label="lang" />
            </div>
            <div className="mt-6">
              <LinkButtons links={p.links} />
            </div>
          </div>
        </Window>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [...content.projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <>
      <p className="mb-6 font-mono text-xs text-muted">
        {projects.length} items · click a project for details
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} i={i} className="h-full">
            <Card p={p} onOpen={() => setOpen(p)} />
          </Reveal>
        ))}
      </div>
      <AnimatePresence>{open && <Detail p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </>
  );
}
