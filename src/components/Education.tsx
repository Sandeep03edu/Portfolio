import { MapPin } from "lucide-react";
import { content, img } from "../content";
import type { Education as Edu } from "../types/content";
import { Reveal } from "./Reveal";

/** Syntax-highlighted JSON view of the education data (decorative). */
function JsonView({ items }: { items: Edu[] }) {
  const fields: (keyof Edu)[] = ["institution", "degree", "start", "end", "scoreLabel", "score"];
  return (
    <pre className="whitespace-pre-wrap break-words rounded-xl border border-line bg-bg/70 p-4 font-mono text-[12.5px] leading-6" aria-hidden="true">
      <span className="text-muted">[</span>
      {items.map((e, i) => (
        <span key={e.institution}>
          {"\n  "}
          <span className="text-muted">{"{"}</span>
          {fields
            .filter((f) => e[f])
            .map((f, j, arr) => (
              <span key={f}>
                {"\n    "}
                <span className="text-amber">"{f}"</span>
                <span className="text-muted">: </span>
                <span className="text-accent">"{e[f]}"</span>
                {j < arr.length - 1 && <span className="text-muted">,</span>}
              </span>
            ))}
          {"\n  "}
          <span className="text-muted">{"}"}</span>
          {i < items.length - 1 && <span className="text-muted">,</span>}
        </span>
      ))}
      {"\n"}
      <span className="text-muted">]</span>
    </pre>
  );
}

export function Education() {
  const items = content.education;
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <Reveal className="hidden min-w-0 lg:block">
        <JsonView items={items} />
      </Reveal>
      <div className="space-y-5">
        {items.map((e, i) => (
          <Reveal key={e.institution} i={i + 1}>
            <article className="overflow-hidden rounded-xl border border-line bg-surface2/40 sm:grid sm:grid-cols-[180px_1fr]">
              {e.image && (
                <img src={img(e.image)} alt={e.institution} loading="lazy" width={360} height={240} className="h-40 w-full object-cover sm:h-full" />
              )}
              <div className="p-5">
                {e.level && <p className="font-mono text-xs text-amber">{e.level}</p>}
                <h3 className="mt-1 text-lg font-semibold leading-snug">
                  {e.url ? (
                    <a href={e.url} target="_blank" rel="noreferrer" className="hover:text-accent">
                      {e.institution}
                    </a>
                  ) : (
                    e.institution
                  )}
                </h3>
                <p className="mt-1 text-muted">{e.degree}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
                  <span>
                    {e.start} - {e.end}
                  </span>
                  {e.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" aria-hidden /> {e.location}
                    </span>
                  )}
                </div>
                {e.score && (
                  <p className="mt-3">
                    <span className="text-muted">{e.scoreLabel}: </span>
                    <span className="text-xl font-semibold text-accent">{e.score}</span>
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
