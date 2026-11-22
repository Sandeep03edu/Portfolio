import { ArrowUpRight } from "lucide-react";
import { content } from "../content";
import { Reveal } from "./Reveal";

export function Writing() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {content.articles.map((a, i) => (
        <Reveal as="li" key={a.url} i={i}>
            <a
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="group block h-full rounded-xl border border-line bg-surface2/40 p-5 transition-colors hover:border-accent/60"
            >
              <p className="font-mono text-xs text-muted">
                {[a.platform, a.date, a.readTime].filter(Boolean).join("  ·  ")}
              </p>
              <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-semibold leading-snug">
                {a.title}
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden />
              </h3>
              {a.summary && <p className="mt-2 leading-relaxed text-muted">{a.summary}</p>}
            </a>
        </Reveal>
      ))}
    </ul>
  );
}
